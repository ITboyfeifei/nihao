import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./element/element.js"
import './assets/gelobal.css'
import axios from "axios"
// 配置 接口基准地址
axios.defaults.baseURL = "http://www.liulongbin.top:3005/"
// 将axios放到vue的原型内 这样就可以其他组件只需要 this.$http 就相当于 axios发送请求
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
