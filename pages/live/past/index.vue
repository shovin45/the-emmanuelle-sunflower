<template lang="pug">
  div.live-list-page.lower-page
    h2.lower-page__title {{ title }}
    div.infinite-scroll
      div.infinite-scroll-list
        div.infinite-scroll-list-item
          ul.live-list-page__item
            li(v-for="item in items" :key="item.id")
              nuxt-link(:to="'/live/' + item.id")
                p {{ item.acf.event_year + '.' + item.acf.event_month + '.' + item.acf.event_day + ' ' + item.acf.event_week }}
                h3 {{ item.title.rendered }}
                p(v-if="item.acf.event_place") {{ '@'+item.acf.event_place }}
          //- infinite-loading(
          //-   ref="infiniteLoading"
          //-   spinner="spiral"
          //-   @infinite="infiniteHandler"
          //- )
          //-   span(slot="no-more") データがありません
    //- div.pagination
    //-   nuxt-link.pagination__link(:to="'/live/past/page-' + i" v-for="i of postCount" :key="i") {{ i }}
</template>

<script>
import axios from 'axios'
import LivePastItems from '~/components/LivePastItems.vue'

export default {
  layout:'post',
  components:{
    LivePastItems
  },
  data() {
    return {
      title: 'Live Archive',
      items: [],
      itemsHeaders:[],
      count: 10,
      page: 1,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData() {
    const { data, headers } = await axios.get(
      "http://emma-sun.com/wp-json/wp/v2/posts?categories=5", {
        params: {
          page: 1,
          per_page: 20,
        }
      }
    )
    return { items: data, itemsHeaders: headers }
  },
  methods: {
    infiniteHandler() {
      if(this.count < this.itemsHeaders['x-wp-total']){
        this.count += 10
        this.$refs.infiniteLoading.stateChanger.loaded()
      } else {
        this.$refs.infiniteLoading.stateChanger.complete()
      }
      // console.log(this.count < this.itemsHeaders['x-wp-total'])
    },
  },
  computed: {
    postCount() {
      return Math.round(Number(this.itemsHeaders['x-wp-total']) / 10)
    }
  }
}
</script>

<style lang="scss">
.live-list-page {

  &__item {
    li {
      padding: 20px 0 20px 0;
      border-bottom: 1px #333 solid;
    }
  }
}
.pagination {
  &__link {
    display: inline-block;
    padding: 10px;
    background: #ccc;
    color: #000;
  }

}
</style>