<!-- 贷款产品管理，新增页面申请材料 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							新增贷款产品
						</div>
					</el-col>
					<el-col :span="2">
						<div align="right" class="fan">
							<router-link to="/cp/ChanpinGuanLi" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="">
				<ul class="biaoti" align="center">
					<li>
						<span>1</span>
						<div>产品基本信息</div>
					</li>
					<li>
						<p></p>
					</li>
					<li>
						<span>2</span>
						<div>产品参数配置</div>
					</li>
					<li>
						<p></p>
					</li>
					<li>
						<span>3</span>
						<div>申请材料配置</div>
					</li>
				</ul>
				<el-row>
					<el-col :span="4">
						<div class="backColor3">
							<div class="jiben">产品申请材料</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div style="margin: 3%;" align="left">
							<el-row>
								<el-col :span="24">
									<div class="backColor5">
										<div>说明： 补充申请材料是指用户在申请该产品贷款时，需要额外提交的材料附件；可以针对自身的产品业务配置不同的材料类型。</div>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<el-transfer v-model="value" :data="data"></el-transfer>
								</el-col>
							</el-row>
						</div>
						<el-row style="margin: 30px 0;">
							<el-col :span="4">
								<div align="right" style="padding: 1px;">
								</div>
							</el-col>
							<el-col :span="20">
								<div align="left">
									<router-link tag="span" to="/cp/cpxin2">
										<span class="submit2">
											上一步，申请材料管理
										</span>
									</router-link>
									<router-link tag="span">
										<span class="submit2">
											完成，提交
										</span>
									</router-link>
								</div>
							</el-col>
						</el-row>
						<div align="center">Copyright © 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.</div>
					</el-col>
				</el-row>
			</div>
		</el-main>

	</el-container>
</template>

<script>
	export default {
		data() {
			const chuansuo = ['工作证明','车辆证明','房产证明','学历证明','银行流水证明','保单证明','其他证明']
			const generateData = _ => {
				const data = [];
				for (let i = 0; i < chuansuo.length; i++) {
					data.push({
						key: i,
						label: `${ chuansuo[i] }`,
						disabled: i > 3
					});
				}
				return data;
			};
			return {
				data: generateData(),
				// value: [1, 4]  //另一个表格数据
			};
		}
	};
</script>

<style>
	.bj {
		background: #f2f2f2;
		padding: 10px;
		margin-top: 1%;
	}

	.border5 {
		border: 1px solid #E5E5E5;
	}

	.border5>div {
		padding: 10px 0;
		border-bottom: 1px solid #E5E5E5;
	}

	.border5>div:last-child {
		border: 0 !important;
	}

	.border5>div:last-child>div:last-child {
		border: 0 !important;
	}

	.border5>div:first-child>div {
		padding: 0px 0 !important;
		border: 0 !important;
	}

	.border5>div>div {
		padding: 10px 0;
		border-bottom: 1px solid #E5E5E5;
	}

	.backColor5 {
		background: #fc9;
		margin-bottom: 3%;
		padding: 10px;
	}

	.backColor4 {
		margin: 3%;
		border: 1px solid #e4e4e4;
		background: #F9FAFC !important;
	}

	.biaoti {
		background: #F8F8F8;
		padding: 2%;
		font-size: 22px;
	}

	.biaoti>li>p {
		border-bottom: 2px solid #D4D4D4;
		padding: 0 70px;
		margin-top: -10px;
	}

	.biaoti>li:nth-of-type(2)>p {
		border-bottom: 2px solid #666;
	}

	.biaoti>li:nth-of-type(4)>p {
		border-bottom: 2px solid #666;
	}

	.biaoti>li {
		display: inline-block;
	}

	.biaoti>li>span {
		border: 2px solid #d4d4d4;
		padding: 5px 10px;
		background: #fff;
		border-radius: 50%;
		color: #d4d4d4;
	}

	.biaoti>li>div {
		color: #999;
		margin-top: 10px;
	}

	.biaoti>li:nth-of-type(1)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(1)>div {
		color: #666;
	}

	.biaoti>li:nth-of-type(3)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(3)>div {
		color: #666;
	}

	.biaoti>li:nth-of-type(5)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(5)>div {
		color: #666;
	}

	.jiben {
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.canshu {
		margin-top: 100%;
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.submit2 {
		width: 200px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		text-align: center;
		padding: 10px;
	}

	.neirong3 label {
		margin-right: 10px;
	}

	.neirong3 {
		padding: 10px;
		background: #fff;
	}

	.neirong4 input[type=text] {
		padding: 1%;
	}

	.neirong4 select {
		padding: 1% 18% 1% 1%;
		color: #666;
	}

	.neirong4 .hanggao3 {
		line-height: 40px;
	}

	.neirong3 .jieshi {
		margin-bottom: 1% !important;
	}

	.neirong3>div {
		margin-bottom: 3%;
	}

	.hong2 {
		color: red;
	}

	.backColor3 {
		padding: 30px 0;
		position: relative;
	}

	.backColor {
		background: #F9F9F9;
		width: 100%;
	}

	.backColor2 {
		background: #fff;
		width: 100%;
		padding: 10px;
	}

	.fan {
		border: 1px solid #E4E4E4;
		padding: 2px 10px;
		text-align: center;
	}

	.fshi {
		width: 922px;
		margin-top: 20px;
	}

	.xing {
		color: red;
	}
</style>
