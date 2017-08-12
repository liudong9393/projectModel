<!-- 优惠券 -->
<template>
	<div id="coupon">
		<div class="couponContent">
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
			title:"优惠券"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>