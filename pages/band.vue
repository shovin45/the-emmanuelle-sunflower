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

<script>
import axios from 'axios'
export default {
  layout: 'post',
  data() {
    return {
      title: 'Band',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      'https://tes.microcms.io/api/v1/member?limit=20',
      {
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
      }
    )
    return {
      items: data.contents,
    }
  },
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
