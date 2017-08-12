<!-- 诉说的内容 -->
<template>
	<div id="itemtell">
		<div class="itemtell">
			<div class="itemContent">
			<!-- 第一行用户名 -->
				<div class="itemTitle">
					<div class="headImg">
						<img src="" alt="图片未加载">
					</div>
					<div class="userName">
						<p class="name">123456</p>
						<p class="time">诉说时间</p>
					</div>
					<div class="more">更多</div>
				</div>
				<div class="itemMain">
					<div class="itemText">
						<p v-html="Url"></p>
						<div class="media">
							<div class="mediaImg">
								<img src="" alt="图片未加载">
							</div>
							<div class="mediaImg">
								<img src="" alt="图片未加载">
							</div>
						</div>
					</div>
					<div class="forwarded">
						转发
					</div>
				</div>
				<div class="itemBottom">
					<div class="forwarding">转发</div>
					<div class="comment">评论</div>
					<div class="praise">点赞</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			Url:"fds防守打法fwww.liudong.comdsfdsf"
		}
	},
	mounted(){
		this.url();
	},
	methods:{
		url(){
        var httpUrl = /^[\w\W]*([w]{3}[\.]?[\w]{1,}[\.]{1}(com|org|cn|edg|gov|net|tv){1})[\w\W]*$/img;
			var rgExp = httpUrl.exec(this.Url);
			// console.log(rgExp[1]);
			this.Url = "<span class='vioceLink'>"+rgExp[1]+"</span>";
		}
	}
}
</script>

<style>
	#itemtell{
		width: 100%;
		background-color: #fff;
	}
	.itemtell{
		width: 94%;
		padding :0.357em 3%;
	}
	.itemTitle,.itemBottom{
		display: flex;
		/*background-color: #fafafa;*/
	}
	.itemTitle .userName{
		width: 65%;
		font-size: 0.929em;
		line-height: 1.643em;
	}
	.itemTitle .headImg{
		width: 15%;
	}
	.itemTitle .more{
		width: 20%;
		text-align: right;
	}
	.itemMain{
		padding: 0.357em 3%;
		border-radius: 0.572em;
		font-size: 0.929em;
		line-height: 1.428em;
	}
	.itemText{
		
	}
	.media{
		display: flex;
		width: 100%;
	}
	.mediaImg{
		width: 33.3%;
	}
	.mediaImg>img{
		width: 90%;
		padding-left: 5%;
		height: 6.43em;
	}
	.forwarded{
		background-color: #f1f1f1;
		padding: 5px 3%;
		border-radius: 0.572em;
		font-size: 0.929em;
		line-height: 1.428em;
	}
	.itemBottom>div{
		text-align: center;
		width: 33.33%;
	}
	.headImg>img{
		width: 2.5em;
		height: 2.5em;
		margin-top: 0.357em;

	}
	.name{
		color: rgb(255, 0, 0);
		font-size: 0.929em;
	}
	.time{
		font-size: 0.4rem;
	}
	.vioceLink{
		color:#c40000;
	}
</style>