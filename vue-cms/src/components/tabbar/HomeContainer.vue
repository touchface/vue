<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in rotationChartList" :key="index">
                <a :href="item.href">
                    <img :src="item.img" :alt="item.img" />
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data() {
        return {
            rotationChartList: []
        };
    },
    created() {
        this.getRotationChart();
    },
    methods: {
        /**
         * 获取轮播图信息
         */
        getRotationChart() {
            this.axios
                .get("api/getlunbo")
                .then(response => {
                    let result = response.data;
                   
                    // 成功
                    if (result.status == 0) {
                        this.rotationChartList = result.message;
                    } else {
                        // 失败
                        Toast("获取轮播图数据失败！");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: aqua;
        }
        &:nth-child(2) {
            background-color: blueviolet;
        }
        &:nth-child(3) {
            background-color: cadetblue;
        }
        a {
            display: block;
            height: 100%;
            width: 100%;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}

.mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
</style>

