<template>
    <div>
        <div class="photoinfo-container">
            <h3>{{photoInfo.title}}</h3>
            <p class="sub-title">
                <span>发表时间:{{photoInfo.add_time|dateFormat}}</span>
                <span>点击{{photoInfo.click}}次</span>
            </p>
            <hr/>
            <!--图片缩略图区域-->
            <img class="preview-img" v-for="(item,index) in list" :key="index" :src="item.src" 
            height="100px" @click="$preview.open(index,list)">
            <!--图片内容-->
            <div class="content" v-html="photoInfo.content">
            </div>
        </div>
        <!--评论区域-->
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import Comment from "../subcomponents/Comment.vue";
export default {
    components: {
        // 注册评论组件
        "comment-box": Comment
    },
    created() {
        this.getPhotoInfo();
    },
    mounted() {},
    data() {
        return {
            id: this.$route.params.id,
            photoInfo: [],
            list: [
                {src:"http://img0.imgtn.bdimg.com/it/u=1190689976,1749453940&fm=26&gp=0.jpg",
                w:400,h:300},
                {src:"http://pic1.win4000.com/pic/4/81/dc2a1537765.jpg_195.jpg",
                w:400,h:300},
                {src:"http://img4.imgtn.bdimg.com/it/u=594153025,5384571&fm=26&gp=0.jpg",
                w:400,h:300},
                {src:"http://img4.imgtn.bdimg.com/it/u=877359141,516821881&fm=26&gp=0.jpg"
                ,w:400,h:300}
            ] // 由于使用的api图片路径失效，这里用几个网上的图片做测试
        };
    },
    methods: {
        getPhotoInfo() {
            this.axios("api/getimageInfo/" + this.id)
                .then(response => {
                    let result = response.data;
                    if (result.status == 0) {
                        this.photoInfo = result.message[0];
                    } else {
                        Toast("获取新闻详情失败！");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="scss">
.photoinfo-container {
    padding: 3px;
    h3 {
        color: #26afff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .sub-title {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content {
        font-size: 13px;
        line-height: 30px;
    }
}
</style>
