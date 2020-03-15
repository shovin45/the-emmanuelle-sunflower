<template lang="pug">
  div
    h2 DISCOGRAPHY
    section.disc
        img(src="~/assets/images/pic-discography-2nd.png")
        div.disc__info
          h3 心ここに無き溢れるメロディー
          p 2nd demo<br>2008.4.26 release
          p SOLD OUT
          ol.track-list
            li サンデーモーニング
            li 可憐なトマト
            li 心ここに無き溢れるメロディー
            li 止まない雨は無いじゃない
            li 弱者達の宴
            li 眠たい森
            li トカゲ(LIVE)
            li いばら(LIVE)
    section.disc
        img(src="~/assets/images/pic-discography-1st.png")
        div.disc__info
          h3 The Emmanuelle Sunflower
          p 1st demo<br>2007.11.20 release
          p SOLD OUT
          ol.track-list
            li トカゲ
            li 浦町
            li GYPSY TRAIN
            li いばら

</template>

<script>
export default {
  layout:'post',
}
</script>

<style lang="scss">
.disc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 250px;
    margin: 0 30px 0 0;
  @include mq(sm) {
    margin: 0 0 20px 0;
  }
  }

  &__info {
    flex-basis: 50vw;
  }

}
.track-list {
  ol, li {
    list-style-type: decimal-leading-zero;
  }
  
}

</style>