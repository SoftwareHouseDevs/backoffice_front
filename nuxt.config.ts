// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],

  compatibilityDate: '2025-04-07',
})