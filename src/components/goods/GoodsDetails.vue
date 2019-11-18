<template>
  <div class="mainBox">
    <div class="swipeBox">
      <!-- 商品轮播 -->
      <van-swipe :autoplay="3000" indicator-color="blue">
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <img :src="item.src" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品价格区域 -->
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
        <van-button type="info" style="margin-right:10px;border-radius:5px">购买商品</van-button>
        <van-button type="danger" style="border-radius:5px" @click="addShopCar(id,value)">加入购物车</van-button>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="goodParams" v-for="(item, index) in details" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="body" >
        <p>商品货号: {{ item.goods_no }}</p>
        <p>库存情况: {{ item.stock_quantity }}件</p>
        <p>上架时间:{{item.add_time | format}}</p>
      </div>
      <div class="btns">
        <van-button plain hairline type="info" @click="goIntroduce">图文介绍</van-button>
        <van-button plain hairline type="danger">商品评论</van-button>
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
      value: 1,
      details: []
    }
  },
  mounted() {
    this.getGoodsDetails()
    this.getGoodsSwipe()
  },
  methods: {
    // 获取轮播图图片地址
    async getGoodsSwipe() {
      const data = await this.$http.get(`/api/getthumimages/${this.id}`)
      // console.log(data)
      if (data.status != 200) return this.$Toast.fail("获取失败")
      this.list = data.data.message
      // console.log();
    },
    // 获取详细参数
    async getGoodsDetails() {
      const data = await this.$http.get(`/api/goods/getinfo/${this.id}`)
      console.log(data)
      if (data.status != 200) return this.$Toast.fail("获取失败")
      this.details = data.data.message
    },
    // 将数据传入vuex中
    addShopCar(id, val) {
      const obj = {
        goodsId: id,
        value: val
      }
      this.$store.commit("goodsId", obj)
    },
    // 跳转到图文介绍
    goIntroduce(){
      this.$router.push({ path: `/goodsdesc/${this.id}` })
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
  width: 325px;
  // height: 232px;
  margin-top: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
.button {
  margin-top: 10px;
}
.van-swipe-item {
  img {
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}
.goodParams {
  width: 325px;

  border: 1px solid #ccc;
  margin-top: 10px;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 50px;
  .title {
    font-size: 17px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .body {
    border-bottom: 1px solid #ccc;
    padding: 15px;
    p {
      font-size: 14px;
      margin: 10px 0;
      color: #8f8f94;
    }
  }
}
.btns {
  margin-top: 10px;
  .van-button {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
