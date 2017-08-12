<!-- 商品页面导航栏 -->
<template>
	<div class="nav">
			<div class="product-nav">
				<div class="back">
				<router-link to="/Home">返回</router-link></div>
				<div class="nav">
					<div @touchstart="nav1">
					<router-link v-bind:class="{selected:isActive}"
					 to="/Product">商品</router-link>
					</div>
					<div @touchstart="nav2">
					<router-link v-bind:class="{selected:!isActive}"
					 to="/Detail">详情</router-link>
					</div>
				</div>
				<div class="menu">
					<div class="menuTitle" @touchstart="menu">菜单</div>
				</div>
				<carte class="menus" v-bind:class="{ menuCont:hidemenu }"></carte>
			</div>
	</div>
</template>

<script>
import carte from "./carte";
export default {
	data () {
		return {
			isActive:true,
			show:true
		}
	},
	mounted(){
		// this.$nextTick(function(){
		// 	this.menu();
		// })
	},
	props:[ "hidemenu" ],
	methods:{
		nav1:function(){
			this.isActive = true;
		},
		nav2:function () {
			this.isActive = false;
		},
		menu:function(){
			this.$emit("fromnav",!this.hidemenu);
		}
	},
	components:{ carte }
}

</script>

<style>
	/*回到上个页面*/
	.product-nav .back{
		width: 25%;
		text-align: left;
		padding-left: 5%;
	}
	.product-nav .nav{
		width: 50%;
		display: flex;
	}
	.product-nav .nav>div{
		flex-grow: 1;
		text-align: center;
	}
	.product-nav .nav>div>a{
		padding: 0.357em 0.215em;
	}
	.selected{
		border-bottom: 0.143em solid #666;
		font-weight: 800;
	}
	.product-nav .menu{
		width: 25%;
		text-align: right;
		padding-right: 5%;
	}
	.menus{
		position: absolute;
		width: 98%;
		margin-left: 1%;
		top: 2.858em;
	}
	.menuCont{
		display: none;
	}
</style>