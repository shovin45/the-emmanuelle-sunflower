<template>
  <div>
    <section id="news" class="content news">
      <h2 class="content__title">News</h2>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in limitCounts"
            :key="index"
            class="swiper-slide news-list"
          >
            <nuxt-link :to="'news/' + item.id">
              <p>{{ $dateTimeToDate(item.publishedAt) }}</p>
              <img
                src="~/assets/images/pic-post-alpha-bg.png"
                alt=""
                :style="{ 'background-image': setDefaultImage(item.image) }"
              />
              <h3>{{ item.title }}</h3>
            </nuxt-link>
          </div>
          <div class="swiper-slide content__showmore">
            <nuxt-link class="button linear-border" to="news">
              <span class="linear-border__inner">Show More</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="a-bg"></div>
    </section>
    <section class="content live">
      <h2 class="content__title">Live Schedule</h2>
      <div class="content__showmore">
        <nuxt-link class="button linear-border" to="live">
          <span class="linear-border__inner">Show More</span>
        </nuxt-link>
      </div>
      <div class="a-bg"></div>
    </section>
    <section class="content video">
      <h2 class="content__title">Video</h2>
      <iframe
        class="content__video"
        src="https://www.youtube.com/embed/RIU_56FGPZs?controls=0&amp;playsinline=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <div class="content__showmore">
        <a
          class="button linear-border"
          href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg"
          target="_blank"
        >
          <span class="linear-border__inner">Show More</span>
        </a>
      </div>
      <div class="a-bg"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import defaultIamge from '~/assets/images/pic-post-default.png'

@Component
export default class Index extends Vue {
  swiperOption: any = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  async asyncData({ $axios }: Context): Promise<object> {
    const { data } = await $axios.get('/information')
    return { items: data.contents }
  }

  get limitCounts() {
    const self: any = this
    return self.items.slice(0, 3)
  }

  head() {
    return {
      title: 'トップ',
    }
  }

  setDefaultImage(image: { url: string }) {
    return "url('" + (image ? image.url : defaultIamge) + "')"
  }
}
</script>

<style lang="scss">
.swiper-wrapper {
  align-items: center;
}
.swiper-slide {
  width: 30%;
}

@include mq() {
  .swiper-slide {
    width: 60%;
  }
}

.content {
  overflow: hidden;
  padding: 10vh 0 10vh 0;

  @include mq() {
    padding: 5vh 0 5vh 0;
  }

  &__title {
    padding: 4vh 0 6vh;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  &__showmore {
    text-align: center;
    margin: 4vh 0;
    position: relative;
    z-index: 1;
  }
  &__video {
    margin: 0 auto;
    display: block;
    width: 50vw;
    height: 50vh;
    position: relative;
    z-index: 1;
    @include mq() {
      width: 90vw;
      height: 30vh;
    }
  }
}
.news {
  background: url('~assets/images/bg-section-news.png') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.live {
  background: url('~assets/images/bg-section-live.png') no-repeat;
  background-position: 50% 20%;
  background-size: cover;
  @include mq() {
    background-position: 50% 20px;
  }
}
.video {
  background: url('~assets/images/bg-section-video.png') no-repeat;
  background-position: 50% 20%;
  background-size: cover;
  @include mq() {
    background-position: 70% 50%;
  }
}

.news-list {
  img {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  h3 {
    min-height: 48px;
  }
  a {
    display: block;
  }
}
</style>
