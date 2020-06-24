<!-- 贷款产品管理，新增页面 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9;">
			<div style="padding: 20px; background: #fff;">
				<div class="floatL">
					<h4>贷后录入</h4>
				</div>
				<div class="floatR2" style="float: right; border: 1px solid #E4E4E4;padding: 3px 7px;">
						<span>
							<router-link to="/cw/cwyhls" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<template>
				<div style="margin-top: 20px;padding-top: 15px; background: #fff;">
					
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>日期：
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
							凭证号：
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
							<span>*</span>摘要：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<select>
								<option value="请选择摘要">请选择摘要</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>流水发生方式：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<select>
								<option value="转出">转出</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							贷方发生额：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<input type="text" value="0.00">元
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							转出金额
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content hong" align="right">
							<span>*</span>转出账户：
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
						<div class="grid-content" align="right">
							备注：
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content" align="left">
							<textarea name="" id="" cols="30" rows="10"></textarea>
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" class="bian" justify="center">
					<el-col :span="4">
						<div class="grid-content" align="right">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content cwbj2" align="left">
							<button>提交</button>
							<router-link to="/cw/cwyhls" tag="span">
								<button>返回</button>
							</router-link>
						</div>
					</el-col>
				</el-row>
				<!-- <div class="cwbj"> -->
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cwyhbian',
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.shouxin2{
		background: #fff;
	}
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
	.cwbj {
		float: left;
		width: 1102px;
	}

	.cwbj p {
		margin-top: 20px;
	}

	.cwbj p span {
		width: 150px;
		display: inline-block;
	}

	.cwbj select {
		width: 50%;
		height: 34px;
	}

	.cwbj2 button {
		width: 150px;
		height: 37px;
		border-radius: 5px 5px;
		background: #000000;
		color: #fff;
		margin-right: 10px;
	}

	.cwbj button:nth-of-type(1) {
		color: white;
		background: black;
	}

	.cwbj button:nth-of-type(2) {
		color: white;
		background: #9A9A9A;
	}
</style>
