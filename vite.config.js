// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/News_Web/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Default Vercel output directory
  },
});
