<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title {{ title }}
    ul.live-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/live/past/' + item.id")
          p {{ dateTimeToDate(item.playedAt) }}
          h3 {{ item.title }}
          p(v-if="item.location") {{ '@'+item.location }}
          //- p(v-html="$md.render(item.detail)")
          //- p
          //- h3 {{ dateTimeToDate(item.playedAt) }} {{ item.title }}{{ '@'+item.location }}
          //- p(v-html="$md.render(item.detail)")
</template>

<script>
import axios from 'axios'

export default {
  layout:'post',
  data() {
    return {
      title: 'Live',
      items: []
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/live?filters=isArchive[equals]true&limit=100",
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