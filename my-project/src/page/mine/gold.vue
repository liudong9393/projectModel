<!-- 金币管理 -->
<template>
	<div id="gold">
		<div class="goldContent">
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
			title:"金币管理"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>