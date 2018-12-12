<template>
    <div>
        <div class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="item in categories" :key="item.id" @click="setCateId(item.id)" :class="['mui-control-item',item.id==0?'mui-active':'']">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <router-link v-for="(item,index) in images" :key="item.key" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="img[index%img.length]">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body" v-html="item.zhaiyao"></div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
// 导入mui控件
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
    created() {
        this.getAllCategory();
        this.getImagesByCategory();
    },
    mounted() {
        // 组件dom渲染完成后
        // 从初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    data() {
        return {
            categories: [], // 图片分类
            images: [], // 图片信息
            cateid: 0, // 分类ID
            img: [
                "http://img0.imgtn.bdimg.com/it/u=1190689976,1749453940&fm=26&gp=0.jpg",
                "http://pic1.win4000.com/pic/4/81/dc2a1537765.jpg_195.jpg",
                "http://img4.imgtn.bdimg.com/it/u=594153025,5384571&fm=26&gp=0.jpg",
                "http://img4.imgtn.bdimg.com/it/u=877359141,516821881&fm=26&gp=0.jpg"
            ] // 由于使用的api图片路径失效，这里用几个网上的图片做测试
        };
    },
    methods: {
        getAllCategory() {
            this.axios
                .get("api/getimgcategory")
                .then(response => {
                    let result = response.data;
                    if (result.status == 0) {
                        result.message.unshift({ title: "全部", id: 0 });
                        this.categories = result.message;
                    } else {
                        Toast("获取图片分类失败！");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getImagesByCategory() {
            this.axios
                .get("api/getimages/" + this.cateid)
                .then(response => {
                    let result = response.data;
                    if (result.status == 0) {
                        this.images = result.message;
                    } else {
                        Toast("获取图片信息失败！");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setCateId(id) {
            this.cateid = id;
            this.getImagesByCategory();
            console.log(this.categories);
        }
    }
};
</script>
<style lang="scss">
* {
    touch-action: pan-y;
}
.photo-list {
    list-style: none;
    margin: 0;
    padding: 1rem 1rem;
    li {
        position: relative;
        background-color: darkgrey;
        padding: 0;
        margin: 10px 0;
        image[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        img {
            border: 0;
            display: block;
            width: 100%;
        }
    }
}
.info {
    color: #ffffff;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 5px 5px;
    max-height: 100px;
    .info-title {
        font-size: 14px;
    }
    .info-body {
        font-size: 13px;
    }
}
</style>
