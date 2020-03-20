<template lang="pug">
  div.contact-page.lower-page
    h2 Contact
    p お問い合わせはメールフォームからお願いいたします。<br>※折り返し確認メールが送信されます。届かない場合は迷惑メール設定などをご確認ください。
    form(name="contactform" action="/complete" data-netlify="true")
      p: label お名前 / Name
        input(type="text" name="name" v-model="name" required)
      p: label メールアドレス / Email
        input(type="text" name="email" vmodel="email" required)
      p: label お電話番号 / Phone Number
        input(type="tel" name="phone" vmodel="phone")
      p: label 本文 / Message
        textarea(type="text" name="message" vmodel="message" required)

      p: label(for="agree") 上記送信内容で問題なければチェックを入れてください。
      input(type="checkbox" name="agree" id="agree" v-model="agreed")
      button.button(type="submit" :disabled="!agreed") 送信

</template>

<script>
export default {
  layout:'post',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      agreed: false,
    }
  }
}
</script>

<style lang="scss">
.contact-page {

}

.button:disabled {
  background: #1a1a1a;
}

</style>