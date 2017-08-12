<!-- 关于我们 -->
<template>
	<div id="aboutus">
		<div class="aboutusContent">
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
			title:"关于我们"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>