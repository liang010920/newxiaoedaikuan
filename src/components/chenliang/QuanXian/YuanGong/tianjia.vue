<!-- 系统权限-员工管理-添加 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/员工管理/添加
				<span class="f5"><i class="el-icon-arrow-left"></i> 
					<router-link tag="span" to="/index/QuanXian/YuanGong"> 返回</router-link>
				</span>
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor7">
				添加成员
			</div>
			<div class="clear"></div>

			<template>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>创建账号：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text" placeholder="登录账号">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>成员姓名：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>手机号：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>邮箱地址：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>所属部门：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<select>
								<option value="请选择">请选择</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left" style="font-size: 12px;">
							选择所属部门后默认继承部门权限，可在成员列表中单独设置权限
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>所属角色：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<select>
								<option value="请选择">请选择</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>登录密码：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>确认密码：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content" align="right">
							允许登录：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
							</el-switch>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content" align="right">
							备注信息：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<textarea placeholder="请输入内容">
								
							</textarea>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<el-button type="info">提交</el-button>	
						</div>
					</el-col>
				</el-row>
			</template>

		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'YuanGongAdd',
		data() {
			return {
				value: true
			}
		}
	}
</script>

<style>
	.bian {
		margin-top: 10px;
	}

	.bian textarea {
		padding: 10px;
		width: 78%;
		height: 111px;
		border-radius: 2px;
	}
	.bian input {
		padding: 10px;
		width: 78%;
		border-radius: 2px;
	}
	.bian select {
		padding: 10px;
		width: 84%;
		border-radius: 2px;
	}

	.bian>div>.hong {
		line-height: 40px;
	}

	.hong>span {
		color: red;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.sousuo {
		margin: 20px 0;
	}

	.sousuo>span input[type=text] {
		padding: 6px;
	}

	.sousuo>span {
		display: inline-block;
		margin: 0 20px;
	}

	.addBuMen {
		font-size: 16px;
	}

	.addBuMen td {
		vertical-align: top;
	}

	.addBuMen>tr>td>span {
		color: red;
	}

	.addBuMen>tr>td>label {
		margin-right: 15px;
	}

	.addBuMen textarea {
		width: 80%;
		height: 150px;
		padding: 5px 10px;
	}

	.addBuMen input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}

	.el-dialog__header {
		background: #f2f2f2;
	}

	.bianju {
		margin-right: 25px;
	}

	.cell {
		text-align: center;
	}

	.tianjia {
		border: 1px solid #e4e4e4;
		float: right;
		background: #fff;
		padding: 2px 30px;
	}

	.clear {
		clear: both;
	}

	.f5 {
		border: 1px solid #e4e4e4;
		padding: 5px 15px;
		float: right;
	}

	.bgColor7 {
		margin-top: 40px;
		background: #F3F3F3;
		padding: 14px;
	}
</style>
