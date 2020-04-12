<template lang="pug">
  article.news-article.lower-page
    h2 {{ item.title.rendered }}
    p.news-article__publishedAt {{ dateTimeToDate(item.date) }}
    p.news-article__body(v-html="$md.render(item.content.rendered)")
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