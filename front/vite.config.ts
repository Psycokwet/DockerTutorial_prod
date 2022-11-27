import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  //The following lines fixes hot reload in windows, and are not part of the vite boilerplate
  server: {
    watch: {
      usePolling: true
    }
  }
});
