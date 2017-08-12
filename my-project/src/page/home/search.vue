<!-- 搜索框页面 -->
<template>
	<div id="inquire">
		<div class="inquire">
			<div class="frame">
			<!-- 顶部搜索框 -->
				<div class=" searchFrame">
					<div class="searchText">
						<div class="back">
						<router-link to="/Home">返回</router-link>
						</div>
						<div class="input">
							<div class="searchInput">
								<input type="text" placeholder="请输入商品、商家、服务" 
								 v-model="searchName" @keyup="search"/>
								<span>搜索</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 搜索结果 -->
				<div class="structure">
					<div class="structContent" v-show="isCome">
						<div class="popular">
							<div class="popularTitle">热门搜索</div>
							<div class="popularSearches">
								<span>打印机色带</span>
								<span>打印机色带</span>
								<span>打印机色带</span>
								<span>打印机色带</span>
								<span>打印机色带</span>
								<span>打印机色带</span>
							</div>
						</div>
						<div class="searchContent" v-show="!isCome">
							<div class="searchStructure">
							<div class="strutureTitle">fsdfsd</div>
								<div class="strutureItem"> <!-- v-for="(item,index) in items" -->
									<div class="item">
										<span>书</span>
									</div>
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
export default{
	data(){
		return {
			searchName:"",
			isCome:true
		}
	},
	methods:{
		search:function () {
			console.log(this.searchName);
			if(this.searchName=="" ||this.searchName == " "){
				this.isCome = true;
			}else{
				this.isCome = false;
			}
		}
	}
}
</script>

<style>
.inquire{
	width: 100%;
}
.searchFrame{
	width: 100%;
	height: 2.858em;
	background-color: #efefef;
	padding-top: 0.714em;
}
.searchText{
	display: flex;
	width: 92%;
	margin: 0 auto;
}
.back{
	padding-top: 0.357em;
	width: 15%;
}

.input{
	width: 85%;
}
.searchInput{
	height: 2em;
	border-radius: 0.357em;
	border: 0.071em solid #aaa;
	background-color: #fefefe;
}
.searchInput > input{
	width: 74%;
	margin: 0.286em 3%;
	height: 1.286em;
	outline:none;
	border:none;
}
.searchInput > span{
	width: 18%;
	text-align: center;
	padding-left: 4%;
	padding-bottom: 0.072em;
	border-left: 0.072em solid;
}
.structure{
	width: 100%;
}
.structContent{
	width: 100%;
	padding:0.357em 0;
}
.popular{
	width: 94%;
	padding:0.714em 3% ;
}
.popularTitle{
	font-size: 1.072em;
	font-weight: 800;
}
.popularSearches{
	width: 100%;
	padding-top: 0.357em;
	font-size: 0;
}
.popularSearches > span{
	padding: 0.215em 0.714em;
	font-size: 0.786em;
	border-radius: 0.215em;
	background-color: #efefef;
	margin:0.357em;
	color: #666;
	display: inline-block;
}
.searchContent{
	width: 100%;
	background-color: #fff;
}
.searchStructure{
	width: 94%;
	margin: 0 auto;
}
.strutureTitle{
	color: #666;
	height: 2.143em;
	line-height: 2.143em;
	padding-left: 0.357em;
	border-bottom: 0.072em dashed #999;
}
.strutureItem{
	height: auto;

}
.item{
	width: 100%;
	height: 2.858em;
	line-height: 2.858em;
	border-bottom: 0.072em solid #f1f1f1;
}
</style>