<!-- 新增合同 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							新增合同模块
						</div>
					</el-col>
					<el-col :span="2">
						<div align="right" class="fan">
							<router-link to="/cp/cphetong" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="neirong2">
				<el-row>
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>合同模板编号：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>合同模板名称：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>适合贷款类别：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<select>
								<option value="请选择">请选择</option>
							</select>
							<select style="margin-left: 10px;">
								<option value="请选择">请选择</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">
							<span class="hong2">*</span>是否启用：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<label><input type="radio" checked name="shifou">是</label>
							<label style="margin-left: 10px;"><input type="radio" checked name="shifou">否</label>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">
							<span class="hong2">*</span>标签说明：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left" class="biaoqian">
							<div>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
							</div>
							<div>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
							</div>
							<div>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
							</div>
							<div>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
								<span>贷款产品类别：$Loan_Product_Sort$</span>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">
							<span class="hong2">*</span>合同说明：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<img src="../../../../../public/images/daiHouInfo.png">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" style="padding: 1px;">
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left" class="submit2">
							提交
						</div>
					</el-col>
				</el-row>
			</div>
			<div align="center">Copyright © 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.</div>
		</el-main>
	</el-container>
</template>

<script>
	export default{
		name:'NewHeTong'
	}
</script>

<style>
	.biaoqian>div{
		margin-bottom:10px;
	}
	.biaoqian>div>span{
		margin-right: 10px;
	}
	.neirong2{
		margin-top: 10px;
		padding:10px;
		background: #fff;
	}
	.neirong2>div{
		margin-bottom:3%;
	}
	.hong2{
		color: red;
	}
	.backColor{
		background: #F9F9F9;
		width:100%;
	}
	.backColor2{
		background: #fff;
		width:100%;
		padding:10px;
	}
	.fan{
		border:1px solid #E4E4E4;
		padding: 2px 10px;
		text-align: center;
	}
	.submit2{
		width: 100px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		text-align: center;
	}
</style>
