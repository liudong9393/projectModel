<template>
	<div id="detailsInfo">
		<div class="detailsContent">
			<div class="myFriendTitle">
				<div class="chatTitle">
					<div class="back"><router-link to="/Chat">返回</router-link></div>
					<div class="friendName">详细信息</div>
				</div>
			</div>
			<div class="myFriendTop">
				<div class="myFriendInfo">
					<div class="imgHead">
					<img src="" alt="图片未加载">
					</div>
					<div class="allName">
						<p>备注名</p>
						<p>账号</p>
						<p>昵称</p>
					</div>

				</div> 
				<div class="settingEntry">
					<p><span>设置权限</span><span></span></p>
					<p><span>设置备注</span><span></span></p>
					<p><span>置顶聊天</span><span></span></p>
					<p><span>清除聊天记录</span><span></span></p>
					<p><span>加入黑名单</span><span></span></p>
					<p><span>投诉</span><span></span></p>
					<p><span>删除</span><span></span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{

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
	.myFriendTop{
		width: 100%;
		margin-top: 2.5em;
	}
	.myFriendInfo{
		display: flex;
		height: 6.43em;
		font-size: 0.858em;
	}
	.myFriendInfo .imgHead{
		width: 30%;
		padding: 0.357em 3%;
	}
	.myFriendInfo .imgHead > img{
		width: 100%;
		height: 100%;
	}
	.allName{
		line-height: 2.143em;
		width: 60%;
	}
	.settingEntry{
		width: 94%;
		margin-top: 2.143em;
		padding: 2%;
	}
	.settingEntry > p{
		width: 96%;
		padding-left: 4%;
		height: 2.5em;
		line-height: 2.5em;
		margin-top: 0.143em;
		border-bottom:0.072em solid #f3f3f3;
	}
</style>