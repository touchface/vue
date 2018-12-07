import Vue from "vue"
import app from "./App.vue"
import { Header } from 'mint-ui';
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 注册header组件
Vue.component(Header.name, Header);
// 创建VUE实例
let vm=new Vue({
    el:"#app",
    render:h=>h(app)
});