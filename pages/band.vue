<template lang="pug">
  div.lower-page
    h2 BAND
    ul.member-list
      li.member-list__item
        p: img(src="../assets/images/b-iga.png" alt="" width="300" height="180")
        p Hiroshi Iga
        p guitar

      li.member-list__item
        p: img(src="../assets/images/b-miya.png" alt="" width="300" height="180")
        p Sing-Along<br>Miyashita
        p vocal

      li.member-list__item
        p: img(src="../assets/images/b-hosoya.png" alt="" width="300" height="180")
        p Batta Hosoya
        p bass

      li.member-list__item
        p: img(src="../assets/images/b-brian.png" alt="" width="300" height="180")
        p Brian
        p guitar

      li.member-list__item
        p: img(src="../assets/images/b-shige.png" alt="" width="300" height="180")
        p Odori Nenbutsu<br>Shige
        p drums

      li.member-list__item
        p: img(src="../assets/images/b-kiyono.png" alt="" width="300" height="180")
        p Shohei Kiyono
        p keyboards

      li.member-list__item
        p: img(src="../assets/images/b-725.png" alt="" width="300" height="180")
        p Natsuko Hara
        p sax

      li.member-list__item
        p: img(src="../assets/images/b-dai.png" alt="" width="300" height="180")
        p Daisuke Murakami
        p sax
</template>

<script>
export default {
  layout:'post',
}
</script>

<style lang="scss">
.member-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    width: 110px;
    height: 180px;
  }
}
</style>