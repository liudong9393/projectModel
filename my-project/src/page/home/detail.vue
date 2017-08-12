<!-- 详情 -->
<template>
<div id="detail">
	<div class="detail">
		<div class="detailCon">
		<!-- 标题 -->
			<div class="title">
				<div class="titleName">
					<div @touchstart="title1">
					<router-link to="/Norm"
					v-bind:class="{ act:isActive }">商品规格</router-link>
					</div>
					<div @touchstart="title2">
					<router-link to="/Param" 
					v-bind:class="{ act:!isActive }">参数售后</router-link>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data(){
		return {
			isActive: true
		}
	},
	methods:{
		title1:function(){
			this.isActive = true;
		},
		title2:function (argument) {
			this.isActive = false;
		}
	}
}
</script>

<style>
	.detail{
		width: 100%;
		padding-top: 2.858em;
		/*height: 1000px;*/
	}
	.titleName{
		background-color: #fefefe;
		height: 2.5em;
		line-height: 2.5em;
		display: flex;
	}
	.titleName >div{
		flex-grow: 1;
		text-align: center;
	}
	.act{
		color: #c40000;
	}
</style>