import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  
  server: {
    port: 3000,
    // Enable SharedArrayBuffer for WASM threading
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    // Proxy for TCGA/ICGC APIs (avoid CORS)
    proxy: {
      '/api/gdc': {
        target: 'https://api.gdc.cancer.gov',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/gdc/, ''),
      },
      '/api/icgc': {
        target: 'https://dcc.icgc.org/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/icgc/, ''),
      },
    },
  },
  
  optimizeDeps: {
    exclude: ['biowasm'], // Will create this later
  },
  
  build: {
    target: 'esnext',
    // Don't inline WASM files
    assetsInlineLimit: 0,
  },
  
  worker: {
    format: 'es',
  },
})
