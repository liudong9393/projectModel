<!-- 首页 Home：搜索、轮播、商品商家列表 -->
<template>
	<div id="home">
		<div class="container">
		<!-- 内容 -->
			<div class="content">
			<!-- 顶部收缩框 -->
				<div class="top">
					<div class="local">
						<router-link to="/Local" >
						<span v-text="local" v-bind:local="s"
						 v-on:listenToLocal="fromChild"></span>
						</router-link>
					</div>
					<div class="search">
						<router-link to="/Search" class="Search">
						请输入商品、商家、服务</router-link>
						<span>登录</span>
					</div>
				</div>
				<!-- Home页面主要内容:轮播、商品商家列表 -->
				<div class="main">
					<div class="main-con">
						<!-- 轮播 -->
						<div class="main-top">
							<!-- 轮播图 -->
	                        <div class="loop">
	                            <div class="img-container swiper-container">
	                                <div class="swiper-wrapper">
	                                    <div class="swiper-slide">
	                                        <img alt="图片未成功加载" 
	                                        src="../../static/pic/pic1.jpg"/>
	                                    </div>
	                                    <div class="swiper-slide">
	                                        <img alt="图片未成功加载" 
	                                        src="../../static/pic/pic1.jpg"/>
	                                    </div>
	                                    <div class="swiper-slide">
	                                        <img alt="图片未成功加载" 
	                                        src="../../static/pic/pic1.jpg"/>
	                                    </div>
	                                    <div class="swiper-slide">
	                                        <img alt="图片未成功加载" 
	                                        src="../../static/pic/pic1.jpg"/>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
						</div>
						<div class="partAll">
							<!-- 页面提供的主要服务 -->
							<div class="partItem">
								<servers></servers>
							</div>
							<!-- 商家商品列表 -->
							<div class="partItem">
								<list></list>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from "../../static/plugins/swiper.min.js";
import list from "../page/home/list";
import servers from "../page/home/servers";
let gallery
export default {
	data () {
		return {
			s:"",
			local:"位置"
		}
	},
	mounted() {
		this.lunbo()
   		window.addEventListener('scroll', this.menu)
  	},
	methods:{
		fromChild(data){
			this.local = data;
			console.log(data);
		},
		scroll:function(){
			this.scroll = document.body.scrollTop;
		},
		// 实现轮播
		lunbo () {
	      gallery = new Swiper('.img-container', {
	       		loop: true,
	            autoplay: 1000,
	            preventClicks: true,
	            uniqueNavElements: true,
	            touchRatio:0.8,
	            touchReleaseOnEdges:true,
       			autoplayDisableOnInteraction:false //点击轮播后也自动轮播
	      })
	    }
	},
	components: { list,servers }
}
</script>
<!-- 样式 -->
<style>
@import "/static/plugins/swiper.min.css";
	#home{
		width: 100%;
		padding:  0 1% 3.57em;
	}
	#home .container{
		width: 100%;
	}
	.content{
		width: 100%;

	}
	.top{
		width: 100%;
		position: fixed;
		z-index: 2;
		top: 0;
		display: flex;
		background-color: #C40000;
	}
	.local{
		width: 15%;
		line-height: 3em;
	}
	.local >a{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #f1f1f1;
	}
	.search{
		width: 85%;
		height:2.5em ;
		padding: 0.714em 0;
		font-size: 0.714em;
	}

	.search .Search{
		box-sizing: border-box;
		/*margin-left: 5%;*/
		width: 75%;
		height: 1.786em;
		padding:0.143em 1.072em;
		border-radius: 1.072em;
		color:#888;
		display: inline-block;
		background-color: #fefefe;
		border: 0.071em solid #999;
	}
	.search>span{
		width: 18%;
		text-align: center;
		display: inline-block;
		color: #f1f1f1;
	}
	.main{
		margin-top: 3.57em;
		width: 99%;
		padding:0 0.5%;
	}
	.main-top{
		width: 100%;
		height: 21.43em;
	}
	.loop{
		width: 100%;
		height: 21.43em;
	}
	.swiper-slide{
		border-radius: 0.357em;
	}
	.swiper-slide>img{
		border-radius: 0.357em;
		width: 100%;
		height: 21.43em;
	}
</style>




