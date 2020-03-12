<template lang="pug">
  div
    h2 {{ item.title }}
    p {{ item.publishedAt }}
    p(v-html="item.text")
</template>


<script>
import axios from "axios";

export default {
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