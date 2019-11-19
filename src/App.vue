<template>
  <div id="app">
    <router-view></router-view>
      <!-- 底部tab栏 -->
    <van-tabbar v-model="active" :route='true'>
      <van-tabbar-item :name="item.styleName" :icon="item.icon" :to="item.to" v-for="item in tabberList" :key='item.styleName' :info="item.info == 0? null : item.info">{{item.displayName}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      //底部 tabber 数据
      tabberList:[
        {displayName:'首页',styleName:'home',icon:'home-o',to:'/home'},
        {displayName:'会员',styleName:'vip',icon:'friends-o',to:'/vip'},
        {displayName:'购物车',styleName:'shopping-car',icon:'shopping-cart-o',to:'',info:this.$store.state.shopNum},
        {displayName:'搜索',styleName:'search',icon:'search',to:'/search'},
      ],
    }
  },
  computed: {
    active: {
        get(){
          return this.$store.state.active;
        },  
        set(val){
　　　　　　this.$store.commit('tabChange',{val});
        }
    },
  },
}

</script>

<style lang="less" scoped>

</style>