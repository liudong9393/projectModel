<template>
	<div id="login">
		<div class="logContent">
			<p class="logTitle">登录</p>
			<div class="userName input"><!-- 账号 -->
				<label for="userName">账号</label>
				<input type="text" id="userName" placeholder="请输入账号" v-model="userName">
			</div>
			<div class="passWord input"><!-- 密码 -->
				<label for="passWord">密码</label>
				<input type="text" id="passWord" placeholder="请输入密码" v-model="passWord">
			</div>
			<div class="btnLogin">
				<router-link v-bind:to="isLogin?footer:login">登录</router-link>
			</div>
			<div class="toRegister">
				<router-link to="/Register">注册账号</router-link>
			</div>
			<div class="stroll">
				<router-link to ="/Footer">暂不登录，我先逛逛</router-link>
			</div>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			userName:"",
			passWord:"",
			footer:"/Footer",
			login:"/Login",
			isLogin:false
		}
	},
	mounted(){
		// this.$nextTick(function(){
		// 	this.regexpLog();
		// })
	},
	method:{
		// regexpLog(){

		// }
	}
}
</script>

<style>
	#login{
		padding: 1.5em 4%;
		width: 92%;
	}
	.logContent{
		width: 100%;
		font-size: 1.2em;
	}
	.logTitle{
		width: 80%;
		text-align: center;
		margin: 0.858em auto;
		font-weight: 800;
	}
	.logContent .input{
		width:100%;
		display: flex;
		margin: 2em 2%;
	}
	.logContent > div > label{
		width: 22%;
		padding-right: 3%;
		text-align-last: justify;
		display: block;
		font-size: 0.929em;
		line-height: 2.286em;
	}
	.logContent > div > input{
		width: 60%;
		display: block;
		outline: none;
		padding: 0.5em 2%;
		border:none;
		border-bottom: 1px solid #999;
	}
	.btnLogin{
		width: 70%;
		margin: 3em auto;
		text-align: center;
		padding: 0.5em 0;
		background-color: #62b900;
	}
	.btnLogin > a {
		display: block;
		color: #f1f1f1;
	}
	.toRegister,.stroll{
		text-align: right;
		width: 80%;
		margin: 1em 0;
		font-size: 0.858em;
	}
	
</style>