<template>
    <div class="app-container">

        <!--顶部Header区域-->
        <mt-header fixed title="Love"></mt-header>

        <!--中间的路由 router-view 区域-->
		<transition>
			<router-view></router-view>
		</transition>

        <!--底部Tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link> 
			<router-link class="mui-tab-item" to="/image">
				<span class="mui-icon mui-icon-image"></span>
				<span class="mui-tab-label">相册</span>
			</router-link>
			<router-link class="mui-tab-item" to="/task">
				<span class="mui-icon mui-icon-paperplane"></span>
				<span class="mui-badge">0</span>
				<span class="mui-tab-label">任务</span>
			</router-link>
			<router-link class="mui-tab-item" to="/manage">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">管理</span>
			</router-link>
		</nav>
        
        
    </div>
</template>

<style lang="css" scoped>
    .app-container{
        padding-top: 40px;
		overflow-x: hidden;
		
		padding-bottom: 50px;
    }
	.v-enter,
	.v-leave-to{
		opacity: 0;
		transform: translateX(100%);
		
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
		transform: translateX(-100%);
		position: absolute;
	}
</style>