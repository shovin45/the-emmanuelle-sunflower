<template lang="pug">
  div
    transition(name="fade")
      div.loading-page(v-if="loading")
        p loading......
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 100;

  p {
    color:#fff;
  }
}

.fade {
  &-enter-active, &-leave-active {
    transition: opacity 0.8s ease;
  }

  &-enter, &-leave-to {
    opacity: 0;
  }
}

</style>