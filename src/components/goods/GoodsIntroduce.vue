<template>
    <div class="mainBox2">
        <div class="main" v-for="(item, index) in list" :key="index">
            <h4>{{item.title}}</h4>
            <hr>
            <div v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            list:[]
        }
    },
    created() {
        this.getGoodsIntroduce()
       
        
    },
    methods: {
        async getGoodsIntroduce(){
            const data =await this.$http.get(`/api/goods/getdesc/${this.id}`)
            if(data.status!=200)return this.$Toast.fail("获取失败")
            this.list=data.data.message
            console.log(this.list);


            
        }
    },
}
</script>
<style lang="less" scoped>
    .mainBox2{
        overflow: hidden;
         margin-top: 40px;
         margin-bottom: 50px;
        //  background-color: pink;
    }
    .main{
        h4{
            text-align: center;
            color: skyblue;
        }
    }
</style>