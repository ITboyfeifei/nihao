<template>
  <div id="app">
    <div class="header">
      <span class="goBack">
        <van-icon name="arrow-left" />
        <span>返回</span>
      </span>
      黑马程序员
    </div>
    <router-view></router-view>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home" replace to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="manager-o" replace to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" replace to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    height: 40px;
    background: #1989fa;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .goBack{
      position: fixed;
      top:4px;
      left:15px ;
      vertical-align: middle;
      .van-icon{
        font-size: 20px;
      }
      span{
        position: absolute;
        top: -5px;
        left: 16px;
        // display: block;
        width: 45px;
        font-size: 16px

      }
    }
  }
</style>
