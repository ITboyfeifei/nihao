<template>
  <div id="app">
      <!-- 头部 -->
      <div class="header">西瓜西瓜吃西瓜.vant</div>
      <div :class="active == 'home'?'back hidden':'back'" v-on:click="turnBack"><van-icon name="arrow-left" size="20px" /></div>
      <!-- 组件占位符 -->
      <router-view ></router-view>
      <!-- 底部tab栏 -->
      <van-tabbar v-model="active" :route='true' :class="active == 'shopping-car'?'hidden':'null'">
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
        {displayName:'购物车',styleName:'shopping-car',icon:'shopping-cart-o',to:'/shop-car',info:this.$store.state.shopNum},
        {displayName:'搜索',styleName:'search',icon:'search',to:'/search'},
      ],
      // 当前路径数据
      path: this.$route.path
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
    }
  },
  methods: {
    turnBack(){
      var flag = false;
      for(var item of this.tabberList){
        this.path == item.to && (flag = true);
      }
      console.log(flag);
      flag === true ? this.$router.push('/home') && (this.active = 'home') : this.$router.go(-1);
    }
  },
  created(){
    this.active = this.path;
  }
}
</script>

<style>
.header { 
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background-color: #1989fa;
  color: white;
  vertical-align: middle;
}
.back{
  position: absolute;
  top: 11px;
  width: 80px;
  color: white;
  text-align: center;
}
.van-icon-arrow-left:after{
  font-size: 16px;
  content: '返回';
}
.van-icon-arrow-left:before,
.van-icon-arrow-left:after{
  vertical-align: top!important;
}
.hidden{
  display: none!important;
}
</style>
