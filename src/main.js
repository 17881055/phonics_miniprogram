import Vue from 'vue';
import App from './App';
import utils from './utils';

Vue.config.productionTip = false;
Vue.prototype.$httpWX = utils.WXrequest;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
