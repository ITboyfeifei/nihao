import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import NewList from '../components/newList/NewList.vue'
import photo from "../components/photo/photoList.vue"
import goods from "../components/goods/Goods.vue"
import Search from '../components/Search/Search.vue'
import Addgoods from '../components/Search/Addgoods.vue'
import Member from '../components/Member/Member.vue'



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
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/addgoods',
    component: Addgoods
  },
  {
    path: '/member',
    component: Member
  },
]

const router = new VueRouter({
  routes
})

export default router
