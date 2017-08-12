<!-- 个人信息 -->
<template>
	<div id="person">
		<div class="personContent">
			<div>
				<titles v-bind:title-msg="title"></titles>
			</div>
			<div >
				<select @change = "submitForm" v-model="selected">
				  	<option v-for="(province,index) in provinces" v-bind:value="index">{{province}}</option>
				</select>
				<select v-model="select">
				 	<option v-for="(cityName,index) in cityNames" v-bind:value="index">{{cityName}}</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import titles from "./title";
export default{
	data(){
		return {
			title:"个人信息",
			provinces: null,
			cityNames:null,
			selected: 0,
			select:0
		}
	},
	mounted(){
	  	this.$nextTick(function(){
	  			this.submitForm () ;
			})
	},
	methods: {
		
		 submitForm () {
		 	// console.log(this.selected);
		 	var obtainNewIndex = this.selected;
			 this.$ajax({
				  method: 'get',
				  url: "./../../static/json/city.json"// 地址
				}).then(response => {
					var arrProvinces = [];//省
					var arrCity = [];//市
					var localData = response.data["localData"];//地址解析
					for(var b in localData){// 遍历省
						arrProvinces.push(localData[b]["province"]);
						var city =  localData[obtainNewIndex]["city"];
					}
					// 遍历市
					for(var d in city){
						// console.log(city[d]["cityName"]);
						arrCity.push(city[d]["cityName"]);
					}
					this.provinces = arrProvinces;
					this.cityNames = arrCity;
					this.select = 0;
					// console.log(this.provinces);
				})
			}
  	},
	components:{titles}
}
</script>

<style>
	select{
		width: 20%;
		
		/*text-align: center;*/
		font-size: 0.786em;
		appearance:none;
     	-moz-appearance:none;
  		-webkit-appearance:none;
 		/*overflow: auto;*/
	}
	option{
		height: 21.45em;
	}
</style>