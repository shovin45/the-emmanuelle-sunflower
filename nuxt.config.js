debugger
require('dotenv').config()
const { MICROCMS_API_KEY } = process.env;
const axios = require("axios"); 

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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    'plugins/contentful'
  ],
  build: {
    vendor: [
      'vue-awesome-swiper'
    ]
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
    '@nuxtjs/dotenv'
  ],
  styleResources: {
    scss:[
      '~/assets/scss/style.scss',
      '~/assets/scss/sns-icons.scss',
    ],
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
  // server: {
  //   port: 8000, // デフォルト: 3000
  //   host: '0.0.0.0' // デフォルト: localhost
  // },
  // generate: {
  //   async routes() {
  //    // contentfulからデータを取得してjsonにexportする
  //     await outputStaticData()

  //    // 取得したjsonからページを動的生成する
  //     return Articls.items.map(i => {
  //       return `articles/${i.fields.id}`
  //     })
  //   }
  // },
//   generate: {
//   routes() {
//    const posts = axios
//     .get("https://your.microcms.io/api/v1/information", {
//      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
//     })
//     .then(res => {
//      return res.data.contents.map(post => {
//       return "articles/" + post.id;
//      });
//     });
//    return Promise.all([posts]).then(values => {
//     return values.join().split(",");
//    });
//   }
//  },
// exportPathMap: async function() {
//     const paths = {
//       '/': {page: '/'},
//     };
//     const key = {
//       headers: {'X-API-KEY': process.env.MICROCMS_API_KEY},
//     };
//     const res = await axios.get(
//       `https://tes.microcms.io/api/v1/information`,
//       key,
//     );
//     const data = await res.data.contents;

//     data.forEach(blog => {
//       paths[`/articles/${blog.id}`] = {page: '/articles/[id]', query: {id: blog.id}};
//     });

//     return paths;
//   },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY
  }
}

