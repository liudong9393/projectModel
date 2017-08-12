<!-- 预购品 -->
<template>
	<div id="prePur">
		<div class="prePurContent">
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
			title:"预购品"
		}
	},
	methods:{

	},
	components:{titles}
}
</script>

<style>
	
</style>