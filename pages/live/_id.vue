<template lang="pug">
  article.live-article.lower-page
    h2 {{ item.title }}
    h3.live-article__playedAt {{ dateTimeToDate(item.playedAt) }}
    h3(v-if="item.location") {{ '@' + item.location }}
    p.live-article__body(v-html="$md.render(item.detail)")
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
      `https://tes.microcms.io/api/v1/live-schedule/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    );
    return {
      item: data
    };
  },
}
</script>

<style lang="scss">
.live-article {
  &__playedAt {
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
</style>