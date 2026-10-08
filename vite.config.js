import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    open: true, // Optional: automatically opens the app in the browser
    port: 3000, // Optional: sets the development server port
  },
  build: {
    outDir: 'build', // Optional: change the output directory from default 'dist' to 'build'
  },
});