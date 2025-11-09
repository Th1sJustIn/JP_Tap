import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep images in root for better caching
          if (/\.(webp|png|jpe?g|svg|gif)$/i.test(assetInfo.name)) {
            return '[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
});
