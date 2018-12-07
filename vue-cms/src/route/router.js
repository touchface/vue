// 1.导入路由模块
import VueRouter from 'vue-router'
// 2.导入路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemeberContainer from '../components/tabbar/MemberContainer.vue'
import ShopCarContainer from '../components/tabbar/ShopCarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  mode:'history', // 配置路由链接为history模式
  routes: [ // 配置路由规则
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},,
    {path:'/memeber',component:MemeberContainer},
    {path:'/shopcar',component:ShopCarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass:"mui-active"// 替换路由高亮类
})

// 把路由对象暴露出去
export default router