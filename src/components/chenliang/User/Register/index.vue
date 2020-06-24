<!-- 注册 -->
<template>
	<div align="center" class="padding">
		<div><i class="el-icon-user registerTou"></i></div>
		<h2 class="white2">小额贷款-注册</h2>
		<div class="kuan"><input type="text" placeholder="用户名" v-model="reUser" class="user"></div>
		<div class="kuan"><input type="text" placeholder="邮箱" v-model="reEmail" class="email"></div>
		<div class="kuan"><input type="password" placeholder="密码" v-model="rePwd" class="pwd"></div>
		<div class="zhuce2" align="center" @click="register">注册</div>
		<div>
			<span class="yanse2">已经有账号?</span>
			<span class="white2"> 
			<router-link tag="span" to="/Login">点击登录</router-link></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ZhuCe',
		data(){
			return{
				reUser:'',
				reEmail:'',
				rePwd:''
			}
		},
		methods: {
			register() {
				if(this.reUser == "" || this.reEmail == "" || this.rePwd == ""){
					alert('用户名/密码/邮箱不能为空！')
				}else{
					alert("注册成功");
					this.$router.push({
						path:'/Login',query:{reUser:this.reUser,reEmail:this.reEmail,rePwd:this.rePwd}
					})
				}
			}
		},
	}
</script>

<style>
	.registerTou{
		font-size: 60px;
		border: 2px solid #6653A2;
		border-radius: 50px;
		color:#6653A2;
		padding: 20px;
	}
	.padding{
		padding: 5%;
	}
	.van-divider{
		color:#fff !important;
	}
	.bottom{
		margin-top: 5%;
	}
	.bottom img{
		margin-right: 2%;
	}
	.yixia{
		margin-top: 15%;
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
	.zhuce2{
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
	.email{
		background: url('../../../../../public/images/email.png') #6653A2 no-repeat right !important;
		background-position-x: 95% !important;
		margin-right: 10px;
	}
	.pwd{
		background: url('../../../../../public/images/pwd.png') #6653A2 no-repeat right !important;
		background-position-x: 95% !important;
		margin-right: 10px;
	}
	.floatR{
		float: right;
	}
	.clear{
		clear: both;
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
</style>
