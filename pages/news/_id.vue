<template lang="pug">
  article.news-article
    h2 {{ item.title }}
    p {{ timeStamp(item.publishedAt) }}
    p(v-html="$md.render(item.body)")
    div.inlineContent(v-html="item.inlineContent")(v-if="item.inlineContent")
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
      `https://tes.microcms.io/api/v1/information/${params.id}`,
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

<style lang="scss">
.news-article {
  max-width: $maxWidth;
  margin: auto;
  padding: $spPadding;

}
.inlineContent {
  margin: 30px auto 0;
  text-align: center;
  iframe[src*="youtube.com"] {
    display: inline-block;
    @include mq() {
      width: 80%;
    }
  }
}


</style>