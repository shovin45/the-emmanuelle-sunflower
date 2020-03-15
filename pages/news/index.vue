<template lang="pug">
  div
    h2 NEWS一覧
    div(v-for="item in items")
      nuxt-link(:to="'news/'+item.id")
        h3  {{ item.title }}
        img(src="http://placehold.jp/200x200.png" alt="")
</template>

<script>
import axios from "axios"

export default {
  layout:'post',
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
  },
  methods: {
    timeStamp(times){
      var date = new Date(times)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return year + '年' + month + '月' + day + '日'
    }
  }
}
</script>