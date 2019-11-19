<template>
  <div>
    <!-- =====留言板输入框===== -->
    <div class="input-area">
      <h3>发表评论</h3>
      <hr />
      <van-cell-group>
        <!-- ===输入框=== -->
        <van-field
          v-model="message"
          rows="2"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
        <!-- ===提交按钮=== -->
        <van-button type="info" @click="postMessage">发表评论</van-button>
      </van-cell-group>
      <!-- =====留言列表===== -->
      <ul class="message-list">
        <li v-for="(item, i) in messageList" :key="i" class="message-item">
          <p class="basic-info">
            <span>第{{i + 1}}楼</span>
            <span>用户：{{item.user_name}}</span>
            <span>发表时间：{{item.add_time.split('T')[0]}}</span>
          </p>
          <p class="content-info">{{item.content}}</p>
        </li>
      </ul>
      <!-- ===加载更多=== -->
      <van-button plain type="primary" color="red" @click="getMoreMsg">加载更多</van-button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getMessageList(1)
  },
  data() {
    return {
      // 留言板输入框绑定数据
      message: "",
      // 留言页码
      pageIndex: 1,
      // 用户留言数据列表
      messageList: []
    }
  },
  methods: {
    // 获取留言列表
    async getMessageList(pageNum) {
      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.id}?pageindex=${pageNum}`
      )
      if (res.status !== 0) return
      // 请求成功,遍历数据并push到messageList中
      this.messageList = res.message
    },
    // 加载更多留言功能
    async getMoreMsg() {
      this.pageIndex++
      // this.getMessageList(this.pageIndex)
      // 发送请求
      const { data: res } = await this.$http.get(
        `/api/getcomments/${this.id}?pageindex=${this.pageIndex}`
      )
      if (res.status !== 0) return
      // 请求成功,遍历数据并push到messageList中
      console.log(res.message)
      res.message.forEach(element => {
        this.messageList.push(element)
      })
    },
    // 提交评论功能
    async postMessage() {
      // 去掉首位空格预检验
      if (this.message.trim().length === 0) {
        this.$toast("请输入留言内容")
        this.message = ""
        return
      }
      // 发送添加留言请求
      const { data: res } = await this.$http.post(
        `/api/postcomment/${this.id}`,
        { content: this.message.trim() }
      )
      if (res.status !== 0) return
      // 请求成功
      this.$toast(res.message)
      this.getMessageList(1)
      this.message = ""
    }
  },
  computed: {
    // 获取url中的参数
    id: function() {
      return this.$route.params && this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped>
.input-area {
  padding: 0 5px;
}

h3 {
  font-size: 16px;
}

.van-field {
  height: 100px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  border-radius: 3px;
}

.van-button {
  width: 100%;
  border-radius: 3px;
}

.message-list {
  .basic-info {
    height: 30px;
    font-size: 12px;
    background-color: #ccc;
    line-height: 30px;

    span {
      margin: 0 5px;
    }
  }

  .content-info {
    word-wrap: break-word;
    font-size: 12px;
    padding: 0 20px;
    width: 90%;
  }
}
</style>
