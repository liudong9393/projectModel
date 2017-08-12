<!-- 账户余额 -->
<template>
	<div id="balance">
		<div class="balanceContent">
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
			title:"账户余额"
		}
	},
	methods:{

	},
	components:{titles}
}
</script>

<style>
	
</style>