<template lang="pug">
div
  transition(name="fade")
    div.loading-overlay(v-if="!isLoaded")
      div.loading-content
        div.breeding-rhombus-spinner
          div.rhombus.child-1
          div.rhombus.child-2
          div.rhombus.child-3
          div.rhombus.child-4
          div.rhombus.child-5
          div.rhombus.child-6
          div.rhombus.child-7
          div.rhombus.child-8
          div.rhombus.big
        p loading
          span.dot.child-1 .
          span.dot.child-2 .
          span.dot.child-3 .
  the-header
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

  footer
    ul.sns-icons__footer
      li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
      li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
      li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
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
      isLoaded: false,
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
  computed: {
    limitCount() {
      return this.items.slice(0,3)
    }
  },
  mounted () {
      return this.isLoaded = true
  }
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

.loading-content {
  p {
    margin: 5vh 0 0 0;
    animation: fade-loop 2s infinite linear;
    animation-delay: 0.5s;

    span.dot {
      &.child-1,&.child-2,&.child-3 {
        animation: word-visivle 2s infinite step-start forwards;
        opacity: 0;
      }
      &.child-1 {
        animation-delay: calc(0.3s * 1);
      }
      &.child-2 {
        animation-delay: calc(0.3s * 2);
      }
      &.child-3 {
        animation-delay: calc(0.3s * 3);
      }
    }
  }
}
@keyframes fade-loop {
  50% {
    opacity: 0.2;
  }
}
@keyframes word-visivle {
  50% {
    opacity: 1;
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

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
