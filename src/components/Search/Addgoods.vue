<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="商品添加" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入商品名称" />
      <van-button type="info" @click="addshop">添加商品</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value: ''
    };
  },
  methods: {
    // 点击返回
    onClickLeft() {
      this.$router.push("/search");
    },
   async addshop(){
     if(this.value.trim().length <= 0) return this.$notify('请输入商品内容')
        const {data: res} = await this.$http.post('/api/addproduct',{name: this.value})
        this.$notify({type: 'success', message: '添加商品成功'})
        // console.log(res);
        this.onClickLeft()
        
    }
  }
};
</script>
<style scoped>
.van-field {
    margin-bottom: 30px;
}
.van-button {
    width: 100%;
}

</style>

