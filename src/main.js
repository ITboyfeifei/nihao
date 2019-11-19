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
// 定义时间过滤器
Vue.filter("format", function(time) {
  function dateFormat(time) {
    let date = new Date(time) //把定义的时间赋值进来进行下面的转换
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  }

  return dateFormat(time)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
