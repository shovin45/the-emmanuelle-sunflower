<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title {{ title }}
    ul.live-list-page__item__error(v-if="items==0"): li 現在スケジュールされているライブはありません。
    ul.live-list-page__item(v-else)
      li(v-for="item in items")
        nuxt-link(:to="'/live/' + item.id")
          p {{ dateTimeToDate(item.playedAt) }}
          h3 {{ item.title }}
          p(v-if="item.location") {{ '@'+item.location }}
    div.past-live__link
      nuxt-link.button.linear-border(to="/live/past"): span.linear-border__inner 過去ライブ アーカイブへ
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
      "https://tes.microcms.io/api/v1/live?filters=isArchive[not_equals]true",
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
    &__error {
      font-size: $fontSize;
    }
  }
}
.past-live {
  &__link {
    text-align: right;
    margin: 10vh 0 0 0;
  }
}
</style>