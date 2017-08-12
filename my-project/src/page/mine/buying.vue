<!-- 待付款 -->
<template>
	<div id="buying">
		<div class="buyingContent">
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
			title:"待付款"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>