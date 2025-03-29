// import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react(), MillionLint.vite()],
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
});
