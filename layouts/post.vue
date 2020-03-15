<template lang="pug">
div
  header.container
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

<style lang="scss" scoped>
.container {
  height: 150px;
}
</style>