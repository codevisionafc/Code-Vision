// filepath: /d:/Web development/React Projects/Code-Vision-Website/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import packageInfo from './package.json';

const homepage = packageInfo.homepage || '/';
console.log(homepage);
const base = new URL(homepage).pathname;
console.log(base);
// const base = '/';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  base: base,
});
