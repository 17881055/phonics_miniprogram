import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    usingComponents: {
      'i-button': '../../ui/button/index',
      'i-alert': '../../ui/alert/index',
      'i-card': '../../ui/card/index'
    }
  }
}
