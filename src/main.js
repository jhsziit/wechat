// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/base'
import './assets/css/iconfont'
// import './assets/css/weui.min'
import './assets/css/reset'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mock'

Vue.prototype.$axios = axios
Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
