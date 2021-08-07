<template>
  <div class="lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <ul class="member-list">
      <li v-for="(item, index) of items" :key="index" class="member-list__item">
        <p><img :src="item.image.url" alt="" width="300" height="180" /></p>
        <p>{{ item.name }}</p>
        <p>{{ item.instrument }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  layout: 'post',
})
export default class Band extends Vue {
  title: string = 'Band'

  async asyncData({ $axios }: Context): Promise<object> {
    const { data } = await $axios.get('/member?limit=20')
    return { items: data.contents }
  }

  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style lang="scss">
.member-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    padding: 30px 0 0 0;
    font-family: 'Alfa Slab One', cursive;
    flex-basis: 110px;
  }
  img {
    width: 110px;
    height: 180px;
    opacity: 0.8;
    background: #ccc;
  }
}
</style>
