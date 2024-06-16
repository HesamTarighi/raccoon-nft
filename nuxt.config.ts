// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ['./assets/scss/tailwindcss.scss', './assets/scss/fonts.scss'],

  imports: {
    autoImport: true
  },

  modules: ['nuxt-icon']
})