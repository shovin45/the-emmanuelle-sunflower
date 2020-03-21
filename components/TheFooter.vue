<template lang="pug">
  footer.footer
    p.backtotop: nuxt-link(v-scroll-to="'#__nuxt'" to) Back to Top #[img(src="../assets/images/icon-arrow-top.svg" alt="")]
    div.display-flex__between.footer__navi
      ul.navi-list
        li: nuxt-link(to="/news") News
        li: nuxt-link(to="/live") Live
        li: nuxt-link(to="/band") Band
        li: nuxt-link(to="/music") Music
        li: nuxt-link(to="/contact") Contact
      nuxt-link.tohome__footer(to="/"): img.footer__logo(src="../assets/images/logo-emma.png" alt="")
    ul.sns-icons__footer
      li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="公式Twitterへ 新しいウィンドウで開きます。")
      li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="公式Instagramへ 新しいウィンドウで開きます。")
      li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="公式facebookへ 新しいウィンドウで開きます。")
      li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="公式YouTubeへ 新しいウィンドウで開きます。")
    small Copyright (C) 2015 The Emmanuelle Sunflower.
</template>

<style lang="scss">
.footer {
  max-width: $maxWidth;
  margin: auto;
  background: $themeColor;
  padding: 4vh 8vw 4vh;

  @include mq() {
    padding: 4vh 8vw;
  }

  &__navi {
    max-width: 1150px;
    margin: auto;
    padding: 0 0 10px 0;

    @include mq() {
      flex-wrap: wrap;
      text-align: center;
    }
  }

  &__logo {
    width: 210px;
    @include mq() {
    width: 140px;
    }
  }

  small {
    text-align: right;
    display: block;
    color: $primaryFontColor;
    margin: 2vh 0 0 0;

    @include mq() {
      text-align: center;
      margin: 4vh 0 2vh 0;
    }
  }
}

.navi-list {
  text-align: left;

  @include mq() {
    width: 100%;
    margin: 0 0 7vh 0;
  }

  li {
    margin: 30px 0 0 0;
    letter-spacing: 2px;
    font-size: 0.9rem;
    font-weight: 500;

    a {
      &:hover,
      &:active {
        color: #fff;
        transition: 0.3s;
      }
    }
  }

}

.tohome__footer {
  @include mq() {
    margin: auto;
  }
}
.backtotop {
  margin: 2vh auto 4vh;
  text-align: center;

  @include mq() {
    margin: 2vh auto;
  }

  a {
    display: inline-block;
    img {
      display: inline-block;
      width: initial;
      vertical-align: middle;
    }
    &:hover,
    &:active {
      color: #fff;
      transition: 0.3s;
    }

  }
}

.display-flex {
  display: flex;
  &__between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>