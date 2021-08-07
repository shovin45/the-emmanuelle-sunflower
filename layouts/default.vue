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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class Default extends Vue {
  isLoaded: boolean = false

  mounted() {
    this.isLoaded = true
  }
}
</script>
