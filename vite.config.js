import Inspect from 'vite-plugin-inspect'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteImagemin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp'

export default defineConfig({
  base: './',
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: imageminWebp({
        quality: 75,
      }),
    }),
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
    checkoutPagepartialDirectory: resolve(__dirname, 'src/partials/checkout'),
    errorPagePagepartialDirectory: resolve(__dirname, 'src/partials/errorPage'),
    basketPagePagepartialDirectory: resolve(__dirname, 'src/partials/basketPage'),
    orderPagePagepartialDirectory: resolve(__dirname, 'src/partials/orderPage'),
    deliveryPagePagepartialDirectory: resolve(__dirname, 'src/partials/deliveryPage'),
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
        cardProductPage: resolve(__dirname, 'cardProductPage/index.html'), 
        registrationPage: resolve(__dirname, 'registration/registration.html'),
        galleryPage: resolve(__dirname, 'galleryPage/index.html'),
        paymentPage: resolve(__dirname, 'paymentPage/index.html'),
        newsPage: resolve(__dirname, 'newsPage/index.html'),
        newPage: resolve(__dirname, 'newPage/index.html'),
        account: resolve(__dirname, 'account/account.html'),
        accountSimple: resolve(__dirname, 'account/account-simple.html'),
        login: resolve(__dirname, 'loginPage/index.html'),
        password: resolve(__dirname, 'password/password.html'),
        resetPassword: resolve(__dirname, 'reset-password/reset-password.html'),
        checkout: resolve(__dirname, 'checkout/index.html'),
        error: resolve(__dirname, 'errorPage/index.html'),
        basket: resolve(__dirname, 'basketPage/index.html'),
        order: resolve(__dirname, 'orderPage/index.html'),
        delivery:resolve(__dirname, 'deliveryPage/index.html')
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

