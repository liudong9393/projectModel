<!-- 设置 -->
<template>
	<div id="setting">
		<div class="settingContent">
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
			title:"设置"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>