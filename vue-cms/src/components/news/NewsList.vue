<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">
                            <span>发表时间:{{item.add_time|dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newsList: []
        };
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.axios("api/getnewslist")
                .then(response => {
                    let result=response.data;
                    console.log(result);
                    // 成功
                    if (result.status == 0) {
                        this.newsList = result.message;
                    } else {
                        // 失败
                        Toast("获取新闻数据失败！");
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
.mui-table-view-cell {
    .mui-ellipsis {
        font-size: 12px;
        color: cornflowerblue;
        display: flex;
        justify-content: space-between;
    }
}
</style>

