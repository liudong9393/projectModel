<!-- 诉说主页面 -->
<template>
	<div id="tell">
		<div class="tellCon">
			<div class="itemTell" >
			<!-- v-for="item in items" -->
				<itemtell></itemtell>
			</div>
		</div>
	</div>
</template>

<script>
import itemtell from "./itemtell";
export default{
	data(){
		return {

		}
	},
	methods:{

	},
	components:{itemtell}
}
</script>

<style>
	#tell{
		width: 100%;
	}
	.tellCon{
		width: 96%;
		padding-left:2%;
	}
	.itemTell{
		width: 100%;
		/*padding-left: 2%;*/
	}
</style>