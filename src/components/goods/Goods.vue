<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul class="goods_list">
        <li v-for="item in list" :key="item.id" @click="pushGo(item.id)">
          <van-image width="10.5rem" height="12.5rem" fit="scale-down" :src="item.img_url" />
          <p class="goodsDetails">{{ item.title }}</p>
          <div class="bottom_box">
            <div class="goods_pice">
              <span class="first">￥{{ item.sell_price }}</span>
              <span>{{ item.market_price }}</span>
            </div>
            <div>
              <span class="title"> 热卖中</span>
              <span class="surplus">还剩多少件</span>
            </div>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "goodsList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      // 默认一页显示几个
      pageindex: 1
    };
  },
  created() {
    this.getGoodsList();
    this.loading = false;
  },

  methods: {
    onLoad() {
      this.loading = true;
    },
    async getGoodsList() {
      const data = await this.$http.get("/api/getgoods?pageindex=" + this.pageindex);
      console.log(data.data.message);
      if (data.status != 200) return this.$Toast.fail("获取失败");
      this.finished = true;
      this.list = data.data.message;
    },
    pushGo(id){
      this.$router.push({ path: `/goods/detail/${id}` })
    }
  }
};
</script>

<style lang="less" scoped>
.goods_list {
  margin-top: 40px;
  overflow: hidden;
  li {
    box-sizing: border-box;

    float: left;
    width: 168px;
    height: 351px;
    // background-color: pink;
    // margin-right: 7px;
    // margin-left: 8px
    margin: 10px 0 0 12px;
    p {
      font-size: 14px;
      color: #000;
      text-align: left;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      padding: 4px 10px;
      height: 53px;
    }
    .van-image {
      box-sizing: border-box;
      padding: 10px;
      .van-image__img {
        width: 148px;
        height: 148px;
      }
    }
    .goodsDetails {
      padding: 4px 10px;
      margin: 14px 0 14px 0 14px;
    }
    .bottom_box {
      overflow: hidden;
      width: 100%;
      background: #eee;
      padding: 5px 0;
      .goods_pice {
        text-align: left;
        padding: 0 10px;
        .first {
          float: left;
          font-size: 16px;
          color: red;
          margin-right: 15px;
          margin-right: 40px;
        }
      }
      .title {
        float: left;
        font-size: 14px;
        color: #000;
      }
      .surplus {
        float: right;
        font-size: 14px;
        color: #000;
      }
    }
  }
  li:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
