<!-- 商品展示页 -->
<template>
<div id="product">
	<div class = "product-img">
		<!-- 轮播图 -->
        <div class="loop">
            <div class="container swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img alt="图片未成功加载"
                        src="../../../static/pic/pic1.jpg"/>
                    </div>
                    <div class="swiper-slide">
                        <img alt="图片未成功加载" 
                        src="../../../static/pic/pic1.jpg"/>
                    </div>
                    <div class="swiper-slide">
                        <img alt="图片未成功加载" 
                        src="../../../static/pic/pic1.jpg"/>
                    </div>
                    <div class="swiper-slide">
                        <img alt="图片未成功加载" 
                        src="../../../static/pic/pic1.jpg"/>
                    </div>
                </div>
            </div>
        </div>
	</div>
		<div class="produce-info">
			<div>商品信息</div>
			<div>价格</div>
			<div>用途</div>
			<div>优惠</div>
			<div>商家地址</div>
			<div>评价情况</div>
		</div>
		<div>
			<div>评价（人数）</div>
			<div class="personEvaluation">
				<div>等级 <div>用户名</div></div>
				<p>个人评价内容</p>
				<div><img src="" alt=""></div>
				<div>日期</div>
			</div>
		</div>
</div>
</template>

<script>
import Swiper from "../../../static/plugins/swiper.min.js";

let gallery
export default {
	data () {
		return {
			Search:"",
		}
	},
	mounted() {
		this.lunbo()
   		window.addEventListener('scroll', this.menu)
  	},
	methods:{
		// 搜索框
		intoSearch:function(){
			console.log(this.Search);
		},
		// 实现轮播
		lunbo () {
	      gallery = new Swiper('.container', {
	       		loop: true,
	            autoplay: 1000,
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
	#product{
		position: absolute;
		z-index: 0.215em;
		margin-top:2.858em;
	}
/*轮播*/
	.loop{
		margin-top: 0.215em;
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