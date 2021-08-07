<template>
  <div class="live-list-page lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <ul v-if="items == 0" class="live-list-page__item__error">
      <li>現在スケジュールされているライブはありません。</li>
    </ul>
    <ul v-else class="live-list-page__item">
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="'/live/' + item.id">
          <p>{{ $dateTimeToDate(item.playedAt) }}</p>
          <h3>{{ item.title }}</h3>
          <p v-if="item.location">{{ '@' + item.location }}</p>
        </nuxt-link>
      </li>
    </ul>
    <div class="past-live__link">
      <nuxt-link class="button linear-border" to="/live/past"
        ><span class="linear-border__inner"
          >過去ライブ アーカイブへ</span
        ></nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  layout: 'post',
})
export default class LiveIndex extends Vue {
  title: string = 'Live'

  async asyncData({ $axios }: Context): Promise<object> {
    const { data } = await $axios.get('/live?filters=isArchive[not_equals]true')
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
