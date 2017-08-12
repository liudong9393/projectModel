<template>
	<div id="register">
		<div class="registerContent">
			<p class="registerTitle">注册</p>
			<div class="user input"><!-- 账号 -->
				<label for="user">账号</label>
				<input type="text" id="user" placeholder="请输入账号" v-model="user">
			</div>
			<p class="prompt" v-text="isUser"></p>
			<div class="pwd input"><!-- 密码 -->
				<label for="pwd">密码</label>
				<input type="text" id="pwd" placeholder="请输入密码" v-model="pwd">
			</div>
			<p class="prompt" v-text="isPwd"></p>
			<div class="confirmPassWord input"><!-- 密码 -->
				<label for="confirmPassWord">确认密码</label>
				<input type="text" id="confirmPassWord" placeholder="确认密码" v-model="confirmPassWord">
			</div>
			<p class="prompt" v-text="isConfirmPassWord"></p>
			<div class="phone input"><!-- 密码 -->
				<label for="phone">手机号</label>
				<input type="text" id="phone" placeholder="手机号" v-model="phone" v-on:blur="regexpReg">
			</div>
			<p class="prompt" v-text="isPhone"></p>
			<div class="verify input"><!-- 密码 -->
				<label for="verify">手机验证</label>
				<input type="text" id="verify" placeholder="验证码" v-model="verify">
			</div>
			<p class="prompt" v-text="isVerify"></p>
			<div class="check input"><!-- 密码 -->
				<label for="check">验证码</label>
				<input type="text" id="check" placeholder="验证码" v-model="check">
			</div>
			<p class="prompt" v-text="isCheck"></p>
			<div class="btnRegister">
				<router-link v-bind:to="isRegister?login:register">注册</router-link>
			</div>
			<div class="toLogin">
				<router-link to="/Login">已有账号，去登陆</router-link>
			</div>
			<div class="stroll">
				<router-link to="/Footer">暂不注册，我先逛逛</router-link>
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
			check:"",
			isCheck:"请输入验证码",
			phone:"",
			isPhone:"请输入手机号",
			verify:"",
			isVerify:"请输入手机验证码",
			confirmPassWord:"",
			isConfirmPassWord:"与上面密码不一致",
			user:"",
			isUser:"用户名是4-12位以字母开头，字母、数字、下划线组成",
			pwd:"",
			isPwd:"密码为6-14位，字母、数字、下划线组成",
			login:"/Login",
			register:"/Register",
			isRegister:false
		}
	},
	mounted(){
		//  this.$nextTick(function(){
		// 	this.regexpReg();
		// })
	},
	methods:{
		regexpReg:function(){
			var userRegExp = /^([a-zA-Z]{1})(\w{3,11})$/img;
			var pwdRegExp = /^(\w){6,14}$/;
			var check = Math.ceil(Math.random()*10000+1000);
			console.log(check);
			var phoneRegExp = /^(13|14|15|17|18)(\d{9})$/img;
				var phoneBoolean = phoneRegExp.test(this.phone);
			if(phoneBoolean){
				this.isPhone = "正确";
			}else{
				this.isPhone = "请输入正确的手机号码";
			}
		}
	}
}
</script>

<style>
	#register{
		padding: 1em 4%;
		width: 92%;
	}
	.registerContent{
		width: 100%;
		font-size: 1.2em;
	}
	.registerTitle{
		width: 80%;
		text-align: center;
		margin: 0.858em auto;
		font-weight: 800;
	}
	.registerContent .input{
		width:100%;
		margin: 0.5em 0;
		display: flex;
	}
	.registerContent > div > label{
		width: 22%;
		padding-right: 3%;
		text-align-last: justify;
		display: block;
		font-size: 1em;
		line-height: 2.286em;
	}
	.registerContent > div > input{
		width: 60%;
		display: block;
		outline: none;
		padding: 0.5em 2%;
		border:none;
		border-bottom: 1px solid #999;
	}
	.prompt{
		width: 100%;
		height: 1em;
		font-size: 12px;
		color: #c40000;
	}
	.btnRegister{
		width: 70%;
		margin: 3em auto;
		text-align: center;
	}
	.btnRegister > a {
		width: 100%;
		height: 2.5em;
		line-height: 2.5em;
		display: block;
		margin: 0 auto;
		background-color: #62b900;
		color: #f1f1f1;
		text-align: center;
	}
	.toLogin,.stroll{
		text-align: right;
		width: 80%;
		margin: 1em 0;
		font-size: 0.858em;
	}
	
</style>