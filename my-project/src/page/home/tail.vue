<!-- 单个商品页面固定在下部的部分 -->
<template>
	<div id="tail">
		<div class="tail">
			<div class="contentBottom">
				<div class="">
				 	<span></span>
					<span>卖家</span>
				</div>
				<div class="">
				 	<span></span>
					<span>购物</span>
				</div>
				<div class="">
				 	<span></span>
					<span>购物车</span>
				</div>
				<div class="buy cart">
					<span>加入购物车</span>
				</div>
				<div class="buy atOnce">
					<span>立即购买</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	#tail{
		width: 100%;
		height: 3.572em;
		position: fixed;
		bottom: 0;
		background-color: #f1f1f1;
	}
	.tail{
		width: 100%;
	}
	.contentBottom{
		display: flex;
	}
	.contentBottom > div{
		width: 15%;
		line-height: 5.716;
		font-size: 0.858em;
	}
	.contentBottom .buy{
		width: 27.5%;
		line-height: 3.929em;
		color: #f1f1f1;
		font-size: 1em;
	}
	.cart{
		background-color: #ffb03f;
	}
	.atOnce{
		background-color: #c40000;
	}
	.contentBottom > div >span{
		display: block;
		text-align: center;
	}
</style>