<!-- 系统设置-信息提示设置-编辑 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="dengji" align="left">
					<i class="el-icon-s-home"></i>首页/设置/消息提醒
					<span style="border: 1px solid #E4E4E4; padding: 3px 7px;float: right;">
						<router-link to="/index/XiTongSheZhi/InfoTiShi" tag="span">
							<i class="el-icon-arrow-left"></i> 返回
						</router-link>
					</span>
					<div class="clear"></div>
				</div>
				<div class="addGuan222" align="left">电子邮件</div>
				<div align="center">
					<table width="100%" class="addBuMen777">
						<tr height="60px">
							<td align="right" width="20%">消息类型：</td>
							<td align="left" class="hui">贷款审批通过</td>
						</tr>
						<tr height="60px">
							<td align="right"><span>*</span>标签说明：</td>
							<td align="left" class="hui shuoming">
								<div>
									<span>注册验证码：$Verify_Code$</span>
									<span>还款提醒：$Repayment_Reminders$</span>
									<span>审批金额：$Approval_Amount$</span>
								</div>
								<div>
									<span>还款金额：$Repayment_Amount$</span>
									<span>待还金额：$Remanent_Amount$</span>
									<span>贷款编号：$Loan_Id$</span>
								</div>
								<div>
									<span>贷款名称：$Loan_Name$</span>
									<span>贷款期限：$Loan_Term$</span>
									<span>还款期数：$Repayment_Nubmer$</span>
								</div>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">邮件标题：</td>
							<td align="left" class="hui">
								<input type="text" placeholder="贷款审批通过">
							</td>
						</tr>
						<tr height="40px">
							<td align="right">内容模板：</td>
							<td align="left">
								<img src="../../../../../public/images/daiHouInfo.png" alt="">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left" class="hui">
								邮件內容不能为空，长度限不能超过4000个字符
							</td>
						</tr>
					</table>
				</div>
				<div align="center">
					<span class="submit4">提交</span>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				value1:true,
				value2:true,
				value3:true,
				value4:true,
				value5:true
			}
		}
	}
</script>

<style scoped>
	.shuoming>div{
		margin-bottom: 15px;
	}
	.shuoming>div>span{
		margin-right: 25px;
	}
	.hui{
		color: #999;
	}
	.submit4{
		border-radius: 2px;
		color:#fff !important;
		background: #666;
		padding: 10px 15px;
		cursor: pointer;
	}
	.dengji {
		font-size: 13px;
		padding: 20px;
	}

	.addGuan222 {
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
		background: #F3F3F3;
		padding: 10px 20px;
		font-size: 13px;
		margin-bottom: 15px;
	}

	.addBuMen777 {
		background: #fff;
		padding: 20px 0;
		font-size: 12px;
	}

	.addBuMen777 td {
		vertical-align: top;
	}

	.addBuMen777>tr>td>span {
		color: red;
	}

	.addBuMen777 select {
		width: 43%;
		padding: 10px;
		color: #999;
	}

	.addBuMen777>tr>td>label {
		margin-right: 15px;
	}

	.addBuMen777 textarea {
		width: 40%;
		height: 150px;
		padding: 5px 10px;
	}

	.addBuMen777 input[type=text] {
		padding: 5px 10px;
		width: 40%;
	}

	/* .body {
		float: left;
		width: 100%;
		padding-left: 15.325rem;
		line-height: 3.125rem;
		background-color: #F9F9F9;
		height: 100%;
	}

	.head {
		position: relative;
		z-index: 2;
		height: 3.125rem;
		width: 95%;
	}

	.tit {
		float: left;
		color: black;
		font-size: 0.875rem;
	}

	.addGuan {
		width: 95%;
		text-indent: 1.25rem;
		background-color: #F3F3F3;
		height: 3.125rem;
		line-height: 3.125rem;
		border: 1px solid #E4E4E4;
	}

	.bor {
		width: 95%;
		height: 50%;
		background-color: white;
	}

	.text {
		padding: 1.875rem;
		width: 50%;
		height: 50%;
		margin: auto;
	} */
</style>
