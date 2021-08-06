<template>
  <transition name="page">
    <div>
      <the-header></the-header>
      <transition name="fade">
        <loading-overlay v-if="!isLoaded"></loading-overlay>
      </transition>
      <drawer-modal></drawer-modal>
      <nuxt></nuxt>
      <the-footer></the-footer>
    </div>
  </transition>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import DrawerModal from '~/components/DrawerModal.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  components: {
    TheHeader,
    LoadingOverlay,
    DrawerModal,
    TheFooter,
  },
  mounted() {
    return (this.isLoaded = true)
  },
}
</script>
