<template>
  <div class="mainBox">
    <div class="swipeBox">
      <van-swipe :autoplay="3000" indicator-color="blue">
        <van-swipe-item></van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods_pirce">
      <span class="goods_title">华为（HUAWEI）荣耀6Plus 16G双4G版</span>
      <p class="goodInfo">
        市场价:
        <span>¥2499</span>销售价 <em>¥ 2195</em>
      </p>
      <div class="buyNum">
        <span>购买数量</span>
        <van-stepper v-model="value" />
      </div>
      <div class="button">
        <van-button type="info">信息按钮</van-button>
        <van-button type="danger">警告按钮</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      list: [],
      value: 1
    }
  },
  mounted() {
    this.getGoodsDetails()
  },
  methods: {
    async getGoodsDetails() {
      const data = await this.$http.get(`/api/goods/getinfo/${this.id}`)
      console.log(data)
      //   if(data.status!=200)return this.$Toast.fail("获取失败")
      //   this.list=data.data.message
    }
  }
}
</script>
<style lang="less">
.mainBox {
  padding: 10px;
}
.swipeBox {
  width: 355px;
  height: 232px;
  border: 1px solid #ccc;
  margin-top: 40px;
  border-radius: 3px;
}
.van-swipe {
  width: 355px;
  height: 232px;
}
.goods_pirce {
  margin-top: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  .goods_title {
    border-bottom: 1px solid #ccc;
  }
  .goodInfo {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #8f8f94;
    span {
      text-decoration: line-through;
      margin: 0 10px;
    }
    em {
      font-weight: 700;
      font-size: 16px;
      color: red;
      font-style: normal;
    }
  }
}
.buyNum {
  overflow: hidden;
  span {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #8f8f94;
  }
  .van-stepper {
    display: inline-block;
    vertical-align: middle;
  }
}
.button{
    display: flex;
    justify-content: 
}
</style>
