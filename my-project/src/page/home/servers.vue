<!-- 顶部轮播图下部各个服务项目轮播 -->
<template>
	<div id="servers">
		<div class="servers">
			<div class="serversItem">
				<div class="serversLoop">
                    <div class="container-img swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                               <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
								   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
								   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
							   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
                            </div>
                            <div class="swiper-slide">
							   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
								   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
								   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
							   <div class="block">
                                   <span><img src="" alt="图标"></span>
                                   <p>充值</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from "../../../static/plugins/swiper.min.js";
let serverLoop
export default {
	data () {
		return {

		}
	},
	mounted() {
		this.loop();
  	},
	methods:{
		// 实现轮播
		loop () {
	      serverLoop = new Swiper('.container-img', {
	       		loop: true,
	            autoplay: 5000,
	            preventClicks: true,
	            uniqueNavElements: true,
	            touchRatio:0.8,
	            touchReleaseOnEdges:true,
       			autoplayDisableOnInteraction:false //点击轮播后也自动轮播
	      })
	    }
	}
}
</script>

<style>
@import "/static/plugins/swiper.min.css";
.servers{
	width: 100%;
	height: 5em;
	background-color: #fefefe;
}
.serversItem{
	width: 100%;
	margin: 0.357em 0;
	height: 100;
}
.serversLoop{
	width: 100%;
	padding: 0.357em 0;
}
.container-img{
	width: 100%;
}
.swiper-slide{
	display: flex;
}
.swiper-slide .block{
	font-size: 0.786em;
	height: 3.929em;
	text-align: center;
	width: 25%;
	padding-bottom: 0.357em;
}
.block > span > img{
	height: 2.143em;
	width: 2.143em;
}
</style>