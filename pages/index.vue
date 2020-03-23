<template lang="pug">
div
  section.content.news#news
    h2.content__title News
    div(v-swiper:mySwiper="swiperOption")
      div.swiper-wrapper
        div.swiper-slide.news-list(v-for="item in limitCount"): nuxt-link(:to="'news/' + item.id")
          p {{ dateTimeToDate(item.publishedAt) }}
          img(
            src="~/assets/images/pic-post-alpha-bg.png"
            alt=""
            :style="{ 'background-image': setDefaultImage(item.image) }")
          h3  {{ item.title }}
        div.swiper-slide.content__showmore: nuxt-link.button(to="news").linear-border: span.linear-border__inner Show More
    div.a-bg
  section.content.live
    h2.content__title Live Schedule
    //- p 現在スケジュールされているライブはありません。
    div.content__showmore: nuxt-link.button(to="live").linear-border: span.linear-border__inner Show More
    div.a-bg
  section.content.video
    h2.content__title Video
    iframe.content__video(src="https://www.youtube.com/embed/RIU_56FGPZs?controls=0&playsinline=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    div.content__showmore: a.button.linear-border(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): span.linear-border__inner Show More
    div.a-bg


</template>

<script>
import axios from "axios"
import defaultIamge from "~/assets/images/pic-post-default.png"

// debugger
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // freeMode: true
      },
      items: [],
      liveItems: [],
    }
  },
  head() {
    return {
      title: 'トップ',
    }
  },
  async asyncData({ params }) {
      var { data } = await axios
      .get(
        "https://tes.microcms.io/api/v1/information",
        {
          headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
        }
      )
      return { items: data.contents }

  },
  methods: {
    setDefaultImage(image) {
      var defaultImageUrl = defaultIamge
      if(image) { return 'url(\'' + image.url + '\')' }
      else { return 'url(\'' + defaultImageUrl + '\')' }
    }
  },
  computed: {
    limitCount() {
      return this.items.slice(0,3)
    }
  },
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
    margin: 4vh 0 ;
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
    @include mq(){
      background-position: 50% 20px;
    }
  }
.video {
    background: url('~assets/images/bg-section-video.png') no-repeat;
    background-position: 50% 20%;
    background-size: cover;
    @include mq(){
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
