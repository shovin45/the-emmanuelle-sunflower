import Vue from 'vue'

Vue.mixin({
  methods: {
    dateTimeToDate(dateTimeString) {
      if (dateTimeString) {
        const date = new Date(dateTimeString)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return year + '.' + month + '.' + day
      }

      return ''
    }
  }
})