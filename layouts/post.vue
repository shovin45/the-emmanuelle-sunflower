<template>
  <div>
    <transition name="fade">
      <header class="container lower">
        <div class="header__visual">
          <nuxt-link class="tohome" to="/">
            <img
              class="header__logo"
              src="../assets/images/logo-emma.png"
              alt=""
            />
          </nuxt-link>
          <h1 class="header__title">The Emmanuelle Sunflower</h1>
        </div>
        <div class="header__bar"></div>
      </header>
    </transition>
    <drawer-modal></drawer-modal>
    <nuxt></nuxt>
    <the-footer></the-footer>
  </div>
</template>

<script>
import DrawerModal from '~/components/DrawerModal.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  components: {
    DrawerModal,
    TheFooter,
  },
  mounted() {
    return (this.isLoaded = true)
  },
  loading: {
    color: 'blue',
    height: '5px',
  },
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
      transform: translateX(0);
      @include mq() {
        width: 120px;
      }
    }
    &__title {
      color: #ccc;
      font-style: italic;
      font-weight: bold;
      font-size: 3rem;
      transform: translateX(0);
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4));
      position: static;

      @include mq() {
        font-size: 1.8rem;
        text-align: left;
      }
    }
    &__visual {
      text-align: left;
      display: flex;
      align-items: center;
    }
  }
}
</style>
