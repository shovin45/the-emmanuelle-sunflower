import { Plugin } from '@nuxt/types'

const common: Plugin = (_context, inject) => {
  const dateTimeToDate = (timestamp: string) => {
    if (timestamp) {
      const date: Date = new Date(timestamp)
      const year: number = date.getFullYear()
      const month: number = date.getMonth() + 1
      const day: number = date.getDate()
      return year + '年' + month + '月' + day + '日'
    }
    return ''
  }
  inject('dateTimeToDate', dateTimeToDate)
}

export default common
