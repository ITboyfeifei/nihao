<template>
  <div>
    <van-nav-bar
      title="商城搜索"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 搜索 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      @clear="onClear"
    />
    <!-- 搜索结果展示 -->
    <van-swipe-cell v-for="(item,index) in searchList" :key="index">
      <!-- <van-cell v-for="(item,index) in searchList" :key="index" :border="false" title="item.name" value="item.ctime" /> -->
      <van-cell :border="false" :title="item.name" :value="item.ctime | dateFormat" />
      <template slot="right">
        <van-button square type="danger" text="删除" @click="removeCell(item.id)" />
        <!-- @click="removeCell(scope.row.id)" -->
      </template>
    </van-swipe-cell>
    <!-- 搜索历史 -->
    <div class="top">
      <span>搜索历史</span>
      <van-icon name="delete"  class="icon_delete" @click="remove"/>
    </div>
    <!-- 历史记录 -->
    <div class="taglist">
      <van-tag v-for="(item,index) in historysearch" :key="index" @click="tagclick(item)">{{item}}</van-tag>
    </div>


    <van-divider class="vandivder">暂无搜索历史</van-divider>

  </div>
</template>

<script>
export default {
  data() {
    return {
      //输入框内容
      value: '',
      //搜索列表数据
      searchList: '',
      //搜索历史记录
      historysearch:[]
    };
  },
  created() {
    this.historysearch = JSON.parse(localStorage.getItem('historysearch')) || []
  },
  methods: {
    async getSearch() {
      const { data: res } = await this.$http.get("api/getprodlist");
      // console.log(res.message);
      this.searchList = res.message;
    },
    //返回
    onClickLeft() {
      this.$router.push("/home");
    },
    //添加
    onClickRight() {
      this.$router.push("/addgoods");
    },
    // 点击键盘上的搜索/回车按钮后触发
    onSearch(value) {
      console.log('value',value);
      if(value.trim().length <= 0) return this.$toast('请输入搜索内容')
      this.getSearch();
      // localStorage.setItem('historysearch',JSON.stringify(value))
      if(!localStorage['historysearch']){
        console.log(111);
        localStorage.setItem('historysearch',"[]")
      }
      !this.historysearch.includes(value) && this.historysearch.push(value)
      // console.log(JSON.stringify(this.historysearch))
      localStorage['historysearch'] = JSON.stringify(this.historysearch);
      // console.log(localStorage['historysearch']);
      var arr = JSON.parse(localStorage.getItem('historysearch'))
      // console.log(arr);
      this.historysearch = arr
      console.log(this.historysearch);
      
      
      
    },
    // 事件在点击搜索框右侧取消按钮时触发
    onCancel() {
      //清空搜索数据
      this.searchList = [];
    },
    //点击输入框清除按钮
    onClear() {
      this.onCancel()
    },
    //删除商品
    async removeCell(id) {
      const confirmResult = await this.$Dialog({
        title: "警告",
        message: "确认删除该商品吗？"
      }).catch(err => err);
      if (confirmResult !== "confirm")
        return this.$notify({ type: "warning", message: "取消删除" });
      const { data: res } = await this.$http.get("api/delproduct/" + id);
      this.$notify({ type: "success", message: "删除成功" });
      this.getSearch();
    },
    tagclick(item){
      this.value = item
    },
    remove(){
      localStorage.removeItem('historysearch')
      this.historysearch = []
    }
  }
};
</script>

<style scoped>
/* .van-nav-bar {
  /* background-color: #1989fa; */
/* color: #fff !important; */
/* } */
.top {
  margin: 20px 10px 20px 10px;
}
.icon_delete {
  float: right;
}
.vandivder {
  color: black;
  font-size: 14px;
  display: none;
}
.taglist {
  margin: 0 10px;
}
.van-tag {
  margin: 0 5px;
}
</style>