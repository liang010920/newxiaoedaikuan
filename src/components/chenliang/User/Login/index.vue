<!-- 登录 -->
<template>
	<div align="center" class="padding">
		<div><i class="el-icon-user loginTou"></i></div>
		<h1 class="white2">小额贷款-登录</h1>
		<div class="kuan"><input type="text" placeholder="用户名" v-model="loginUser" class="user"></div>
		<div class="kuan"><input type="password" placeholder="密码" v-model="loginPwd" class="pwd"></div>
		<div class="login" align="center" @click="loginPan">登录</div>
		<div>
			<span class="yanse2">忘记密码?</span>
			<span class="register">
				<router-link to="/Register">注册</router-link></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
				loginUser:'',
				loginPwd:'',
				reUser:'',
				rePwd:'',
			}
		},
		methods: {
			loginPan() {			
				if(this.loginUser == "用户名" || this.loginPwd == "密码"){
					alert('用户名或密码不能为空！')
				}else if(this.loginUser == "admin" && this.loginPwd == "admin" || this.loginUser == this.reUser && this.loginPwd == this.rePwd){
					alert('登录成功！');
					this.$router.push({
						path:'/index',query:{loginUser:this.loginUser,loginPwd:this.loginPwd}
					})
				}else{
					alert("用户名或密码错误！")
				}
			}
		},
		created(){
			this.reUser=this.$route.query.reUser
			this.rePwd=this.$route.query.rePwd
		}
	}
</script>

<style>
	.register{
		color: #0099FF;
		margin-left: 5%;
	}
	.loginTou{
		font-size: 60px;
		border: 2px solid #6653A2;
		border-radius: 50px;
		color:#6653A2;
		padding: 20px;
	}
	.bottom2{
		margin-top: 5%;
	}
	.bottom2 img{
		margin-right: 2%;
	}
	.yixia2{
		margin-top: 35%;
		color:#fff !important;
	}
	.border{
		border-bottom: 1px solid #B8AEDB;
		padding-top: 15%;
	}
	.color{
		color: #B8AEDB;
	}
	.yanse2{
		color: #A0A0DA;
	}
	.login{
		margin-top: 1%;
		border: 1px solid #FFBC42;
		border-radius: 45px;
		color: #fff;
		width: 85%;
		background: #FFBC42;
		padding: 17px 20px;
		bottom: 0;
		margin-bottom: 15px;
	}
	.user{
		background: url('../../../../../public/images/user.png') #6653A2 no-repeat right !important;
		background-position-x: 95% !important;
		margin-right: 10px;
	}
	.pwd{
		background: url('../../../../../public/images/pwd.png') #6653A2 no-repeat right !important;
		background-position-x: 95% !important;
		margin-right: 10px;
	}
	.white2{
		color:#000;
		margin-bottom: 5%;
	}
	.kuan>input{
		margin-top: 1%;
		border: 1px solid #886BBD;
		border-radius: 45px;
		color: #fff;
		width: 85%;
		background: #6653A2;
		padding: 17px 20px;
		bottom: 0;
		margin-bottom: 15px;
		opacity: 0.7;
	}
	input::-webkit-input-placeholder{
		color: #fff;
		opacity: 1 !important;
	}
	.margin4{
		margin-top: 15%;
	}
	.padding{
		padding: 5%;
	}
</style>
