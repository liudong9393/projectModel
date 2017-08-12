<!-- 顶部菜单 -->
<template>
	<div id="carte">
		<div class="menuCon">
			<div class="menuUl">
				<div class="menuLi">
					<router-link to="/Home">首页</router-link>
				</div>
				<div class="menuLi">
					<router-link to="/Home">购物车</router-link>
				</div>
				<div class="menuLi">
					<router-link to="/Home">我的京东</router-link>
				</div>
				<div class="menuLi">
					<router-link to="/Home">分页查询</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {

		}
	},
	methods:{

	}
}
</script>

<style>
	.menuCon{
		background-color: #666;
		opacity: 0.5;
		filter: alpha(opacity=0.5);
		width: 100% ;
	}
	.menuUl{
		border-radius: 0.572em;
		width: 90%;
		margin-left: 8%;
		display: flex;
		height: 3.929em;
	}
	.menuUl .menuLi{
		width: 25%;
	}
	.menuUl .menuLi>a{
		color: #f1f1f1;
		line-height: 6.43em;
	}

</style>