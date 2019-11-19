import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import NewList from '../components/newList/NewList.vue'
import photo from "../components/photo/photoList.vue"
import goods from "../components/goods/Goods.vue"
import GoodsDetails from "../components/goods/GoodsDetails.vue"
import GoodsIntroduce from "../components/goods/GoodsIntroduce.vue"
import Goodscomments from "../components/goods/Message.vue"
import shoppingCar from "../components/shoppingCar/shoppingCar.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect:{name:'home'}
  },
  {
    path: '/home',
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
    path: '/goods/detail/:id',
    name: 'goodsDetail',
    component: GoodsDetails
  },{
    path: '/goodsdesc/:id',
    name: 'goodsdesc',
    component: GoodsIntroduce
  },{
    path: '/goodscomments/:id',
    name: 'Goodscomments',
    component: Goodscomments
  }
  ,{
    path: '/shopcar',
    name: 'shopcar',
    component: shoppingCar
  },
]

const router = new VueRouter({
  routes
})

export default router
