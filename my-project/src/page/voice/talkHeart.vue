<!-- 谈心页面 -->
<template>
	<div id="talkHeart">
		<div class="talkHeartCon">
			<div class="talkItem">
				<p class="newFriend">
					<router-link to="/NewFriend">
						<span></span>新朋友
					</router-link>
				</p>
			</div>
			<div class="talkItem">
				<p class="stranger">
					<router-link to="/Stranger">
						<span></span>陌生人
					</router-link>
				</p>
			</div>
			<div class="talkItem">
				<p class="myFriend">
					<router-link to="/MyFriend">
						<span></span>我的朋友
					</router-link>
				</p>
			</div>
			<div class="talkItem">
				<p class="group">
					<router-link to="/Group">
						<span></span>群聊
					</router-link>
				</p>
			</div>
			<div class="talkItem">
				<p class="blacklist">
					<router-link to="/Blacklist">
						<span></span>黑名单
					</router-link>
				</p>
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
	.talkHeartCon{
		width: 100%;
	}
	.talkHeartCon > .talkItem{
		width: 100%;
		padding: 0 0.714em;
		margin-bottom: 0.143em;
		height: 3.215em;
		line-height: 3.215em;
		background-color: #f4f4f4;
		color: #666;
	}
	.talkHeartCon .talkItem > p > a{
		display: block;
	}
</style>