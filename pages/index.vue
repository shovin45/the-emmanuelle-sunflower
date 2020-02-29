<template lang="pug">
  header.container
    div.a-bg
    div.header__bar
      ul.sns-icons__main
        li: a(href=""): img(src="../assets/images/logo-twitter-white.svg" alt="")
        li: a(href=""): img(src="../assets/images/logo-instagram-white.svg" alt="")
        li: a(href=""): img(src="../assets/images/logo-facebook-white.svg" alt="")
        li: button: img(src="../assets/images/icon-menu.svg" alt="")
    div.header__visual
      img.header__logo(src="../assets/images/logo-emma.png" alt="")
      h1.header__title The Emmanuelle Sunflower
      picture.header__picture
        source(media="(min-width: 768px)" srcset="../assets/images/main_pc.png")
        source(media="(min-width: 321px)" srcset="../assets/images/main_sp.png")
        img(src="../assets/images/main_pc.png" alt="" width="100%")
    nav.drawer
      ul.drawer__list
        li: a(href="") News
        li: a(href="") Live
        li: a(href="") Band
        li: a(href="") Music
        li: a(href="") Contact
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
}
</script>

<style lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;

    .header {
      &__bar {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 5vh 2vw;
        position: absolute;
        z-index: 3;
      }

      &__logo {
        position: absolute;
        margin: 2vh 2vw;
        width: 220px;
      }
      &__visual {
        position: relative;
        z-index: 0;
      }

      &__title {
        color: #fff;
        font-style: italic;
        font-weight: bold;
        font-size: 12em;
        text-align: left;
        filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.4));
        position: absolute;
        bottom: 0px;

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

}

.sns-icons__main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

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


.a-bg {
  animation: fadeColor 50s linear infinite forwards;
  width: 100%;
  height: 100vh;
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

  &__list {
    
    li {
      margin: 10px;
      padding: 5px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      width: 60%;

        a {
          width: 100%;
          display: block;
        }
    }
  }

}

</style>
