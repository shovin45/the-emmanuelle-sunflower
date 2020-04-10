require('dotenv').config()
import axios from 'axios'

const url = 'https://the-emmanuelle-sunflower.com'
const title = 'The Emmanuelle Sunflower オフィシャルWebサイト'
const description = 'ドカドカうるさいインディアンジプシーアイリッシュスカレゲエお祭りパンクトラディショナルファンキーロックンロールバンドのオフィシャルWebサイト'
const Keywords = 'エマニエルサンフラワー,エマニュエルサンフラワー,エマサン,The Emmanuelle Sunflower,アイリッシュ,ブルース,海賊'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ' + title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      {name: 'Keywords', content: Keywords },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'blog' },
      { property: 'og:image', content: url + '/ogp.png' },
      { property: 'og:url', content: url },
      { property: 'og:description', content: description },
      { property: 'og:site_name', content: title },
      { property: 'fb:app_id', content: '354574861220673' },
      { property: 'og:locale', content: 'ja_JP'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@E_Sunflower'},
      { name: 'twitter:creator', content: '@E_Sunflower'},
      { name: 'twitter:domain', content: 'emma-sun.com'},
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One|Noto+Sans+JP:400,500,700,900&display=swap&subset=japanese' },
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
    { src: '~/plugins/vue-infinite-loading', ssr: false},
    {src: '~/plugins/common', ssr: true},
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
    .get("http://emma-sun.com/wp-json/wp/v2/posts?categories=2", )
    .then(res => {
      return res.data.map(post => {
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
