<!-- 意见反馈 -->
<template>
	<div id="feedback">
		<div class="feedbackContent">
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
			title:"意见反馈"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>