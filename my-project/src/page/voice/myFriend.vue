<!-- 谈心页面 -->
<template>
	<div id="myFriend">
		<div class="myFriendContent">
			<div class="myFriendTitle">
				<div class="chatTitle">
					<div class="back"><router-link to="/TalkHeart">返回</router-link></div>
					<div class="information">消息</div>
					<div class="detailsInfo">
						<router-link to=""></router-link>
					</div>
				</div>
			</div>
			<div class="myFriendMain">
				<ul class="myFriendUl">
					<li class="myFriendLi">
					<router-link to="/Chat">
						<div class="myFriendCon">
							<div class="head">
								<img src="" alt="图片未加载">
							</div>
							<div class="friendName">
								<p>朋友名</p>
								<p>信息</p>
							</div>
							<div class="lastTime">时间</div>
						</div>
					</router-link>
					</li>
				</ul>
			</div>
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
	.myFriendContent{
		width: 100%;
	}
	.chatTitle{
		position: fixed;
		top: 0;
		display: flex;
		width: 100%;
		height: 2.5em;
		line-height: 2.5em;
		text-align: center;
		background-color: #f1f1f1;
	}
	.chatTitle .back{
		width: 20%;
	}
	.chatTitle .information{
		width: 60%;
	}
	.chatTitle .detailsInfo{
		width: 20%;
	}
	.myFriendMain{
		width: 100%;
		padding-top: 2.5em;
	}
	.myFriendUl{
		width: 100%;
		height: auto;
	}
	.myFriendLi > a{
		width: 100%;
		display: block;
	}
	.myFriendLi > a >.myFriendCon{
		display: flex;
		width: 100%;
		height: 4.286em;
		margin-top: 0.357em;
		padding: 0.714em 0;
		font-size: 0.858em;
		background-color: #efefef;
	}
	.myFriendLi > a >.myFriendCon .head{
		width: 20%;
		line-height: 4.28em;
	}
	.myFriendLi > a >.myFriendCon .head > img{
		width: 90%;
		margin:5%;
		height: 100%;
	}
	.myFriendLi > a >.myFriendCon > .friendName{
		width: 60%;
		line-height: 2.143em;
		border-bottom: 0.072em solid #999;
	}
	.myFriendLi > a >.myFriendCon > .lastTime{
		width: 20%;
		line-height: 4.286em;
	}
</style>