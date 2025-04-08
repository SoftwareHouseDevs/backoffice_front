// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
<<<<<<< HEAD
  compatibilityDate: '2025-04-07',

  css: [
    '~/assets/css/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
=======

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],



  css: ['~/assets/css/main.css'],


  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
>>>>>>> 3b660da56cc688813fe05bd3fb2a84b10cffbbc4
})