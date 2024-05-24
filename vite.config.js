import Inspect from 'vite-plugin-inspect'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpg: {
   
   quality: 80,
       },
       
       png: {
         
         quality: 100,
       },
   }),
   handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    customersPagepartialDirectory: resolve(__dirname, 'src/partials/customersPage'),
   }),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        customersPage: resolve(__dirname, 'customersPage/index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "../settings/create.js"',
  }
})

