<template lang="pug">
div
  section.content.news#news
    h2.content__title NEWS
    div(v-swiper:mySwiper="swiperOption")
      div.swiper-wrapper
        div.swiper-slide.news-list(v-for="item in limitCount"): nuxt-link(:to="'news/'+item.id")
          p {{ timeStamp(item.publishedAt) }}
          img(src="http://placehold.jp/640x400.png" alt="")
          h3  {{ item.title }}
        div.swiper-slide.content__showmore: nuxt-link.button(to="news").linear-border: span.linear-border__inner Show More
    div.a-bg
  section.content.live
    h2.content__title Live Schedule
    p 現在スケジュールされているライブはありません。
    div.content__showmore: nuxt-link.button(to="live").linear-border: span.linear-border__inner Show More
    div.a-bg
  section.content.video
    h2.content__title VIDEO
    iframe.content__video(src="https://www.youtube.com/embed/RIU_56FGPZs?controls=0&playsinline=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    div.content__showmore: a.button.linear-border(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): span.linear-border__inner Show More
    div.a-bg


</template>

<script>
import axios from "axios"

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
        }
      },
      items: [],
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/information",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    )
    return {
      items: data.contents
    }
    console.log(this.timeStamp(data.contents.publishedAt))
  },
  methods: {
    timeStamp(times){
      var date = new Date(times)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return year + '年' + month + '月' + day + '日'
    },
  },
  computed: {
    limitCount() {
      return this.items.slice(0,3)
    }
  },
}
</script>

<style lang="scss">
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

  &__title {
    padding: 8vh 0;
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
    background-size: cover;
    background-position: 50% 50%;
    padding :0 0 10vh 0;
  }
.live {
    background: url('~assets/images/bg-section-live.png') no-repeat;
    background-size: cover;
    background-position: 50% 20%;
  }
.video {
    background: url('~assets/images/bg-section-video.png') no-repeat;
    background-size: cover;
    background-position: 50% 20%;
  }


.news-list {
  img {
    width: 100%;
  }
  a {
    display: block;
  }
}
</style>
