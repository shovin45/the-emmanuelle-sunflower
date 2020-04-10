<template lang="pug">
  article.live-article.lower-page
    h2 {{ item.title.rendered }}
    h3.live-article__playedAt {{ item.acf.event_year + '.' + item.acf.event_month + '.' + item.acf.event_day + ' ' + item.acf.event_week }}
    h3(v-if="item.acf.event_place") {{ '@' + item.acf.event_place }}
    p.live-article__body(v-html="item.content.rendered")
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
      title: this.item.title.rendered,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `http://emma-sun.com/wp-json/wp/v2/posts/${params.id}`,
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