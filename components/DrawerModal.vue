<template lang="pug">
div
  ul.drawer__icon.open
    li: button(@click="isNavMenu=!isNavMenu"): img(src="../assets/images/icon-menu.svg" alt="")
  transition(name="slide")
    nav.drawer(v-if="isNavMenu" :class="{ 'drawer--visible': isNavMenu }")
      ul.drawer__icon.close(:class="{ 'drawer__icon--visible': isNavMenu}")
        li: button(@click="isNavMenu=false"): img(src="../assets/images/icon-menu-close.svg" alt="")
      h4.drawer__title Follow us
      ul.sns-icons__drawer
        li: a(href="https://twitter.com/E_Sunflower" target="_blank"): img(src="../assets/images/logo-twitter-white.svg" alt="公式Twitterへ 新しいウィンドウで開きます。")
        li: a(href="https://www.instagram.com/the_emmanuelle_sunflower/" target="_blank"): img(src="../assets/images/logo-instagram-white.svg" alt="公式Instagramへ 新しいウィンドウで開きます。")
        li: a(href="https://www.facebook.com/e.sunflower/" target="_blank"): img(src="../assets/images/logo-facebook-white.svg" alt="公式facebookへ 新しいウィンドウで開きます。")
        li: a(href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg" target="_blank"): img(src="../assets/images/logo-youtube-white.svg" alt="公式YouTubeへ 新しいウィンドウで開きます。")
      h4.drawer__title Menus
      ul.drawer__list
        li: nuxt-link(to="/news") News
        li: nuxt-link(to="/live") Live
        li: nuxt-link(to="/band") Band
        li: nuxt-link(to="/music") Music
        li: nuxt-link(to="/contact") Contact
  transition(name="fade")
    div.modal-overlay(v-if="isNavMenu" @click="isNavMenu=false")
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