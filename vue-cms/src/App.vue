<template>
	<div class="app-container">
		<!--header-->
		<mt-header fixed title="塔奇の小时光"></mt-header>
		<!--router-view -->
		
		<transition>
			<router-view></router-view>
		</transition>

		<!--tool bar-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-sj" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-sj" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-sj" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-sj" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
</script>
<style lang="scss" scoped>
.app-container {
    padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
// 解决使用MUIBUG 复制相同样式改名
.mui-bar-tab .mui-tab-item-sj.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-sj {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-sj .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-sj .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header{
	z-index: 99;
}
</style>
