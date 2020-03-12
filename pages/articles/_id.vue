<template lang="pug">
  div
    h2 {{ item.title }}
    p {{ item.publishedAt }}
    p(v-html="item.text")
</template>


<script>
const Articls = require('~/static/json/article.json')
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import axios from "axios";

export default {
  // computed: {
  //   article(){
  //     const id = this.$router.params.id;
  //     return Articls.items.find(i => i.fields.id == id);
  //   }
  // },
  // methods: {
  //   toHtmlString(obj) {
  //     const options = {
  //       renderNode: {
  //         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
  //             `<img src="${fields.file.url}"/>`,
  //       },
  //     }
  //     return documentToHtmlString(obj, options);
  //   }
  // }
  data() {
    return {
      items: []
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://tes.microcms.io/api/v1/information/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    );
    return {
      item: data
    };
  }
}
</script>