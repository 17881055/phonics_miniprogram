import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': '月嫂列表',
    "usingComponents": {
      'i-button': '../../ui/button/index',
    }
  }
}
