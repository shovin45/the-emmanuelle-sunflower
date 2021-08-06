<template>
  <div class="lower-page">
    <h2 class="lower-page__title">{{ title }}</h2>
    <section v-for="(item, index) of items" :key="index" class="disc">
      <div class="disc__cover">
        <img :src="item.image.url" width="250" height="250" />
      </div>
      <div class="disc__info">
        <h3>{{ item.title }}</h3>
        <p v-if="item.subTitle">{{ item.subTitle }}</p>
        <p v-if="item.releasedAt">
          {{ dateTimeToDate(item.releasedAt) }} release
        </p>
        <p v-if="item.productNumber">{{ item.productNumber }}</p>
        <p v-if="item.recordLabel">{{ item.recordLabel }}</p>
        <p>{{ IntegerToPrice(item.value) }}</p>
        <div
          v-if="item.trackList"
          class="track-list"
          v-html="item.trackList"
        ></div>
      </div>
      <div v-if="item.frame" class="disc__iframe" v-html="item.frame"></div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'post',
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
      'https://tes.microcms.io/api/v1/discography',
      {
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
      }
    )
    return {
      items: data.contents,
    }
  },
  methods: {
    IntegerToPrice(value) {
      if (value) {
        var num = Number(value)
        return '¥ ' + num.toLocaleString() + ' (tax in.)'
      } else {
        return 'SOLD OUT'
      }
    },
  },
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
  border-bottom: 1px solid #555;

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
  ol,
  li {
    list-style-type: decimal-leading-zero;
  }
}
</style>
