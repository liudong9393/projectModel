<!-- 关注商品 -->
<template>
	<div id="focusShops">
		<div class="focusShopsContent">
			<div class="title">
				<titles v-bind:title-msg="title"></titles>
			</div>
		</div>
	</div>
</template>

<script>
import titles from "./title";
export default{
	data(){
		return {
			title:"关注商家"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>