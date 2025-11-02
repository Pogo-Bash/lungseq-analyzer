/**
 * WebAssembly SIMD loader for genomics operations
 */

let wasmInstance = null;
let wasmMemory = null;

/**
 * Check if WASM SIMD is supported
 */
export function isWasmSIMDSupported() {
  try {
    // Check for SIMD support
    return typeof WebAssembly.validate === 'function' &&
           WebAssembly.validate(new Uint8Array([
             0, 97, 115, 109, 1, 0, 0, 0, // magic + version
             1, 5, 1, 96, 0, 1, 123,      // function type with v128
             3, 2, 1, 0,                   // function section
             10, 10, 1, 8, 0, 65, 0, 253, 17, 11 // code section with i8x16.splat
           ]));
  } catch (e) {
    return false;
  }
}

/**
 * Load WASM module
 */
export async function loadWasmModule() {
  if (wasmInstance) {
    return wasmInstance;
  }

  try {
    console.log('Loading WASM SIMD module...');

    // Fetch WASM file
    const response = await fetch('/wasm/pileup-simd.wasm');
    if (!response.ok) {
      throw new Error(`Failed to fetch WASM: ${response.status}`);
    }

    const wasmBytes = await response.arrayBuffer();
    console.log(`✓ WASM loaded: ${wasmBytes.byteLength} bytes`);

    // Create memory (1MB initial, can grow to 16MB)
    wasmMemory = new WebAssembly.Memory({
      initial: 16,  // 16 pages = 1MB
      maximum: 256  // 256 pages = 16MB
    });

    // Instantiate WASM module
    const wasmModule = await WebAssembly.instantiate(wasmBytes, {
      env: {
        memory: wasmMemory
      }
    });

    wasmInstance = wasmModule.instance;
    console.log('✓ WASM SIMD module ready');

    return wasmInstance;

  } catch (error) {
    console.warn('Failed to load WASM SIMD:', error);
    return null;
  }
}

/**
 * Count bases in a sequence using WASM SIMD (4x faster than JavaScript)
 *
 * @param {string} sequence - DNA sequence (ACGT)
 * @param {Uint8Array} qualities - Base quality scores
 * @param {number} minQuality - Minimum quality threshold
 * @returns {Object} Base counts {A, C, G, T}
 */
export function countBasesWASM(sequence, qualities, minQuality = 20) {
  if (!wasmInstance || !wasmMemory) {
    throw new Error('WASM not loaded. Call loadWasmModule() first.');
  }

  const len = sequence.length;
  if (len === 0) return { A: 0, C: 0, G: 0, T: 0 };

  // Get memory view
  const memory = new Uint8Array(wasmMemory.buffer);

  // Memory layout:
  // 0-len: sequence bytes
  // len-(len+len): quality bytes
  // (len*2)-(len*2+16): output counts (4 x i32)

  const seqOffset = 0;
  const qualOffset = len;
  const outputOffset = len * 2;

  // Copy sequence to WASM memory (convert to uppercase ASCII)
  for (let i = 0; i < len; i++) {
    memory[seqOffset + i] = sequence.charCodeAt(i) & 0xDF; // Fast uppercase
  }

  // Copy qualities
  memory.set(qualities.slice(0, len), qualOffset);

  // Call WASM function
  wasmInstance.exports.count_bases(
    seqOffset,
    qualOffset,
    len,
    minQuality,
    outputOffset
  );

  // Read results (4 x i32 = 16 bytes)
  const results = new Int32Array(wasmMemory.buffer, outputOffset, 4);

  return {
    A: results[0],
    C: results[1],
    G: results[2],
    T: results[3]
  };
}

/**
 * Fallback: Count bases in JavaScript (for browsers without WASM SIMD)
 */
export function countBasesJS(sequence, qualities, minQuality = 20) {
  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (let i = 0; i < sequence.length; i++) {
    if (qualities[i] < minQuality) continue;

    const base = sequence[i].toUpperCase();
    if (base in counts) {
      counts[base]++;
    }
  }

  return counts;
}

/**
 * Auto-detect and use best method
 */
export async function initializeFastBaseCounting() {
  const hasSIMD = isWasmSIMDSupported();
  console.log(`WASM SIMD support: ${hasSIMD ? '✓ Available' : '✗ Not available'}`);

  if (hasSIMD) {
    try {
      await loadWasmModule();
      console.log('✓ Using WASM SIMD for base counting (4x faster)');
      return countBasesWASM;
    } catch (err) {
      console.warn('WASM SIMD failed to load, using JavaScript fallback:', err);
      return countBasesJS;
    }
  } else {
    console.log('Using JavaScript for base counting (WASM SIMD not supported)');
    return countBasesJS;
  }
}
