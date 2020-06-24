<!-- 新增材料 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							新增贷款材料
						</div>
					</el-col>
					<el-col :span="2">
						<div align="right" class="fan">
							<router-link to="/cp/cpcailiao" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="neirong2">
				<el-row class="jieshi">
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>材料名称：
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
						<div align="right" style="padding: 1px;">
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							请认真填写材料名臣，此项将会显示在借款产品页面
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>材料类型：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<select>
								<option value="附件">附件</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>附件上传要求：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text" value="1"> 张
						</div>
					</el-col>
				</el-row>
				<el-row class="jieshi">
					<el-col :span="4">
						<div align="right" class="hanggao3">
							<span class="hong2">*</span>排序值：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text" placeholder="0~100">
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" style="padding: 1px;">
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							用户提交材料是，现实的材料顺序，排序值打越靠前
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
							<span class="hong2">*</span>合同说明：
						</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<textarea placeholder="请对材料要求进行简要描述,以便借款人正确上传相关材料" cols="50" rows="15"></textarea>
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
	export default {
		name: 'NewCaiLiao',
		// 添加数据
	}
</script>

<style>
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
	.neirong2{
		margin-top: 10px;
		padding:10px;
		background: #fff;
	}
	.neirong2 input[type=text]{
		padding: 1%;
	}
	.neirong2 select{
		padding: 1% 18% 1% 1%;
		color: #666;
	}
	.neirong2 .hanggao3{
		line-height: 40px;
	}
	.neirong2 .jieshi{
		margin-bottom: 1% !important;
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
