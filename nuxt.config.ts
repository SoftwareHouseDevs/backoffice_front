// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2025-04-07',
})