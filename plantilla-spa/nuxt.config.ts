// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/static/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/static/assets/main.scss',
    '@/node_modules/swiper/swiper-bundle.min.css'
  ],

  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Poppins: true,
          Inter: [400, 700],
           'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }],
  ],


  plugins: [
    '~/plugins/navbarPlugin.js',
    '~/plugins/fontawesome.js',
  ],

})