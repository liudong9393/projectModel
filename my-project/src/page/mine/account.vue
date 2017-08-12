<!-- 账户管理 -->
<template>
	<div id="account">
		<div class="accountContent">
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
			title:"账户管理"
		}
	},
	methods:{
		
	},
	components:{titles}
}
</script>

<style>
	
</style>