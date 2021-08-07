<template>
  <div class="lower-page">
    <p><strong>お問い合わせを受け付けました。</strong></p>
    <p>順次メールにてお返事いたしますので、しばらくお待ちください。</p>
    <p>※自動返信メールは送信されません。</p>
    <div class="content__showmore">
      <nuxt-link class="button" to="/">トップに戻る</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'post',
})
export default class Complete extends Vue {
  title: string = 'お問い合わせ受付完了'

  head() {
    return {
      titleTemplate: '',
      title: this.title,
      meta: [{ name: 'robots', content: 'noindex,nofollow' }],
    }
  }
}
</script>
