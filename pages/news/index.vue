<template lang="pug">
  div.news-list-page.lower-page
    h2.lower-page__title {{ title }}
    ul.news-list-page__item
      li(v-for="item in items")
        nuxt-link(:to="'/news/'+item.id")
          h3  {{ item.title.rendered }}
          p.news-list-page__item__date {{ dateTimeToDate(item.date) }}
          img.news-list-page__item__image(
            src="~/assets/images/pic-post-alpha-bg.png"
            alt=""
            :style="{ 'background-image': setDefaultImage(item) }")
</template>

<script>
import axios from "axios"
import defaultIamge from "~/assets/images/pic-post-default.png"

export default {
  layout:'post',
  data() {
    return {
      title: 'News',
      items: []
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios
      .get(
        "https://emma-sun.com/wp-json/wp/v2/posts?categories=2&_embed",
      )
    return {
      items: data
    }
  },
  methods: {
    setDefaultImage(image) {
      var defaultImageUrl = defaultIamge
      if(image["_embedded"]["wp:featuredmedia"]) { return 'url(\'' + image["_embedded"]["wp:featuredmedia"][0]["media_details"]["sizes"]["full"]["source_url"] + '\')' }
      else { return 'url(\'' + defaultImageUrl + '\')' }
    }
  },
    loading: {
    color: 'white',
    height: '5px'
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