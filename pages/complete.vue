<template lang="pug">
  div.lower-page
    p: strong お問い合わせを受け付けました。
    p 順次メールにてお返事いたしますので、しばらくお待ちください。
    p ※自動返信メールは送信されません。
    div.content__showmore: nuxt-link.button(to="/") トップに戻る
</template>

<script>
export default {
  layout: 'post',
  data() {
    return {
      title: 'お問い合わせ受付完了',
    }
  },
  head() {
    return {
      titleTemplate: '',
      title: this.title,
      meta: [
        { name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
}
</script>