<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header">西瓜西瓜吃西瓜.vant</div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" :height="200" >
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <van-image width="100%" height="200px" :src="item.img"/>
      </van-swipe-item>
    </van-swipe>  
    <!-- 分类导航 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in navList" :key="item.id" :to="item.to">
        <van-icon :name="item.type" size='50px' :color='item.color'/>
        <span>{{item.name}}</span> 
      </van-grid-item>
    </van-grid>
    <!-- 底部tab栏 -->
    <van-tabbar v-model="active" :route='true'>
      <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/router">会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/shop">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data(){
    return {
      //轮播图数据
      swipeList:[],
      //分类导航数据
      navList:[
        {name:'新闻资讯',type:'fire',color:'red',id:1,to:'/newslist'},
        {name:'图片分享',type:'photo-o',color:'#FD3C4F',id:2,to:'/photo/list'},
        {name:'商品购买',type:'shopping-cart-o',color:'#3F80FE',id:3,to:'/goods/list'},
        {name:'留言反馈',type:'comment-o',color:'#2BC21B',id:4,to:'/'},
        {name:'视频专区',type:'tv-o',color:'#FE3F00',id:5,to:''},
        {name:'联系我们',type:'phone-o',color:'#FF772C',id:6,to:'/'}
      ]
    }
  }, 

  created(){
    this.getSwipeList();
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
  methods:{
    getSwipeList(){
      this.$http.get('/api/getlunbo')
        .then((res)=>{
          this.swipeList = res.data.message;
          console.log(this.swipeList);  
        })
        .catch((rej)=>rej);
    },
  }
}
</script>

<style scoped>
.header { 
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background-color: #1989fa;
  color: white;
}
.van-col{
  text-align: center;
}
.van-icon{
  display: block;
  margin: 5px auto 0;
}
</style>