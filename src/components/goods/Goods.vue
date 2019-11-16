<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul>
        <li></li>
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
      
    }
  }
};
</script>

<style lang="less" scoped></style>
