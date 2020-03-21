<template lang="pug">
  article.lower-page
    h2 {{ item.title }}
    p {{ timeStamp(item.playedAt) }}
    p {{ item.location }}
    p(v-html="$md.render(item.detail)")
</template>

<script>
import axios from "axios";

export default {
  layout:'post',
  data() {
    return {
      items: []
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://tes.microcms.io/api/v1/live-schedule/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    );
    return {
      item: data
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
  },
}
</script>