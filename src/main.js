// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/base'
import './assets/css/iconfont'
import './assets/css/weui.min'
import './assets/css/reset'
import axios from 'axios'
import {Header, Button} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})