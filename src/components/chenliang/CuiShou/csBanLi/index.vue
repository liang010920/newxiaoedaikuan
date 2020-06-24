<!-- 催收管理-已逾期-催收办理 -->
<template>
	<el-container>
		<el-main>
			<div class="shouxin">
				<div class="floatL">
					催收办理
				</div>
				<div class="floatR2">
					<div class="width3">
						<div class="hei4"></div>
						<div class="white">初审</div>
						<span>1</span>
						<div class="white">复审</div>
						<span>2</span>
						<div class="white">终审</div>
						<span>3</span>
						<div class="white">放款</div>
						<span>4</span>
						<div class="white">还款</div>
						<span>5</span>
						<div>完成</div>
					</div>
					<span> | </span>
					<div class="kuan">
						<span>
							<i class="el-icon-printer"></i>
							打印
						</span>
						<span>
							<router-link to="/cs/csdaoqi" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</span>
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<!-- 贷款信息 -->
			<div class="kong" align="center">
				<p style="margin: 15px 0;width: 922px;height: 40px;text-align: center;">(客户[张某某])</p>
				<div class="width4" align="center">
					<div class="tishi" align="left">逾期信息</div>
					<div align="left" class="bai">
						<li align="center">客户:</li>
						<li align="">
							<p>张某某</p>
						</li>
						<li align="center">贷款类型：</li>
						<li align="">
							<select>
								<option value="个人">个人信用</option>
							</select>
						</li>
					</div>
					<div align="left" class="bai">
						<li align="center">借款编号：</li>
						<li align="">
							100001
						</li>
						<li align="center">合同号:</li>
						<li align="">
							2018011510000152001
						</li>
					</div>
					<div align="left" class="bai">
						<li align="center">当前逾期期数：</li>
						<li align="">
							<input type="text" value="1/12">
						</li>
						<li align="center">逾期本金:</li>
						<li align="">
							<input type="text" value="1584.00">&nbsp;元
						</li>
					</div>
					<div align="left" class="bai">
						<li align="center">逾期利息：</li>
						<li align="">
							<input type="text" value="166.00">&nbsp;元
						</li>
						<li align="center">借款管理费:</li>
						<li align="">
							<input type="text" value="0.00">元
						</li>
					</div>
					<div align="left" class="bai">
						<li align="center">本期还款日：</li>
						<li align="">
							<input type="text" value="2018-12-18">
						</li>
						<li align="center">逾期天数:</li>
						<li align="">
							<input type="text" value="5">
						</li>
					</div>
					<div align="left" class="bai">
						<li align="center">预期风险等级：</li>
						<li align="">
							正常类
						</li>
						<li align="center">催收次数:</li>
						<li align="">
							1
						</li>
					</div>
				</div>
			</div>
			<div class="chuli">
				<p style="width:922px;height:40px;text-align:center;border-bottom: 1px solid #E4E4E4;">催收处理</p>
				<p class="fshi">
					<span class="xing">*</span>
					催收方式：
					<input type="button" value="预催收">
					<input type="button" value="电话催收">
					<input type="button" value="上门/外访">
					<input type="button" value="诉讼">
				</p>
				<p style="margin-top:20px; width: 458px;">
					<span class="xing">*</span>
					还款提醒:
				</p>
				<div class="kk">
					<el-form>
						<el-form-item label="通知方式:" :label-width="formLabelWidth">
							<span><input type="checkbox" checked="checked">系统推送</span>
							<span><input type="checkbox" checked="checked">短信</span>
							<span><input type="checkbox" checked="checked">邮件</span>
						</el-form-item>
						<el-form-item class="qi" label="使用模板:" :label-width="formLabelWidth">
							<input type="text" placeholder="模板:即将到期提醒模板">
						</el-form-item>
						<el-form-item label="提醒周期:" :label-width="formLabelWidth">
							<input type="radio" checked="checked">一次
							<input type="radio">到期前每天两次
						</el-form-item>
						<el-form-item label="发送时间:" :label-width="formLabelWidth">
							<input type="radio" checked="checked">立即发送
							<input type="radio">定时发送
							&nbsp;<select>
								<option value="">8:00</option>
							</select>
						</el-form-item>
					</el-form>
				</div>
				<div slot="footer" class="dfooter">
					<el-button @click="dialogShen = false">取 消</el-button>
					<el-button type="primary" @click="dialogShen = false">确 定</el-button>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'csbanli',
		data() {
			return {
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style scoped="scoped">
	.hei4{
		background: #000;
		width: 323px;
		height:38px;
		position: absolute !important;
		top:0;
		left:0;
	}
	.chuli {
		margin-top: 40px;
	}

	.kk {
		width: 422px;
		margin-left: 300px;
		margin-top: -24px;
		width: 922p;
		border: 1px solid #E4E4E4;
	}

	.kk form {
		margin-left: 20px;
	}

	.kk form input {
		margin-left: 20px;
	}

	.fshi {
		width: 922px;
		margin-top: 20px;
	}

	.fshi input {
		width: 100px;
		height: 30px;
		border-radius: 5px 5px;
		margin-right: 10px;
	}

	.fshi input:nth-of-type(1) {
		color: white;
		background: black;
	}

	.xing {
		color: red;
	}

	.dfooter {
		width: 922px;
		height: 100px;
		line-height: 100px;
	}

	.dfooter button {
		width: 100px;
		color: white;
		background: #676767;
	}

	.width4 {
		position: relative;
	}

	.width4 div li select {
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width: 200px;
	}

	.width4 div li input[type=text] {
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width: 188px;
		font-size: 14px;
	}

	.width4>div {
		border-bottom: 1px solid #E4E4E4;
	}

	.width4 div li {
		padding: 10px;
		border-right: 1px solid #E4E4E4;
		list-style-type: none;
		display: inline-block;
	}

	.width4 div li:last-child {
		width: 280px;
		border-right: 0;
	}

	.width4 div li:first-child {
		padding: 14px;
		width: 120px;
	}

	.width4 div li:nth-of-type(2) {
		width: 280px;
	}

	.width4 div li:nth-of-type(3) {
		padding: 14px;
		width: 120px;
	}

	.el-menu.el-menu--horizontal {
		border: 0px !important;
	}

	.width4 {
		width: 83%;
		border: 1px solid #e4e4e4;
	}

	.tishi {
		font-weight: bold;
		background: #F2F2F2;
		padding: 10px;
	}

	.clear {
		clear: both;
	}

	.kuan>span {
		border: 1px solid #999;
		padding: 7px 10px;
		margin-left: 10px;
	}

	.floatR2>* {
		display: inline-block;
	}

	.floatR2>span {
		margin: 0 20px;
		font-size: 22px;
	}

	.hei {
		background: #000;
		width: 123px;
		height: 38px;
		position: absolute !important;
		top: 0;
		left: 0;

	}

	.width3 {
		position: relative;
		font-size: 13px;
		padding: 10px;
		background: #F2F2F2;
	}

	.width3 div {
		position: relative;
		z-index: 10;
	}

	.width3 span {
		position: relative;
		z-index: 10;
	}

	.white {
		color: #fff;
	}

	.width3 span {
		padding: 2px 7px;
		margin: 0 10px;
		border-radius: 50%;
		background: #fff;

	}

	.width3 div {
		display: inline-block;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.shouxin>div {
		display: inline-block;
	}

	.floatL {
		float: left;
	}

	.floatR2 {
		float: right;
	}

	.boHui {
		color: red !important;
	}

	.shenhe>div:last-child {
		color: #0099FF;
	}

	.cell:hover {
		cursor: pointer;
	}

	.margin2 {
		margin: 50px 0;
	}

	.ju * {
		text-align: center !important;
	}

	.dao {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}

	.lieBiao {
		background: #f3f3f3;
		padding: 10px 0;
	}

	.el-button {
		padding: 8px 20px !important;
	}
</style>
