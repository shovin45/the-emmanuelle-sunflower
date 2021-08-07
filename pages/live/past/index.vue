<template>
  <div class="live-list-page lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <ul class="live-list-page__item">
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="'/live/past/' + item.id">
          <p>{{ $dateTimeToDate(item.playedAt) }}</p>
          <h3>{{ item.title }}</h3>
          <p v-if="item.location">{{ '@' + item.location }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  layout: 'post',
})
export default class PastLiveIndex extends Vue {
  title: string = 'Live'

  async asyncData({ $axios }: Context): Promise<object> {
    const { data } = await $axios.get(
      '/live?filters=isArchive[equals]true&limit=100'
    )
    return { items: data.contents }
  }

  head() {
    return {
      title: this.title,
    }
  }
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
