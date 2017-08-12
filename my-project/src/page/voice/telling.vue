<template>
	<div id="telling">
		<div class="telling">
			<div class="tellingTitle">
				<div class="cancelTell">
				<router-link to="/Voice">取消</router-link>
				</div>
				<div class="tellMyHeard">诉说心情</div>
				<div class="send">
					<input type="button" value="发送"/>
				</div>
			</div>
			<div class="textarea">
				<textarea id="enter" rows="12" 
				resize="noresize" placeholder="分享心情……(限字数300)"></textarea>
			</div>
			<div class="addTo" >
				<div class="picture">
					图片
				</div>
				<div class="feeling">
					表情
				</div>
				<div class="public">
					公开
				</div>
				<div class="remind">
					@
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	methods:{

	}
}
</script>

<style>
	#telling{
		width: 100%;
	}
	.telling{
		width: 100%;
	}
	.tellingTitle{
		position: fixed;
		top:0;
		display: flex;
		width: 100%;
		background-color: #f1f1f1;
		height: 2.5em;
		line-height: 2.5em;
	}
	.tellingTitle >div{
		text-align: center;
	}
	.tellingTitle .tellMyHeard{
		width: 60%;
	}
	.tellingTitle .cancelTell{
		width: 20%;
	}
	.tellingTitle .send{
		width: 20%;
		border-radius: 0.215em;
	}
	.tellingTitle .send > input {
		outline: none;
		padding: 0.357em 10%;
		border:none;
		background-color: #fefefe;
		color: #666;
	}
	.textarea{
		width: 100%;
		margin-top: 2.571em;
	}
	.textarea > textarea{
		width: 94%;
		border: none;
		padding: 2%;
		margin: 1%;
		outline: none;
		overflow: hidden;
		overflow-y: auto;
		height: 100%;
	}
	.addTo{
		display: flex;
		text-align: center;
		background-color: #efefef;
		height: 2.143em;
		width: 100%;
		position: fixed;
		bottom: 0;
		line-height: 2.143em;
	}
	.addTo > div{
		flex: 1;
	}
</style>