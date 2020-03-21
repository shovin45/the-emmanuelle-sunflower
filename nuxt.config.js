require('dotenv').config()
import axios from 'axios'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {name: 'robots', content: ['noindex','nofollow']}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: '~/components/LoadingOverlay.vue',
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/vue-awesome-swiper', ssr:false},
    '~/plugins/vue-scrollto',
  ],
  build: {
    vendor: ['vue-awesome-swiper']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],
  styleResources: {
    scss:[
      '~/assets/scss/style.scss',
      '~/assets/scss/sns-icons.scss',
      '~/assets/scss/button.scss',
      '~/assets/scss/drawer.scss',
      '~/assets/scss/loading-icon.scss',
    ],
  },
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
  generate: {
  routes() {
    const posts = axios
    .get("https://tes.microcms.io/api/v1/information", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
    })
    .then(res => {
      console.log(res)
      return res.data.contents.map(post => {
        return "/news/" + post.id
      })
    })
    const lives = axios
    .get("https://tes.microcms.io/api/v1/live-schedule", {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
    })
    .then(res2 => {
      return res2.data.contents.map(live => {
        return "/live/" + live.id
      })
    })
      return axios.all([posts,lives]).then(values => {
        return values.join().split(",");
      })
  }
  },
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY
  },
}
debugger
