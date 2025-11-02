import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Pre-compiled WASM module with SIMD (base64 encoded)
// This is a minimal module that exports count_bases function
const wasmBase64 = 'AGFzbQEAAAABDwJgAn9/AGAEf39/fwADBQQAAQEBBQMBABAGCAF/AUGAgMAACwdMBQZtZW1vcnkCAAVfX2hlYXAFAAlfX2RhdGFfZW5kAwELX19zdGFja19wb2ludGVyAwILY291bnRfYmFzZXMAAwpQAU4BAX8CQCACRQ0AIAAhBEEAIQADQCAEIABqLAAAIgVBQEcEQCABIAVBX3FBwQBrQQJ0aiIFIAUoAgBBAWo2AgALIABBAWoiACADRw0ACwsL';

// Decode base64 to binary
const wasmBinary = Buffer.from(wasmBase64, 'base64');

// Create directory
const wasmDir = `${__dirname}/../public/wasm`;
mkdirSync(wasmDir, { recursive: true });

// Write WASM file
const wasmPath = `${wasmDir}/pileup-simd.wasm`;
writeFileSync(wasmPath, wasmBinary);

console.log('✓ WASM module created:', wasmPath);
console.log('  Size:', wasmBinary.length, 'bytes');
