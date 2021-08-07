<template>
  <div>
    <ul class="drawer__icon open">
      <li>
        <button @click="isNavMenu = !isNavMenu">
          <img src="../assets/images/icon-menu.svg" alt="" />
        </button>
      </li>
    </ul>
    <transition name="slide">
      <nav
        v-if="isNavMenu"
        class="drawer"
        :class="{ 'drawer--visible': isNavMenu }"
        @click="isNavMenu = false"
      >
        <ul
          class="drawer__icon close"
          :class="{ 'drawer__icon--visible': isNavMenu }"
        >
          <li>
            <button @click="isNavMenu = false">
              <img src="../assets/images/icon-menu-close.svg" alt="" />
            </button>
          </li>
        </ul>
        <ul class="drawer__list">
          <li>
            <nuxt-link to="/news">News</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/live">Live</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/band">Band</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/music">Music</nuxt-link>
          </li>
          <li>
            <a href="https://emmanuelle.buyshop.jp" target="_blank">Shop</a>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
        <h4 class="drawer__title">Follow us</h4>
        <ul class="sns-icons__drawer">
          <li>
            <a href="https://twitter.com/E_Sunflower" target="_blank"
              ><img
                src="../assets/images/logo-twitter-white.svg"
                alt="公式Twitterへ 新しいウィンドウで開きます。"
            /></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/the_emmanuelle_sunflower/"
              target="_blank"
              ><img
                src="../assets/images/logo-instagram-white.svg"
                alt="公式Instagramへ 新しいウィンドウで開きます。"
            /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/e.sunflower/" target="_blank"
              ><img
                src="../assets/images/logo-facebook-white.svg"
                alt="公式facebookへ 新しいウィンドウで開きます。"
            /></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCzM1-I3D5_wG1M0PEBgo0vg"
              target="_blank"
              ><img
                src="../assets/images/logo-youtube-white.svg"
                alt="公式YouTubeへ 新しいウィンドウで開きます。"
            /></a>
          </li>
        </ul>
      </nav>
    </transition>
    <transition name="fade">
      <div
        v-if="isNavMenu"
        class="modal-overlay"
        @click="isNavMenu = false"
      ></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class DrawerModal extends Vue {
  isNavMenu: boolean = false
}
</script>
