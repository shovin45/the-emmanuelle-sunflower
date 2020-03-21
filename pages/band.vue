<template lang="pug">
  div.lower-page
    h2 BAND
    ul.member-list
      li.member-list__item
        p: img(src="../assets/images/b-iga-wt.png" alt="" width="300" height="180")
        p Hiroshi Iga
        p guitar

      li.member-list__item
        p: img(src="../assets/images/b-miya-wt.png" alt="" width="300" height="180")
        p Sing-Along<br>Miyashita
        p vocal

      li.member-list__item
        p: img(src="../assets/images/b-hosoya-wt.png" alt="" width="300" height="180")
        p Batta Hosoya
        p bass

      li.member-list__item
        p: img(src="../assets/images/b-brian-wt.png" alt="" width="300" height="180")
        p Brian
        p guitar

      li.member-list__item
        p: img(src="../assets/images/b-shige-wt.png" alt="" width="300" height="180")
        p Odori Nenbutsu<br>Shige
        p drums

      li.member-list__item
        p: img(src="../assets/images/b-kiyono-wt.png" alt="" width="300" height="180")
        p Shohei Kiyono
        p keyboards

      li.member-list__item
        p: img(src="../assets/images/b-725-wt.png" alt="" width="300" height="180")
        p Natsuko Hara
        p sax

      li.member-list__item
        p: img(src="../assets/images/b-dai-wt.png" alt="" width="300" height="180")
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
  justify-content: space-around;
  img {
    width: 110px;
    height: 180px;
    opacity: 0.8;
  }
}
</style>