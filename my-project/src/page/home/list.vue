<!-- 主页面商品商家列表，单元模板创建 -->
<template>
	<div id="list">
		<div class="list">
			<div class="list-con clearFix">
				<!-- 单个品 -->
				<div class="list-part" v-for="(list,index) in lists">
					<router-link class="single" @touchstart = "single"
					v-bind:to="list.indexName">
						<!-- <router-link v-bind:to="/ss"> -->
						<!-- 商品图片 -->
						<div class="image">
							<img v-bind:src="list.image"
							 alt="图片未加载">
						</div>
						<!-- 商品信息 -->
						<div class="info">
							<p class="name" v-text="list.name"></p>
							<p class="price">{{list.price | money}}</p>
							<p class="ratio">{{list.ratio | ratio}}</p>
						</div>
						<div class="similar clearFix">
							<input type="button" value="找相似">
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists:[
			{name:"【京东超市】安儿乐（Anerle）棉柔干爽 超能吸 婴儿纸尿裤 新生儿NB37片关注 分享 举报",indexName:"/SingleProduct",image:"../../../static/pic/pic1.jpg",price:"123",ratio:"90"
			},
			{name:"【京东超市】安儿乐（Anerle）棉柔干爽 超能吸 婴儿纸尿裤 新生儿NB37片关注 分享 举报",indexName:"/List",image:"../../../static/pic/pic1.jpg",price:"123",
			ratio:"90"
			},
				]
			}
		},
		methods:{
		      single:function () {
		      	this.emit("touchstart")
		        // this.isshow = false;
		      }
		},
		filters:{
			money:function(val){
				return "￥" + val;
			} ,
			ratio:function (value) {
				return "好评率 " + value +"%";
			}
		}
	}
</script>

<style >
	.list{
		width: 100%;
	}
	.list-con{
		width: 98%;
		padding: 1%;
		margin-top: 0.215em;
	}
	.list-con .list-part{
		width: 50%;
		margin-top: 0.215em;
		float: left;
	}
	.list-con .list-part .single{
		width: 98%;
		background-color: #fff;
		margin:1%;
		display: block;
		border: 0.071em dashed #999;
	}
	.list-con .list-part .single .image{
		width: 100%;
		height:7.14em;
	}
	.list-con .list-part .single .image>img{
		width: 100%;
		height:7.14em;
	}
	.list-con .list-part .single .info{
		
	}
	.list-con .list-part .single .info>p{
		padding: 0.143em 0.215em;
	}
	.list-con .list-part .single .info .name{
		text-align: center;
		font-size: 0.858em;
	}

	.list-con .list-part .single .info .price{
		text-align: left;
		color: #c40000;
		font-size: 0.929em;
	}
	.list-con .list-part .single .info .ratio{
		text-align: left;
		color: #888;
		font-size: 0.858em;
	}
	.list-con .list-part .single .similar{
		/*text-align: right;*/
		width: 100%;
		padding: 0.143em 0;
		 
	}
	.list-con .list-part .single .similar>input{
		float: right;
		font-size: 0.786em;
		margin:0.071em 0.286em;
		padding:0.143em;
		border-radius: 0.143em;
		outline: none;
	}
</style>