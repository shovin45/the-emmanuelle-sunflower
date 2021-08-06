<template>
  <header class="container">
    <div class="header__visual">
      <img
        class="header__logo"
        src="../assets/images/logo-emma.png"
        alt=""
        :class="{ 'logo-slide': titleStart }"
      />
      <h1 class="header__title" :class="{ 'title-slide': titleStart }">
        The Emmanuelle Sunflower
      </h1>
      <picture class="header__picture">
        <source
          media="(max-width: 767px)"
          srcset="../assets/images/main_sp.png"
        />
        <img src="../assets/images/main_pc.png" alt="" width="100%" />
      </picture>
    </div>
    <div class="scroll-icon">
      <nuxt-link v-scroll-to="'#news'" to="to">
        <p>Scroll</p>
        <img src="../assets/images/icon-arrow-down.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="a-bg"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      titleStart: false,
    }
  },
  mounted() {
    return (this.titleStart = true)
  },
}
</script>

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
      transform: translateX(100vw);
      @include mq() {
        width: 120px;
      }
      &.logo-slide {
        animation: title-slide 0.6s cubic-bezier(0.17, 0.67, 0.28, 1.04)
          forwards;
        animation-delay: 0.8s;

        @include mq() {
          animation-duration: 0.6s;
        }
      }
    }
    &__visual {
      position: relative;
      z-index: 0;
      overflow: hidden;
    }

    &__title {
      color: #fff;
      line-height: 1;
      font-family: 'Helvetica Neue';
      font-style: italic;
      font-weight: bold;
      font-size: 12vw;
      text-align: left;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4));
      position: absolute;
      bottom: 12vh;
      transform: translateX(-300vw);

      @include mq() {
        font-size: 16vw;
        bottom: 18vh;
      }
      &.title-slide {
        animation: title-slide 0.2s cubic-bezier(0.17, 0.67, 0.28, 1.04)
          forwards;
        animation-delay: 1.2s;

        @include mq() {
          animation-duration: 0.4s;
        }
      }
    }

    &__picture {
      width: 100%;
      vertical-align: bottom;
      height: 100vh;
    }
  }

  .scroll-icon {
    position: absolute;
    bottom: 6vh;
    left: 0;
    z-index: 1;
    display: inline-block;
    animation: fade-loop 2s infinite linear;
    width: 100%;

    @include mq() {
      bottom: 7vh;
    }

    p {
      font-size: 0.5rem;
      margin: 0 0 5px 0;
    }
    img {
      width: 40px;
    }
  }
}

div.header__visual {
  position: relative;
}

@keyframes title-slide {
  100% {
    transform: translateX(0);
  }
}
@keyframes logo-slide {
  100% {
    transform: translateX(0);
  }
}
</style>
