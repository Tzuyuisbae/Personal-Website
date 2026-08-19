import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// CRA served from the domain root (homepage: https://liujoe.com/), so base '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Keep the CRA output dir so `gh-pages -d build` and CNAME copying are unchanged.
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
