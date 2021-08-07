import { NuxtConfig } from '@nuxt/types'
import axiosBase from 'axios'
require('dotenv').config()

const url: string = 'https://the-emmanuelle-sunflower.com'
const title: string = 'The Emmanuelle Sunflower オフィシャルWebサイト'
const description: string =
  'ドカドカうるさいインディアンジプシーアイリッシュスカレゲエお祭りパンクトラディショナルファンキーロックンロールバンドのオフィシャルWebサイト'
const Keywords: string =
  'エマニエルサンフラワー,エマニュエルサンフラワー,エマサン,The Emmanuelle Sunflower,アイリッシュ,ブルース,海賊'

const nuxtConfig: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ' + title,
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'Keywords', content: Keywords },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'blog' },
      { property: 'og:image', content: url + '/ogp.png' },
      { property: 'og:url', content: url },
      { property: 'og:description', content: description },
      { property: 'og:site_name', content: title },
      { property: 'fb:app_id', content: '354574861220673' },
      { property: 'og:locale', content: 'ja_JP' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@E_Sunflower' },
      { name: 'twitter:creator', content: '@E_Sunflower' },
      { name: 'twitter:domain', content: 'emma-sun.com' },
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One|Noto+Sans+JP:400,500,700,900&display=swap&subset=japanese',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/common', ssr: true },
    '~/plugins/vue-scrollto',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://tes.microcms.io/api/v1',
    headers: {
      common: { 'X-API-KEY': process.env.MICROCMS_API_KEY as string },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost
  },
  generate: {
    routes() {
      const axios = axiosBase.create({
        baseURL: 'https://tes.microcms.io/api/v1',
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
      })

      const posts = axios.get('/information').then(({ data }: any): string => {
        return data.contents.map(({ id }: any) => {
          return '/news/' + id
        })
      })
      const lives = axios.get('/live').then(({ data }: any): string => {
        return data.contents.map(({ id }: any) => {
          return '/live/' + id
        })
      })
      const pasts = axios.get('/live').then(({ data }: any): string => {
        return data.contents.map(({ id }: any) => {
          return '/live/past/' + id
        })
      })
      return Promise.all([posts, lives, pasts]).then((values: any): string => {
        return values.join().split(',')
      })
    },
  },

  env: {
    MICROCMS_API_KEY: String(process.env.MICROCMS_API_KEY),
  },

  styleResources: {
    scss: [
      '~/assets/scss/style.scss',
      '~/assets/scss/sns-icons.scss',
      '~/assets/scss/button.scss',
      '~/assets/scss/drawer.scss',
      '~/assets/scss/loading-icon.scss',
    ],
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
  },
}

export default nuxtConfig
