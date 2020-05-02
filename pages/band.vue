<template lang="pug">
  div.lower-page
    h2.lower-page__title {{ title }}
    ul.member-list
      li.member-list__item(v-for="item of items")
        p: img(:src="item.image.url" alt="" width="300" height="180")
        p {{ item.name }}
        p {{ item.instrument }}
</template>

<script>
import axios from 'axios'
export default {
  layout:'post',
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
      "https://tes.microcms.io/api/v1/member",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    )
    return {
      items: data.contents
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