<!-- 系统管理-账户设置 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9; padding: 0 !important;">
			<div class="top3" align="left">
				<i class="el-icon-s-home"></i> 首页/系统管理/帐户设置
				<span class="shuaxin"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="account" align="left">账户设置</div>
			<div class="account2" align="center">
				<div class="tou2">
					<i class="el-icon-user-solid"></i>
				</div>
				<div class="blue">上传头像</div>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>用户名：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text" value="admin" disabled="disabled">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>手机号：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text" value="18000000000">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>Email：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text" value="18000000000@qq.com">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>旧密码：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>新密码：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="10">
						<div align="right" class="lineH">
							<span class="hong3">*</span>确认密码：
						</div>
					</el-col>
					<el-col :span="14">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<div class="submit3">提交</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
</script>

<style>
	.lineH{
		line-height: 37px;
	}
	.account2 input[type=text]{
		padding: 10px;
		border-radius: 2px;
		border: 1px solid #e4e4e4;
		font-size: 16px;
	}
	.hong3{
		color: red;
	}
	.account2>div{
		margin-bottom: 20px;
	}
	.submit3{
		color:#fff;
		border-radius: 3px;
		padding: 10px 15px;
		background: #666;
		width: 10%;
		cursor: pointer;
	}
	.tou2{
		width: 12%;
		font-size: 110px;
		color: #ccc;
		border-radius:50%;
		border:  2px solid #ccc ;
	}
	.account2{
		background: #fff;
		padding: 30px 0;
		font-size: 12px;
	}
	.blue{
		color: #3399FF;
		
	}
	.account{
		background: #F3F3F3;
		font-size: 12px;
		padding: 20px;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
	}
	.top3{
		margin: 15px;
		margin-bottom: 30px;
	}
	.shuaxin{
		float: right;
		border: 1px solid #E4E4E4;
		background: #fff;
		padding: 3px 7px;
	}
</style>
