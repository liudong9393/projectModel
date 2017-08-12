<!-- 谈心页面 -->
<template>
	<div id="myFriend">
		<div class="myFriendContent">
			<div class="myFriendTitle">
				<div class="chatTitle">
					<div class="back"><router-link to="/MyFriend">返回</router-link></div>
					<div class="friendName">用户名</div>
					<div class="detailsInfo">
					<router-link to="/DetailsInfo">详细</router-link>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {

		}
	},
	methods:{

	}
}
</script>

<style>
	.chatTitle{
		position: fixed;
		top: 0;
		display: flex;
		width: 100%;
		height: 2.5em;
		line-height: 2.5em;
		text-align: center;
	}
	.chatTitle .back{
		width: 20%;
	}
	.chatTitle .friendName{
		width: 60%;
	}
	.chatTitle .detailsInfo{
		width: 20%;
	}
</style>