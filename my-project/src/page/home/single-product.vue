<!-- 单个产品 -->
<template>
<div id="single-product">
	<div class="single-product">
		<div class="product-top">
			<navs v-bind:hidemenu="show" v-on:fromnav="listen"></navs>
		</div>
		<div @touchstart="procont">
			<router-view v-bind:class="{procont:!show}"></router-view>
		</div>
	</div>
	<tail></tail>
</div>
</template>

<script>
import navs from "./nav";
import tail from "./tail";
let gallery
export default {
	data () {
		return {
			show:true
		}
	},
	methods:{
		procont:function(){
			if(this.show == true){
				return;
			}
			this.show = !this.show;
		},
		listen:function (msg) {
			this.show = msg;
		}
	},
	components:{ navs,tail }
}
</script>

<style>
	.single-product{
		width: 100%;
	}
	.product-top{
		width: 100%;
	}
	.product-nav{
		width: 100%;
		display: flex;
		background-color: #f1f1f1;
		position: fixed;
		z-index: 2;
		height: 2.5em;
		line-height: 2.246em;
		top: 0;
	}
	/*回到上个页面*/

	.procont{
		padding-top: 4.286em;
		width: 100%;
		height: 100%;
	}
</style>

