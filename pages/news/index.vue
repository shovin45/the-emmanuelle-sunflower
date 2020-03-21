<template lang="pug">
  div.news-list-page.lower-page
    h2.lower-page__title News一覧
    ul.news-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/news/'+item.id")
          h3  {{ item.title }}
          p.news-list-page__item__date {{ dateTimeToDate(item.publishedAt) }}
          img.news-list-page__item__image(
            src="~/assets/images/pic-post-alpha-bg.png"
            alt=""
            :style="{ 'background-image': setDefaultImage(item.image) }")
</template>

<script>
import axios from "axios"
import defaultIamge from "~/assets/images/pic-post-default.png"

export default {
  layout:'post',
  components: {
  },
  data() {
    return {
      items: []
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/information",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  methods: {
    setDefaultImage(image) {
      var defaultImageUrl = defaultIamge
      if(image) { return 'url(\'' + image.url + '\')' }
      else { return 'url(\'' + defaultImageUrl + '\')' }
    }
  }
}
</script>

<style lang="scss">
.news-list-page {

  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    li {
      flex-basis: 30%;
      margin: 0 0 5vh 0;

      img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      @include mq() {
        flex-basis: 42vw;
        margin: 0 2vw 5vh 0;
        h3 {
          min-height: 48px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
    &__date {
      margin: 5px 0 0;
    }
    &__image {
      margin: 5px 0 0;
    }
  }
}

</style>