<template lang="pug">
  div.lower-page
    h2.lower-page__title {{ title }}
    section.disc(v-for="item of items")
        div.disc__cover: img(:src="item.image.url" width="250" height="250")
        div.disc__info
          h3 {{ item.title }}
          p(v-if="item.subTitle") {{ item.subTitle }}
          p(v-if="item.releasedAt") {{ dateTimeToDate(item.releasedAt) }} release
          p(v-if="item.productNumber") {{ item.productNumber }}
          p(v-if="item.recordLabel") {{ item.recordLabel }}
          p {{ IntegerToPrice(item.value) }}
          div.track-list(v-if="item.trackList" v-html="item.trackList")
        div.disc__iframe(v-if="item.frame" v-html="item.frame")

</template>

<script>
import axios from 'axios'
export default {
  layout:'post',
  data() {
    return {
      title: 'DISCOGRAPHY',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://tes.microcms.io/api/v1/discography",
      {
        headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  methods: {
    IntegerToPrice(value){
      if(value){
        var num = Number(value)
        return '¥ ' + num.toLocaleString() + ' (tax in.)';
      } else {
        return 'SOLD OUT'
      }
    }
  }
}
</script>

<style lang="scss">
.disc {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 0 10vh 0;
  padding: 0 0 10vh 0;
  border-bottom: 1px solid #555 ;

  img {
    width: 250px;
    margin: 0 30px 0 0;
  @include mq() {
    width: 100%;
    height: auto;
    margin: 0 0 20px 0;
  }
  }
  &__cover {
    flex-basis: 50%;
    text-align: right;
    @include mq() {
      flex-basis: 100%;
    }
  }

  &__info {
    flex-basis: 50%;
    @include mq() {
      flex-basis: 100%;
    }
  }
  &__iframe {
    margin: 30px 0 0;
    flex-basis: 100%;
  }
}
.track-list {
  ol, li {
    list-style-type: decimal-leading-zero;
  }

}

</style>