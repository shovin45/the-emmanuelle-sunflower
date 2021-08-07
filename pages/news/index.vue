<template>
  <div class="news-list-page lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <ul class="news-list-page__item">
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="'/news/' + item.id">
          <h3>{{ item.title }}</h3>
          <p class="news-list-page__item__date">
            {{ $dateTimeToDate(item.publishedAt) }}
          </p>
          <img
            class="news-list-page__item__image"
            src="~/assets/images/pic-post-alpha-bg.png"
            alt=""
            :style="{ 'background-image': setDefaultImage(item.image) }"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import defaultIamge from '@/assets/images/pic-post-default.png'

@Component({
  layout: 'post',
})
export default class NewsIndex extends Vue {
  title: string = 'News'

  async asyncData({ $axios }: Context): Promise<object> {
    const { data } = await $axios.get('/information')
    return { items: data.contents }
  }

  head() {
    return {
      title: this.title,
    }
  }

  setDefaultImage(image: { url: string }) {
    return "url('" + (image ? image.url : defaultIamge) + "')"
  }
}
</script>

<style lang="scss">
.news-list-page {
  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    li {
      flex-basis: 30%;
      margin: 0 0 5vh 0;

      img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      @include mq() {
        flex-basis: 42vw;
        margin: 0 2vw 5vh 0;
        h3 {
          min-height: 48px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
    &__date {
      margin: 5px 0 0;
    }
    &__image {
      margin: 5px 0 0;
    }
  }
}
</style>
