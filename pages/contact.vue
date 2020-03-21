<template lang="pug">
  div.contact-page.lower-page
    h2 Contact
    p お問い合わせはメールフォームからお願いいたします。
    form(name="contactform" action="/complete" method="POST" data-netlify-recaptcha="true" data-netlify="true")
      p.input-area: label お名前 / Name #[span.required *必須]
        input(type="text" name="name" v-model="name" placeholder="例 : やまだたろう" required)
      p.input-area: label メールアドレス / Email #[span.required *必須]
        input(type="text" name="email" vmodel="email" placeholder="例 : emma-sun@gmail.com" required)
      p.input-area: label お電話番号 / Phone Number
        input(type="tel" name="phone" vmodel="phone" placeholder="例 : 09012345678")
      p.input-area: label 本文 / Message #[span.required *必須]
        textarea(type="text" name="message" vmodel="message" placeholder="お問い合わせ内容" required)

      div(data-netlify-recaptcha="true")

      p
        input(type="checkbox" name="agree" id="agree" v-model="agreed")
        label(for="agree") 上記送信内容で問題なければチェックを入れてください。
      div.content__showmore: button.button(type="submit" :disabled="!agreed") 送信

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

  .input-area {
    margin: 40px 0 0 0;
    font-size: 1.2rem;
  }

}

form[name="contactform"] {
  input[type="text"],input[type="tel"],textarea {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: none;
    padding-left: 5px;
  }

  textarea {
    height: 160px;
  }
  .button {
    transition: 0.4s;
  }
  .button:disabled {
  transition: 0.4s;
  opacity: 0.3;
  cursor: default;
}
}

.required {
  color: #ffc03a;
  font-size: 0.8rem;
  padding: 0 0 0 8px;
}



</style>