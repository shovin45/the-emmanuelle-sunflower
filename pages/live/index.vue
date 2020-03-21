<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title Live一覧
    ul.live-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/live/' + item.id")
          p {{ dateTimeToDate(item.playedAt) }}
          h3 {{ item.title }}
          p(v-if="item.location") {{ '@'+item.location }}
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
}
</script>

<style lang="scss">
.live-list-page {

  &__item {
    li {
      padding: 20px 0 20px 0;
      border-bottom: 1px #333 solid;
    }
  }
}
</style>