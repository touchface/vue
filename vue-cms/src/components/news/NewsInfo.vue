<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="sub-title">
            <span>发表时间:{{newsinfo.add_time|dateFormat}}</span>
            <span>点击{{newsinfo.click}}次</span>
        </p>
        <hr/>
        <div class="content" v-html="newsinfo.content">
           
        </div>
        <!--导入评论组件-->
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
// 导入自定义评论组件
import Comment from '../subcomponents/Comment.vue'

export default {
    components:{
        // 注册评论组件
        "comment-box":Comment
    },
    data() {
        return {
           id:this.$route.params.id,// 获取路由中的文章ID,方便调用
           newsinfo:{}// 新闻详情
        };
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.axios("api/getnew/"+this.id).then((response)=>{
                let result=response.data;
                if(result.status==0){
                    this.newsinfo=result.message[0];
                }else{
                    Toast("获取新闻详情失败！");
                }

            }).catch((err)=>{
                console.log(err);
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }
    .sub-title{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>

