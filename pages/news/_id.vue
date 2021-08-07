<template>
  <article class="news-article lower-page">
    <h2>{{ item.title }}</h2>
    <p class="news-article__publishedAt">
      {{ $dateTimeToDate(item.publishedAt) }}
    </p>
    <p v-if="item.body" class="news-article__body" v-html="item.body"></p>
    <div
      v-if="item.inlineContent"
      class="inlineContent"
      v-html="item.inlineContent"
    ></div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  layout: 'post',
})
export default class NewsId extends Vue {
  async asyncData({ params, $axios }: Context): Promise<object> {
    const { data } = await $axios.get(`/information/${params.id}`)
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
.news-article {
  &__publishedAt {
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
.inlineContent {
  margin: 30px auto 0;
  text-align: center;
  iframe[src*='youtube.com'] {
    display: inline-block;
    @include mq() {
      width: 80%;
    }
  }
}
</style>
