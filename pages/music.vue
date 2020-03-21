<template lang="pug">
  div.lower-page
    h2.lower-page__title DISCOGRAPHY
    section.disc
        img(src="~/assets/images/pic-discography-ep-2nd.png" width="250" height="250")
        div.disc__info
          h3 Ghost Ship
          p 2015.10.30 release
          p MRES-003 いきててよかった
          p ¥1,500 (tax in.)
          ol.track-list
            li Introduction
            li Yo!ho!
            li LET IT Bo
            li 真冬のファンタジー
            li 移民の結末
            li 夜汽車とダイナマイト
            li Ghost Ship
    section.disc
        img(src="~/assets/images/pic-discography-ep-1st.png" width="250" height="250")
        div.disc__info
          h3 Beautiful EP
          p 1st EP<br>2012.2.8 release
          p MRES-002 いきててよかった nice time RECORDS
          p ¥1,050 (tax in.)
          ol.track-list
            li Beautiful Day
            li 世界を買った男
            li ロビンズデイ
            li 21世紀のジョン・リー・フッカーとチーズとミネストローネ
            li 弱者達の宴(LIVE@横浜B.B.STREET 2011.8.29)
          iframe(width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3161135&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false")
    section.disc
        img(src="~/assets/images/pic-discography-album-1st.png" width="250" height="250")
        div.disc__info
          h3 弱者達の宴
          p 1st album<br>2010.1.17 release
          p MRES-001 ¥2,000 (tax in.)
          ol.track-list
            li 強者達の憂鬱
            li イーアルファンク
            li RAIN RAIN
            li イエローマン
            li 白いカラス
            li GYPSY TRAIN
            li ダンスマン
            li 天国に一番近いラブソング
            li 弱者達の宴
            li 虫だから
            li いばら
          iframe(width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3161356&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false")
    section.disc
        img(src="~/assets/images/pic-discography-demo-2nd.png" width="250" height="250")
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
          iframe(width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73063941&amp;color=ff6600&amp;show_artwork=false")
    section.disc
        img(src="~/assets/images/pic-discography-demo-1st.png" width="250" height="250")
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
  margin: 0 0 10vh 0;

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