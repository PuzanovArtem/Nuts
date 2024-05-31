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
    mainPagepartialDirectory: resolve(__dirname, 'src/partials/mainPage'),
    aboutPagepartialDirectory: resolve(__dirname, 'src/partials/aboutPage'),
    customersPagepartialDirectory: resolve(__dirname, 'src/partials/customersPage'),
    catalogPagepartialDirectory: resolve(__dirname, 'src/partials/catalogePage'),
    galleryPagepartialDirectory: resolve(__dirname, 'src/partials/galleryPage'),
    newPagepartialDirectory: resolve(__dirname, 'src/partials/newPage'),
    newsPagepartialDirectory: resolve(__dirname, 'src/partials/newsPage'),
    paymentPagepartialDirectory: resolve(__dirname, 'src/partials/paymentPage'),
    productPagepartialDirectory: resolve(__dirname, 'src/partials/productPage'),
   }),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        customersPage: resolve(__dirname, 'customersPage/index.html'),
        aboutPage: resolve(__dirname, 'aboutPage/index.html'),
        catalogPage: resolve(__dirname, 'catalogPage/index.html'),
        cardProductPage: resolve(__dirname, 'cardProductPage/index.html')
        
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

