<!-- 系统设置-管理服务费 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="jiekuan">
					<i class="el-icon-s-home"></i>首页/设置/系统费率配置
				</div>
				<div class="addGuan" align="left">管理服务费参数</div>
				<div align="center">
					<table width="100%" class="addBuMen222">
						<tr height="40px">
							<td align="right" width="30%">宽限日：</td>
							<td align="left">
								<div><select>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
								</select> 单位/天</div>
							</td>
						</tr>
						<tr height="40px" style="margin-bottom: 35px;">
							<td align="right"></td>
							<td align="left">
								<div>宽限日是指贷款逾期之后，允许用户还款的宽限日；</div>
								<div>设置启用后，用户在宽限日期限还款，不记录逾期行为。</div>
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
							</td>
						</tr>
						<tr height="30px">
							<td align="right"><span>*</span>借款服务费：</td>
							<td align="left">
								<label><input type="radio" name="qiyong"> 启用</label>
								<label><input type="radio" name="qiyong" checked="checked"> 关闭</label>
							</td>
						</tr>
						<tr height="30px">
							<td align="right"></td>
							<td align="left">
								<input type="text" disabled="disabled"> %
							</td>
						</tr>
						<tr height="10px">
							<td align="right"></td>
							<td align="left">
							</td>
						</tr>
						<tr height="40px" style="margin-bottom: 35px;">
							<td align="right"></td>
							<td align="left">
								服务费将按照借款人的信用等级来收取，一次性向借款人收取其（借款本金*服务费率）作为平台服务费
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
							</td>
						</tr>
						<tr height="30px">
							<td align="right"><span>*</span>借款管理费：</td>
							<td align="left">
								<label><input type="radio" name="qiyong2"> 启用</label>
								<label><input type="radio" name="qiyong2" checked="checked"> 关闭</label>
							</td>
						</tr>
						<tr height="30px">
							<td align="right"></td>
							<td align="left">
								<input type="text" disabled="disabled"> %
							</td>
						</tr>
						<tr height="10px">
							<td align="right"></td>
							<td align="left">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
								设置后将按照借款人的借款期限，每月向借款人收取其借款本金的0.3%作为借款管理费。
							</td>
						</tr>
						<tr>
							<td align="right"></td>
							<td align="left">
								<span class="tijiao">提交</span>
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
		name:'GuangGaoAdd',
		data() {
			return {
				ruleForm: {
					name: '',
					name2:'',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				form: {
					name: '',
					data1: '',
					data2: '',
					
				},
			}
		}
	}
</script>

<style scoped>
	.tijiao{
		cursor: pointer;
		background: #666666;
		color:#fff !important;
		border:1px solid #E4E4E4;
		border-radius: 3px;
		padding: 10px 15px;
	}
	.addGuan{
		border-top:1px solid #E4E4E4;
		border-bottom:1px solid #E4E4E4;
		background: #F3F3F3;
		padding: 10px 20px;
		font-size: 16px;
		margin-bottom: 15px;
	}
	.addBuMen222 {
		background: #fff;
		padding: 20px 0;
		font-size: 14px;
	}
	
	.addBuMen222 td {
		vertical-align: top;
	}
	
	.addBuMen222>tr>td>span {
		color: red;
	}
	.addBuMen222 select{
		width: 43%;
		padding: 10px;
		color: #999;
	}
	
	.addBuMen222>tr>td>label {
		margin-right: 15px;
	}
	
	.addBuMen222 textarea {
		width: 40%;
		height: 150px;
		padding: 5px 10px;
	}
	
	.addBuMen222 input[type=text] {
		padding: 5px 10px;
		width: 40%;
		border-radius: 2px;
		border:1px solid #E4E4E4;
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