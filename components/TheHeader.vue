<template lang="pug">
  header.container
    div.header__bar
      ul.drawer__icon
        li: button(@click="isNavMenu=!isNavMenu"): img(src="../assets/images/icon-menu.svg" alt="")
    div.header__visual
      img.header__logo(src="../assets/images/logo-emma.png" alt="")
      h1.header__title The Emmanuelle Sunflower
      picture.header__picture
        source(media="(max-width: 767px)" srcset="../assets/images/main_sp.png")
        img(src="../assets/images/main_pc.png" alt="" width="100%")
    nuxt-link.scroll-icon(v-scroll-to="'#news'" to): img(src="../assets/images/icon-arrow-down.svg" alt="スクロール")
    div.a-bg
    transition(name="slide")
      nav(v-if="isNavMenu" @click="isNavMenu=false").drawer
        ul.drawer__icon
          li: button(@click="isNavMenu=false"): img(src="../assets/images/icon-menu-close.svg" alt="")
        p Follow us
        ul.sns-icons__drawer
          li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
          li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
          li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
          //- li: a(href="https://news.emma-sun.com/" target="_blank"): img(src="../assets/images/logo-tumblr-white.svg" alt="")
          li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="")
        ul.drawer__list
          li: nuxt-link(to="/news") News
          li: nuxt-link(to="/live") Live
          li: nuxt-link(to="/band") Band
          li: nuxt-link(to="/music") Music
          li: nuxt-link(to="/contact") Contact
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
  overflow: hidden;

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
        @include mq() {
          width: 160px;
        }
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
        font-size: 12vw;
        text-align: left;
        filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.4));
        position: absolute;
        bottom: 8vh;

        @include mq() {
          font-size: 16vw;
          bottom: 14vh;
        }
      }

      &__picture{
        width: 100%;
        vertical-align: bottom;
        height: 100vh;
      }
    }

    .scroll-icon {
      position: relative;
      bottom: 10vh;
      z-index: 1;
    }

}


div.header__visual {
  position: relative;
}

.drawer {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0,0,0,0.8);
  padding: 5vh 2vw;
  overflow-y: scroll;

  &__list {
    li {
      margin: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      

        a {
          padding: 4vh 5vw;
          width: 100%;
          display: block;
          font-style: italic;
          letter-spacing: 1.5px;
        }
    }
  }
  &__icon {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    li {
      padding: 10px 20px;
        img {
          width: 30px;
          filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.3));
        }
        button {
          padding: 5px;
        }
    }

  }

}

.slide-enter-active {
  transition: all 0.8s ease;
}
.slide-leave-active {
  transition: all 0.8s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>