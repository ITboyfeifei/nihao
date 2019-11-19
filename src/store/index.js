import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:0,
    value:1
  },
  mutations: {
    goodsId(state,obj){
      state.id=obj.goodsId;
      state.value=obj.value
      console.log(state.id,state.value)
    },
    tabChange(state,params){
      state.active = params.val;
    },
  },
  actions: {
  },
  modules: {
  }
})
