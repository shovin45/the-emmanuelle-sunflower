<template>
  <article class="live-article lower-page">
    <h2>{{ item.title }}</h2>
    <h3 class="live-article__playedAt">{{ $dateTimeToDate(item.playedAt) }}</h3>
    <h3 v-if="item.location">{{ '@' + item.location }}</h3>
    <p v-if="item.detail" class="live-article__body" v-html="item.detail"></p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  layout: 'post',
})
export default class LiveId extends Vue {
  async asyncData({ params, $axios }: Context): Promise<object> {
    const { data } = await $axios.get(
      `/live/${params.id}?filters=isArchive[equals]true`
    )
    return { item: data }
  }

  head({ item }: any) {
    return {
      title: item.title,
    }
  }
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
