import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active:'home', //底部 tabber 当前被选中的参数,默认 home
    shopNum: 0,  // 购物车数量
  },
  mutations: {  
    tabChange(state,params){
      state.active = params.val;
      console.log(state.active);
    }
  },
  actions: {
  },
  modules: {
  }
})
