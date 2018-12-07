import Vue from "vue"
import app from "./App.vue"
import { Header,Swipe, SwipeItem } from 'mint-ui'
import axios from 'axios'
// 1.1 导入路由模块
import VueRouter from "vue-router"
// 1.2 注册路由
Vue.use(VueRouter)
// 1.3 导入路由对象
import router from "./route/router"
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 注册header组件
Vue.component(Header.name, Header);
// 轮播图注册
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 2.1 导入axios

// 将axios注入到Vue当中
Vue.prototype.axios=axios;

// 创建VUE实例
let vm=new Vue({
    el:"#app",
    router,// 挂载路由对象
    render:h=>h(app)
});