<!-- 会员中心 -->
<template>
	<div id="member">
		<div class="memberContent">
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
			title:"会员中心"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>