<template lang="pug">
  div.news-list-page.lower-page
    h2 NEWS一覧
    ul.news-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'news/'+item.id")
          h3  {{ item.title }}
          p {{ timeStamp(item.publishedAt) }}
          img(src="http://placehold.jp/640x400.png" alt="")
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

<style lang="scss">
.news-list-page {

  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    li {
      flex-basis: 30%;
      margin: 0 0 5vh 0;

      @include mq() {
        flex-basis: 42vw;
        margin: 0 2vw 5vh 0;
        h3 {
          min-height: 48px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}

</style>