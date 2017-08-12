<!-- 校园 -->
<template>
  <div id="campus">
     <div class="campus">
     <!-- 题目 -->
     	<div class="campusTitle">
     		<div class="narbar">
				<div class="bar">
					<div class="my">
						<router-link to="/my"><span>我的</span></router-link>
					</div>
					<div class="titleNa">
						<p class="tell talkActive">
							<router-link to="/Study"><span>学习</span></router-link>
						</p>
						<p class="talkHeart">
							<router-link to="/job"><span>兼职</span></router-link>
						</p>
						<p class="talkHeart">
							<router-link to="/Exam"><span>考试</span></router-link>
						</p>
					</div>
					<div class="Telling">
						<router-link to="/Telling"><span class="icon iconfont icon-bianji"></span></router-link>
					</div>
				</div>
			</div>
     	</div>
     	<div class="campusContent">
     		<router-view></router-view>
     	</div>
     </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
     
    }
}
</script>

<style scoped>
	#campus{
		width: 100%;
		padding:2.858px 0;
	}
	.campus{
		width: 100%;
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
	.talkActive > a{
		padding :0.143em 0.215em;
		border-bottom: 0.143em solid #999;
		font-weight: 800;
	}
	.campusContent{
		width: 94%;
		padding: 0 3%;
	}
</style>
