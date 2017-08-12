<!-- 客户服务 -->
<template>
	<div id="customer">
		<div class="customerContent">
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
			title:"客户服务"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>