// 1.导入路由模块
import VueRouter from 'vue-router'
// 2.导入路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemeberContainer from '../components/tabbar/MemberContainer.vue'
import ShopCarContainer from '../components/tabbar/ShopCarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from '../components/photos/PhotoList.vue'
import PhotoInfo from '../components/photos/PhotoInfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  //mode:'history', // 配置路由链接为history模式
  routes: [ // 配置路由规则
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:"/home/newslist",component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/memeber',component:MemeberContainer},
    {path:'/shopcar',component:ShopCarContainer},
    {path:'/search',component:SearchContainer}
  ],
  linkActiveClass:"mui-active"// 替换路由高亮类
})

// 把路由对象暴露出去
export default router