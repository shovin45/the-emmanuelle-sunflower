import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0.25, 0.1, 0.25, 1.0],
  offset: 0,
  force: true,
})