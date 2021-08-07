<template>
  <div class="contact-page lower-page">
    <h2 class="lower-page__title">Contact</h2>
    <p>お問い合わせはメールフォームからお願いいたします。</p>
    <client-only>
      <form
        name="contactform"
        action="/complete/"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contactform" />
        <p class="input-area" style="display: none">
          <label
            >Don’t fill this out:<input type="text" name="bot-field"
          /></label>
        </p>
        <p class="input-area">
          <label
            >お名前 / Name <span class="required">*必須</span
            ><input
              type="text"
              name="name"
              placeholder="例 : やまだたろう"
              title="お名前を入力してください。"
              required="required"
          /></label>
        </p>
        <p class="input-area">
          <label
            >メールアドレス / Email <span class="required">*必須</span
            ><input
              type="email"
              name="email"
              placeholder="例 : emma-sun@gmail.com"
              required="required"
          /></label>
        </p>
        <p class="input-area">
          <label
            >お電話番号 / Phone Number<input
              type="tel"
              name="phone"
              placeholder="例 : 09012345678"
          /></label>
        </p>
        <p class="input-area">
          <label
            >本文 / Message <span class="required">*必須</span
            ><textarea
              type="text"
              name="message"
              placeholder="お問い合わせ内容"
              required="required"
            ></textarea>
          </label>
        </p>
        <p>
          <input
            id="agree"
            v-model="agreed"
            type="checkbox"
            name="agree"
          /><label for="agree"
            >上記送信内容で問題なければチェックを入れてください。</label
          >
        </p>
        <div class="content__showmore">
          <button class="button" type="submit" :disabled="!agreed">送信</button>
        </div>
      </form>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'post',
})
export default class Contact extends Vue {
  name: string = ''
  email: string = ''
  phone: string = ''
  message: string = ''
  agreed: boolean = false
  title: string = 'Contact'

  head() {
    return {
      title: this.title,
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

form[name='contactform'] {
  input[type='text'],
  input[type='email'],
  input[type='tel'],
  textarea {
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
