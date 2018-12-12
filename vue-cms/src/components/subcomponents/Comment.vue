<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea v-model="message" maxlength="120" placeholder="请输入评论内容"></textarea>
        <mt-button @click="postComment" type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content==='undefined'?'该用户很懒,啥都没说。':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="loadMoreComment">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast}  from "mint-ui"
export default{
    data(){
        return {
            pageindex:1,
            comments:[],
            message:""// 评论内容
        }
    },
    created(){
        this.getComments();
    },
    methods: {
        postComment(){
            // 验证评论是否为空，不为空则发送
            if(this.message==undefined||this.message.trim().length==0){
                Toast("评论不能为空！");
                return;
            }
            // 发表评论
            this.axios.post("api/postcomment/"+this.id,{
                content:this.message.trim()
            }).then((response)=>{
                let result=response.data;
                if(result.status==0){
                    // 追加评论到当前文章下
                    let cmt={
                        user_name:'匿名用户',
                        add_date:Date.now(),
                        content:this.message
                    };
                    this.comments.unshift(cmt);
                    this.message="";
                }else{
                    Toast("评论失败！");
                }
            }).catch((err)=>{
                console.log(err);
            });
            // 成功则将评论内容追加到评论列表头部
        },
        getComments(){
           
            this.axios("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then((response)=>{
                let result=response.data;
                if(result.status==0){
                    // 拼接老数据与新数据
                    let arr=result.message;
                    if(arr.length>0){
                        this.comments=this.comments.concat(result.message);
                    }else{
                        Toast("没有更多数据了...");
                    }

                }else{
                    Toast("获取评论失败！");
                }

            }).catch((err)=>{
                console.log(err);
            });
        },
        loadMoreComment(){
            this.pageindex+=1;
            this.getComments();
        }
    },
    props:["id"]
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            padding:0.5rem 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #cccccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>

