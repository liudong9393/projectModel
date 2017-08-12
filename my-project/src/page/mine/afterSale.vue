<!-- 售后服务 -->
<template>
	<div id="afterSale">
		<div class="afterSaleContent">
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
			title:"售后服务"
		}
	},
	methods:{

	},
	components:{titles}
}
</script>

<style>
	
</style>