<template lang="pug">
div
  header.container.lower
    div.header__visual
        nuxt-link.tohome(to="/"): img.header__logo(src="../assets/images/logo-emma.png" alt="")
    div.header__bar
      ul.drawer__icon
        li: button(@click="isNavMenu=!isNavMenu"): img(src="../assets/images/icon-menu.svg" alt="")

    transition(name="slide")
      nav(v-if="isNavMenu" @click="isNavMenu=false").drawer
        ul.drawer__icon
          li: button(@click="isNavMenu=false"): img(src="../assets/images/icon-menu-close.svg" alt="")
        p Follow us
        ul.sns-icons__drawer
          li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="")
          li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="")
          li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="")
          li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="")
        ul.drawer__list
          li: nuxt-link(to="/news") News
          li: nuxt-link(to="/live") Live
          li: nuxt-link(to="/band") Band
          li: nuxt-link(to="/music") Music
          li: nuxt-link(to="/contact") Contact
  nuxt
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
.tohome {
  display: inline-block;
}
.container.lower {
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;

  .header {
    &__bar {
        position: fixed;
        padding: 5vh 2vw;
        top: 0;
        right: 0;
        z-index: 0;
        display: inline-block;
      }

      &__logo {
        position: relative;
        top: 0;
        left: 0;
        margin: 2vh 2vw;
        width: 220px;
        z-index: 1;
        display: inline-block;
        @include mq() {
          width: 160px;
        }
      }
      &__visual {
        text-align: left;
      }
  }
}


</style>