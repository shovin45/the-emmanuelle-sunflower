<template lang="pug">
div
  the-header
  section.content.news#news
    h2.content__title NEWS
    div(v-swiper:mySwiper="swiperOption")
      div.swiper-wrapper
        div.swiper-slide.news-list(v-for="item in items"): nuxt-link(:to="'news/'+item.id")
          p {{ timeStamp(item.publishedAt) }}
          img(src="http://placehold.jp/640x400.png" alt="")
          h3  {{ item.title }}
        div.swiper-slide.content__showmore: nuxt-link(to="news") Show More
    div.a-bg
  section.content.live
    h2.content__title Live Schedule
    p 現在スケジュールされているライブはありません。
    div.content__showmore: nuxt-link(to="live") Show More
    div.a-bg
  section.content.video
    h2.content__title VIDEO
    iframe.content__video(src="https://www.youtube.com/embed/RIU_56FGPZs?controls=0&playsinline=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    div.content__showmore: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank") Show More
    div.a-bg

  footer
    ul.sns-icons__footer
      li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
      li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
      li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
      //- li: a(href="https://news.emma-sun.com/" target="_blank"): img(src="../assets/images/logo-tumblr-white.svg" alt="")
      li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="")
    small Copyright (C) 2015 The Emmanuelle Sunflower.
    div.a-bg
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import axios from "axios"

// debugger
export default {
  components: {
    TheHeader,
  },
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
    }
  },
}
</script>

<style lang="scss">
.roading {
  visibility: hidden;
  &.finished {
    visibility: visible;
  }
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

      a {
        text-align: center;
        padding: 1vh 2vw;
        display: inline-block;
        background: #ccc;
        border-radius: 2px;
        color: #000;
      }
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

footer {
  background: #000;
  padding: 8vh 0vw 4vh;
  text-align: center;
  
  small {
    display: block;
    color: #fff;
    margin: 2vh 0 0 0;
  }
}

</style>
