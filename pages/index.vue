<template lang="pug">
div
  the-header
  section.content.news#news
    h2.content__title NEWS
    swiper(:options="swiperOption")
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
      swiper-slide.news-list: nuxt-link(to="")
        p 2017.12.13
        img(src="http://placehold.jp/640x400.png" alt="")
        h3 夜祭り挽歌　iTunes配信！
    div.content__showmore: nuxt-link(to="news") Show More
  section.content.live
    h2.content__title Live Schedule
    div.content__showmore: nuxt-link(to="live") Show More
  section.content
    h2.content__title VIDEO
    iframe.content__video(src="https://www.youtube.com/embed/RIU_56FGPZs?controls=0&playsinline=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    div.content__showmore: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank") Show More
  section.content
    h2.content__title Photo
    div.content__showmore: nuxt-link(to="") Show More

  footer
    ul.sns-icons__footer
      li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
      li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
      li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
      li: a(href="https://news.emma-sun.com/" target="_blank"): img(src="../assets/images/logo-tumblr-white.svg" alt="")
      li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="")
    small Copyright (C) 2015 The Emmanuelle Sunflower.
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'


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
      }
    }
  },
  methods: {
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
  }
  &__showmore {
    text-align: center;
    margin: 4vh 0 ;

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
  }
.live {
    background: url('~assets/images/bg-section-live.png') no-repeat;
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
  padding: 8vh 3vw 4vh;
  text-align: center;
  
  small {
    display: block;
    color: #fff;
    margin: 2vh 0 0 0;
  }
}

</style>
