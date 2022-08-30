import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  publicDir: './',
  mode: 'production',
  base: '/sakthi-website-demo/',
  build: {
    assetsDir: './assets',
    outDir: './docs'
  }
})
