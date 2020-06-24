<!-- 系统设置-会员等级管理-添加 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="dengji" align="left">
					<i class="el-icon-s-home"></i>首页/客户档案管理/会员等级管理
					<span style="border: 1px solid #E4E4E4; padding: 3px 7px;float: right;">
						<router-link to="/index/XiTongSheZhi/HuiYuanDengJi" tag="span">
							<i class="el-icon-arrow-left"></i> 返回
						</router-link>
					</span>
					<div class="clear"></div>
				</div>
				<div class="addGuan222" align="left">添加会员类型</div>
				<div align="center">
					<table width="100%" class="addBuMen777">
						<tr height="40px">
							<td align="right" width="30%" style="line-height: 30px;"><span>*</span>会员等级名称：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right" style="line-height: 30px;"><span>*</span>成长值满足点：</td>
							<td align="left">
								<input type="text">
							</td>
						</tr>
						<tr>
							<td align="right">设为默认会员等级：</td>
							<td align="left">
								<label><input type="radio" name="huiyuan">是</label>
								<label><input type="radio" name="huiyuan">否</label>
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
								新会员注册是的等级
							</td>
						</tr>
						<tr height="40px">
							<td align="right" style="line-height: 30px;">借贷放款金额：</td>
							<td align="left">
								<input type="text" placeholder="1"> 代币/元
							</td>
						</tr>
						<tr height="40px">
							<td align="right" style="line-height: 30px;">评论奖励：</td>
							<td align="left">
								<input type="text" placeholder="5"> 代币/条
							</td>
						</tr>
						<tr height="40px">
							<td align="right">备注：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
						</tr>
						<tr height="40px">
							<td align="right">签到奖励特权：</td>
							<td align="left">
								<el-switch v-model="value1" active-color="#000" inactive-color="#ccc">
								</el-switch>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">评论奖励特权：</td>
							<td align="left">
								<el-switch v-model="value2" active-color="#000" inactive-color="#ccc">
								</el-switch>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">专享活动特权：</td>
							<td align="left">
								<el-switch v-model="value3" active-color="#000" inactive-color="#ccc">
								</el-switch>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">会员专属特权：</td>
							<td align="left">
								<el-switch v-model="value4" active-color="#ccc" inactive-color="#000">
								</el-switch>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">生日礼包特权：</td>
							<td align="left">
								<el-switch v-model="value5" active-color="#000" inactive-color="#ccc">
								</el-switch>
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
								<span class="submit4">提交</span>
							</td>
						</tr>
					</table>
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
