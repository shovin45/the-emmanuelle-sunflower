<template lang="pug">
  header.container
    div.header__bar
      ul.sns-icons__main
        li: button(@click="isNavMenu=!isNavMenu"): img(src="../assets/images/icon-menu.svg" alt="")
    div.header__visual
      div.a-bg
      img.header__logo(src="../assets/images/logo-emma.png" alt="")
      h1.header__title The Emmanuelle Sunflower
      picture.header__picture
        source(media="(min-width: 768px)" srcset="../assets/images/main_pc.png")
        source(media="(min-width: 321px)" srcset="../assets/images/main_sp.png")
        img(src="../assets/images/main_pc.png" alt="" width="100%")
      nuxt-link.scroll-icon(to="#news"): img(src="../assets/images/icon-arrow-down.svg" alt="スクロール")
    transition(name="slide")
      nav(v-if="isNavMenu" @click="isNavMenu=false").drawer
        ul.sns-icons__drawer
          li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
          li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
          li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
          li: a(href="https://news.emma-sun.com/" target="_blank"): img(src="../assets/images/logo-tumblr-white.svg" alt="")
          li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="")
          li: button(@click="isNavMenu=false"): img(src="../assets/images/icon-menu-close.svg" alt="")
        ul.drawer__list
          li: nuxt-link(to="news") News
          li: nuxt-link(to="live") Live
          li: nuxt-link(to="band") Band
          li: nuxt-link(to="music") Music
          li: nuxt-link(to="contact") Contact
</template>

<script>
export default {
  data() {
    return {
      isNavMenu: false,
    }
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;

    .header {
      &__bar {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 5vh 2vw;
        position: absolute;
        z-index: 2;
      }

      &__logo {
        position: absolute;
        margin: 2vh 2vw;
        width: 220px;
      }
      &__visual {
        position: relative;
        z-index: 0;
        overflow: hidden;
      }

      &__title {
        color: #fff;
        font-style: italic;
        font-weight: bold;
        font-size: 12em;
        text-align: left;
        filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.4));
        position: absolute;
        bottom: 4vh;

        @include mq() {
          font-size: 4em;
          bottom: 10vh;
        }
      }

      &__picture{
        width: 100%;
        vertical-align: bottom;
      }
    }

    .scroll-icon {
      position: absolute;
      bottom: 2vh;
      left: 50%;
      z-index: 2;
    }

}



.a-bg {
  animation: fadeColor 50s linear infinite forwards;
  width: 100%;
  min-height: 1200px;
  opacity: 0.2;
  position: absolute;
  top: 0;
  z-index: 1;
}

@keyframes fadeColor {
  0% {
    background: red;
  }
  33% {
    background: yellow;
  }
  66% {
    background: blue;
  }
  100% {
    background: red;
  }
}

.drawer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0,0,0,0.7);
  padding: 5vh 2vw;

  &__list {
    li {
      margin: 10px;
      padding: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.2);

        a {
          width: 100%;
          display: block;
          font-style: italic;
        }
    }
  }

}

.slide-enter-active {
  transition: all 1s ease;
}
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>