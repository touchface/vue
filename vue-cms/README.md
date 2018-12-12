# 这是一个NB的项目

## 牛不牛逼， 用心去感受，每一行代码中的诗情雅意

### 我们是有灵魂程序员，所以，我们的代码富有诗意；

#### 丫的，实在编不下去了,哈哈哈

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 实现新闻列表

1. 绘制界面
2. 使用axios获取数据
3. 渲染数据

## 实现新闻列表 点击跳转 新闻详情

1. 改造路由为router-link标签
2. 创建新闻详情组件NewsInfo.vue组件
3. 在路由中将新闻详情和页面对应起来

## 实现新闻详情数据渲染

## 实现评论布局

## 渲染评论数据
获取数据，渲染到页面当中

## 评论
1. 评论框与数据进行双向绑定
2. 为发表按钮绑定事件
3. 验证评论内容是否为空，不为空才能发送
4. 通过axios发表评论请求
5. 刷新评论，将发送的评论追加到comments头部

## 改造图片链接为路由链接

## 制作顶部滑动条
由于使用了MUI中的Js文件，而项目处于严格模式，在调用mui.js文件时，会发生一些异常，所以我们需要关闭babel的严格模式
使用`cnpm install babel-plugin-transform-remove-strict-mode` 插件,在.babel文件中设置以下配置
~~~
  "plugins": ["transform-runtime", ["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]],"transform-remove-strict-mode"]
~~~

## 制作图片列表
