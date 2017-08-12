<!-- 浏览历史 -->
<template>
	<div id="browsHistory">
		<div class="browsHistoryContent">
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
			title:"浏览历史"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>