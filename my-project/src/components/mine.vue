<!-- 我的账户 -->
<template>
  <div id="mine">
     <div class="mine">
     	<div class="mineTop">
     		<div class="businessCard">
     			<div class="head">
	     			<span>
	     				<img src="" alt="头像">
	     			</span>
     			</div>
     			<div class="person">
     				<div class="name">
     					<span>名字</span>
     				</div>
					<div class="rank">
     					<span>会员等级</span>
     				</div>
     			</div>
     			<div class="account">
     				<router-link to="/Account"><span>账户管理</span></router-link>
     			</div>
     		</div>
     	</div>
     	<!-- 账户 -->
     	<div class="mineMain">
     		<div class="mineContent">
     			<!-- 购物车各项 -->
     			<div class="shoppingCart">
	     			<div class="shoppingName">
	     				<span class="icon iconfont icon-gouwuche"></span><span>购物车</span>
	     			</div>
     				<div class="shppingItem">
     					<div>
	     					<router-link to="/prePurchase">
	     					<div><img src="" alt="图片未加载"></div>
	     					<p>预购品</p></router-link>
     					</div>
						<div>
	     					<router-link to="/Buying">
	     					<div><img src="" alt="图片未加载"></div>
	     						<p>待付款</p>
	     					</router-link>
     					</div>
						<div>
	     					<router-link to="/AfterSale">
	     					<div><img src="" alt="图片未加载"></div>
	     						<p>售后</p>
	     					</router-link>
     					</div>
     				</div>
     			</div>
     			<!-- 关注 -->
     			<div class="wallet">
	     			<div>
	     				<span class="icon iconfont icon-qianbao"></span><span>我的钱包</span>
	     			</div>
     				<div class="walletItem">
     					<div>
							<router-link to="/Balance">
							<div><img src="" alt="图片未加载"></div>
	     					<p>账户余额</p>
	     					</router-link>
     					</div>
     					<div>
	     					<router-link to="/Coupon">
	     					<div><img src="" alt="图片未加载"></div>
	     					<p>优惠券</p>
	     					</router-link>
     					</div>
     					<div>
	     					<router-link to="/Gold">
	     					<div><img src="" alt="图片未加载"></div>
	     					<p>金币</p>
	     					</router-link>
     					</div>
     				</div>
     			</div>
     			<div class="attention">
     				<div class="">
     					<span class="icon iconfont icon-wodeguanzhu"></span><span>我的关注</span>
     				</div>
     				<div class="attentionItem">
     					<div>
	     					<router-link to="/FocusGoods">
	     					<div><img src="../assets/logo.png" alt="图片未加载"></div>
	     					<p>关注商品</p>
	     					</router-link>
     					</div>
     					<div>
							<router-link to="/FocusShops">
							<div><img src="../assets/logo.png" alt="图片未加载"></div>
	     					<p>关注店铺</p>
	     					</router-link>
     					</div>
     					<div>
	     					<router-link to="/BrowsHistory">
	     					<div><img src="../assets/logo.png" alt="图片未加载"></div>
	     					<p>浏览记录</p>
	     					</router-link>
     					</div>
     				</div>
     			</div>
     			<div class="personInfo">
     				<router-link to="/Person"><span class="icon iconfont icon-gerenxinxi"></span><span>个人信息</span></router-link>
     			</div>
     			<div class="member">
     				<router-link to="/Member"><span class="icon iconfont icon-huiyuanzhongxin"></span><span>会员中心</span></router-link>
     			</div>
     			<div class="server">
     				<router-link to="/Customer"><span class="icon iconfont icon-kehufuwu"></span><span>客户服务</span></router-link>
     			</div>
     			<div class="about">
     				<router-link to="/Aboutus"><span class="icon iconfont icon-guanyuwomen01"></span><span>关于我们</span></router-link>
     			</div>
				<div class="feedBack">
     				<router-link to="/Feedback"><span class="icon iconfont icon-dianping"></span><span>意见反馈</span></router-link>
     			</div>
     			<div class="setting">
     				<router-link to="/Setting"><span class="icon iconfont icon-shezhi"></span><span>设置</span></router-link>
     			</div>
     		</div>
     		<div class="quit" v-show="showQuit">
     		<router-link to="/Login"><input type="button" value="退出账户"/></router-link>
     		</div>
     	</div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showQuit:true
    }
  },
  mounted(){
  	this.$nextTick(function(){
  			this.submitForm () ;
		})
  },
  methods: {
	 submitForm () {
		 this.$ajax({
			  method: 'get',
			  url: "./../../static/json/city.json"
			}).then(response => {
					var localData = response.data["localData"];
				for(var b in localData){
					var province = localData[b]["province"];
					var city =  localData[b]["city"];
					// console.log(localData[b]["province"]);
					for(var d in city){
						var cityName = city[d]["cityName"];
						// console.log(cityName);
					}
				}
			})
		}
  	}
}
</script>

<style scoped>
	.icon{
		font-weight: 800;
		padding-right: 1em;
	}
	.mine{
		width: 100%;
		margin-top: 0.143em;
	}
	.mineTop{
		width: 100%;
		background-color: #c40000;
		color: #f1f1f1;
	}
	.mineTop .businessCard{
		padding-top: 0.714em;
		width: 100%;
		height: 7.14em;
		display: flex;
	}
	.mineTop .businessCard .head{
		width: 20%;
		padding: 0.714em 5% 0;
	}
	.mineTop .businessCard .head>span{
		border-radius: 50%;
		width: 3.929em;
		height: 3.929em;
		display: inline-block;
		text-align: center;
	}
	.businessCard .head>span>img{
		border-radius: 50%;
		width: 3.929em;
		height: 3.929em;
	}
	.businessCard .person{
		width: 45%;
		line-height: 45px;
	}

	.businessCard .account {
		width: 30%;
		font-size: 0.858em;
		line-height: 6.43em;
		text-align: center;
	}
	.businessCard .account > a{
		color: #fefefe;
	}
	.mineMain{
		width: 100%;
		padding:0.714em 0 3.572em;
	}
	.mineMain .mineContent{
		width: 96%;
		margin: 0 auto;
	}
	.mineMain .mineContent>div{
		padding-left: 4%;
		width: 96%;
		line-height: 2.858em;
		background-color: #fff;
		border-bottom: 0.071em solid #f1f1f1;
	}
	.mineMain .mineContent>div>a{
		display: block;
	}
	.quit{
		width: 100%;
		padding: 1.428em 0;
	}
	.quit>a>input{
		width: 80%;
		height: 2.143em;
		margin-left: 10%;
		text-align: center;
		outline: none;
		border:none;
	}

	.shppingItem,.walletItem,.attentionItem{
		display: flex;
		border-top: 1px solid #f1f1f1;
		width: 100%;
		height: 4.26em;
	}
	.shppingItem > div,
	.walletItem > div,
	.attentionItem > div{
		width: 33.3%;
	}
	.shppingItem > div > a,
	.walletItem > div > a,
	.attentionItem > div > a{
		display: block;
		width: 100%;
		text-align: center;
	}
	.shppingItem > div> a  > p,
	.walletItem> div> a  > p,
	.attentionItem > div> a  > p{
		width: 100%;
	}
	.shppingItem > div> a > div,
	.walletItem> div > a > div,
	.attentionItem > div > a > div{
		height:1.286em;
		width: 1.5em;
		margin: 0 auto;
	}
	.shppingItem > div > a > div  >img,
	.walletItem> div > a > div  >img,
	.attentionItem > div > a > div  >img{
		height:18px;
		width: 1.45em;
	}
</style>
