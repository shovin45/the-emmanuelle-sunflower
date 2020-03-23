<template lang="pug">
  article.news-article.lower-page
    h2 {{ item.title }}
    p.news-article__publishedAt {{ dateTimeToDate(item.publishedAt) }}
    p.news-article__body(v-html="$md.render(item.body)")
    div.inlineContent(v-html="item.inlineContent" v-if="item.inlineContent")
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
  head() {
    return {
      title: this.item.title,
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

<style lang="scss">
.news-article {
  &__publishedAt {
    margin: 10px 0 0;
  }
  &__body {
    margin: 30px 0;
    img {
      width: initial;
      max-width: 80%;
    }
    a {
      text-decoration: underline;
      transition: 0.3s;
      &:hover,
      &:active {
        color: #999;
        transition: 0.3s;
      }
    }
  }
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