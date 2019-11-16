import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import NewList from '../components/newList/NewList.vue'
import photo from "../components/photo/photoList.vue"
import goods from "../components/goods/Goods.vue"
import GoodsDetails from "../components/goods/GoodsDetails.vue"


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/newslist',
    name: 'newsList',
    component: NewList
  },
  {
    path: '/photo/list',
    name: 'photo',
    component: photo
  },
  {
    path: '/goods/list',
    name: 'goods',
    component: goods
  },{
    path: '/goods/list',
    name: 'goods',
    component: goods
  },{
    path: '/goods/detail',
    name: 'goodsDetail',
    component: GoodsDetails
  },

]

const router = new VueRouter({
  routes
})

export default router
