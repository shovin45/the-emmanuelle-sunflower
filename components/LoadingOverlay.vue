<template lang="pug">
  div.loading-overlay
    div.loading-content
      div.breeding-rhombus-spinner
        div.rhombus.child-1
        div.rhombus.child-2
        div.rhombus.child-3
        div.rhombus.child-4
        div.rhombus.child-5
        div.rhombus.child-6
        div.rhombus.child-7
        div.rhombus.child-8
        div.rhombus.big
      p loading
        span.dot.child-1 .
        span.dot.child-2 .
        span.dot.child-3 .
</template>



<style lang="scss">
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  background: $themeColor;
  color: $primaryFontColor;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-content {
  p {
    margin: 5vh 0 0 0;
    animation: fade-loop 2s infinite linear;
    animation-delay: -0.5s;

    span.dot {
      &.child-1,&.child-2,&.child-3 {
        animation: word-visivle 2s infinite step-start forwards;
        opacity: 0;
      }
      &.child-1 {
        animation-delay: calc(-0.3s * 1);
      }
      &.child-2 {
        animation-delay: calc(-0.3s * 2);
      }
      &.child-3 {
        animation-delay: calc(-0.3s * 3);
      }
    }
  }
}
@keyframes fade-loop {
  50% {
    opacity: 0.2;
  }
}
@keyframes word-visivle {
  50% {
    opacity: 1;
  }
}

</style>