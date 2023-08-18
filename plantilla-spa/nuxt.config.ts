// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/static/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/static/assets/main.scss'
  ],

  plugins: [
    '~/plugins/navbarPlugin.js',
    '~/plugins/fontawesome.js',

  ],

})