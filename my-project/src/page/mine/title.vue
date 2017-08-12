<!--  -->
<template>
	<div id="title">
		<div class="titleContent">
			<div class="backToMine"><router-link to="/Mine">返回</router-link></div>
			<div class="nameOfTitle" v-text="titleMsg"></div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {

		}
	},
	props:["titleMsg"],
	methods:{

	}
}
</script>

<style>
	#title{
		width: 100%;
	}
	.titleContent{
		width: 100%;
		display: flex;
		text-align: center;
		line-height: 2.5em;
		height: 2.5em;
		background-color: #efefef;
	}
	.titleContent .backToMine{
		width: 20%;
	}
	.titleContent .nameOfTitle{
		width: 60%;
	}
</style>
