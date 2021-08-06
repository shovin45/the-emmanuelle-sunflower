<template>
  <div class="live-list-page lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <ul class="live-list-page__item">
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="'/live/past/' + item.id">
          <p>{{ dateTimeToDate(item.playedAt) }}</p>
          <h3>{{ item.title }}</h3>
          <p v-if="item.location">{{ '@' + item.location }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'post',
  data() {
    return {
      title: 'Live',
      items: [],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      'https://tes.microcms.io/api/v1/live?filters=isArchive[equals]true&limit=100',
      {
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
      }
    )
    return {
      items: data.contents,
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
