<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title {{ title }}
    ul.live-list-page__item__error(v-if="items=[]"): li 現在スケジュールされているライブはありません。
    ul(v-else).live-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/live/' + item.id")
          p {{ item.acf.event_year + '.' + item.acf.event_month + '.' + item.acf.event_day + ' ' + item.acf.event_week }}
          h3 {{ item.title.rendered }}
          p(v-if="item.acf.event_place") {{ '@'+item.acf.event_place }}
    div.past-live__link
      nuxt-link.button.linear-border(to="/live/past") 過去ライブ アーカイブへ
</template>

<script>
import axios from 'axios'

export default {
  layout:'post',
  data() {
    return {
      title: 'Live',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://emma-sun.com/wp-json/wp/v2/posts?categories=3",
    )
    return {
      items: data
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