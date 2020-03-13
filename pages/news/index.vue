<template lang="pug">
  div
    div(v-for="item in items")
      nuxt-link(:to="'news/'+item.id")
        h3  {{ item.title }}
        img(src="http://placehold.jp/200x200.png" alt="")
</template>

<script>
import axios from "axios"

export default {
  components: {
  },
  data() {
    return {
      items: []
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/information",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    );
    return {
      items: data.contents
    };
  }
}
</script>