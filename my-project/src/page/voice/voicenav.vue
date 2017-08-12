 <template>
	<div id="voicenav">
		<div class="voicenav">
			<div class="narbar">
				<div class="bar">
					<div class="my">
						<router-link to="/"><span>发现</span></router-link>
					</div>
					<div class="titleNa">
						<p class="tell talkActive">
							<router-link to="/Tell"><span>诉说</span></router-link>
						</p>
						<p class="talkHeart">
							<router-link to="/Talkheart"><span>谈心</span></router-link>
						</p>
					</div>
					<div class="Telling">
						<router-link to="/Telling"><span class="icon iconfont icon-bianji"></span></router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="contentVoice">
			<router-view></router-view>
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
	#voicenav{
		width: 100%;
		padding:2.858em 0;
	}
	.contentVoice{
		width: 100%;
	}
	.voicenav{
		position: fixed;
		top:0;
		width: 100%;
		height: 2.5em;
	}
	.narbar{
		width: 100%;
		height: 2.5em;
		line-height: 2.5em;
		background-color: #e3e3e3;
	}
	.bar,.titleNa{
		display: flex;
		text-align: center;
	}
	.bar .my{
		width: 30%;
	}
	.titleNa{
		width: 40%;
	}
	.titleNa > p{
		width: 50%;
	}
	.Telling{
		width: 30%;
	}
	.talkActive>a{
		padding :0.143em 0.215em;
		border-bottom: 0.143em solid #999;
		font-weight: 800;
	}
</style>