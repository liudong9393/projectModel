<template>
	<div id="local">
		<div class="localContent">
			<div class="searchLocal">
				<div class="back">
					<router-link to="/Footer">返回</router-link>
				</div>
				<div class="localInput">
					<input type="text" placeholder="国内城市名称" v-model="localName">
				</div>
			</div>
			<div class="localMain">
				<div class="localAll">
					<div class="localCommon">
						<p class="localTitle">曾去过的地方</p>
						<div class="localOnce">
							<span>北京</span>
						</div>
					</div>
					<div class="localList">
					<div class="everyProvince" v-for="(province,indexProvince) in provinces" >
						<p class="province" v-text="province"></p>
						<div class="cityContent">
							<div class="citys" v-for="citys in localData[indexProvince].city"
							 @touchstart="select(citys.cityName)">
							 	<router-link to="/Home">
									<p class="city" v-text="citys.cityName"></p>
								</router-link>
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
			localName:"",
			provinces:null,
			localData:null,
		}
	},
	mounted(){
	  	this.$nextTick(function(){
	  			this.local () ;
			})
	},
	methods:{
		select(locals){
			this.selectLocal = locals;
			// console.log(local);
			// this.$emit("listenToLocal",this.selectLocal)
		},
 		local () {
		 	var _this=this;
			 this.$ajax({
				  method: 'get',
				  url: "./../../static/json/city.json"// 地址
				}).then(response => {
					var arrProvinces = [];//省
					_this.localData = response.data["localData"];//地址解析
					for(var b in _this.localData){// 遍历省
						arrProvinces.push(_this.localData[b]["province"]);
					}
					_this.provinces = arrProvinces;
				})
			}
	},
	// props:["local"]
}
</script>

<style>
	#local{
		width: 100%;
	}
	.localContent{
		width: 100%;
	}
	.searchLocal{
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		height: 2.5em;
		line-height: 2.5em;
		background-color: #c40000;
	}
	.back{
		width: 20%;
		text-align: center;
	}
	.back>a{
		color: #f1f1f1;
		display: block;
	}
	.localInput{
		width: 80%;
	}
	.localInput > input{
		padding-left: 0.5em;
		margin-left: 1em;
		width: 80%;
		outline: none;
		height: 1.5em;
		border: none;
	}
	.localMain{
		margin:2.5em 0;
		width: 100%;
	}
	.localAll{
		width: 100%;
		padding: 1em 0;
	}
	.localCommon{
		padding: 1em 0;
	}
	.localTitle{
		width: 94%;
		padding: 0.5em 3%;
		font-size: 1.1;
		background-color: #f1f1f1;
	}
	.localOnce{
		width: 92%;
		padding: 0.5em 4%;
		font-size: 0.858;
	}
	.localList{
		width: 100%;
	}
	
	.everyProvince{
		width: 100%;
	}
	.province{
		width: 92%;
		padding: 0.5em 4%;
		background-color: #efefef;
		border-bottom: 1px solid #999;
	}
	.cityContent{
		width: 94%;
		padding: 0.5em 3%;
	}
	.citys{
		padding: 0.5em 3%;
		display: inline-block;
		margin:0.3em 1%;
		background-color: #ddd;
		border-radius: 3px;
	}
	.city{
		display: inline-block;
	}
</style>