<template lang="pug">
  header.container
    div.header__visual
      img.header__logo(src="../assets/images/logo-emma.png" alt="")
      h1.header__title The Emmanuelle Sunflower
      picture.header__picture
        source(media="(max-width: 767px)" srcset="../assets/images/main_sp.png")
        img(src="../assets/images/main_pc.png" alt="" width="100%")
    div.scroll-icon
      nuxt-link(v-scroll-to="'#news'" to)
        p Scroll
        img(src="../assets/images/icon-arrow-down.svg" alt="")
    div.a-bg
</template>


<style lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;

    .header {

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
          bottom: 16vh;
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
      display: inline-block;
      animation: fade-loop 2s infinite linear;

      p {
        font-size: 0.5rem;
        margin: 0 0 5px 0;
      }
    }

}


div.header__visual {
  position: relative;
}
</style>