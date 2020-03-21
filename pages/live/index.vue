<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title LIVE
    ul.live-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/live/' + item.id")
          h3 {{ item.title }}
          p {{ timeStamp(item.playedAt) }}
          p {{ '@'+item.location }}
</template>

<script>
import axios from 'axios'

export default {
  layout:'post',
  data() {
    return {
      items: []
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/live-schedule",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    )
    return {
      items: data.contents
    }
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
.live-list-page {

  &__item {
    li {
      padding: 20px 0 10px 0;
    }
  }
}
</style>