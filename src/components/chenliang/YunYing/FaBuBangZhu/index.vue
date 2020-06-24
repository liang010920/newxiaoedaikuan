<!-- 运营管理-文章-发布帮助 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							<i class="el-icon-s-home"></i>首页/运营管理/帮助管理
						</div>
					</el-col>
					<el-col :span="2">
						<div align="right" class="fan">
							<router-link to="/index/YunYing/wenZhangGuanLi" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
			<div style="margin-top: 20px;">
				<el-row>
					<el-col :span="4">
						<div class="backColor3" style="border:1px solid #e4e4e4;">
							<div class="jiben">基本信息</div>
							<div class="canshu">帮助正文</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="neirong2" style="padding: 10px 0;border:1px solid #e4e4e4;">
							<el-row class="jieshi">
								<el-col :span="4">
									<div align="right" class="hanggao3">
										<span class="hong2">*</span>帮助标题：
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
									<div align="right">
										<span class="hong2">*</span>帮助分类：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<select>
											<option value="请选择分类">请选择分类</option>
										</select>
									</div>
								</el-col>
							</el-row>
							<el-row class="jieshi">
								<el-col :span="24">
									<div align="left" style="margin-left: 60px;" class="hanggao3">
										<img src="../../../../../public/images/daiHouInfo.png" alt="">
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<div align="left" style="margin-left: 60px;" class="hanggao3">
										友情提示：最多可输入20000字，支持图文并茂排版，可通过Ctrl+V粘贴内容到正文
									</div>
								</el-col>
								<el-col :span="20">
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
					</el-col>
				</el-row>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpxin',
		data() {
			return {
				// 步骤条
				active: 0,
				value:true,
				fileList: [{
					name: 'food.jpeg',
					url: '../../../../../public/images/2.png'
				}, {
					name: 'food2.jpeg',
					url: '../../../../../public/images/2.png'
				}]
			};
		},
		methods: {
			beforeRemove(file) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			}
		}
	}
</script>

<style>
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
	}

	.neirong2 label {
		margin-right: 10px;
	}

	.neirong2 {
		padding: 10px;
		background: #fff;
	}

	.neirong2 input[type=text] {
		padding: 1%;
	}

	.neirong2 select {
		padding: 1% 18% 1% 1%;
		color: #666;
	}

	.neirong2 .hanggao3 {
		line-height: 40px;
	}

	.neirong2 .jieshi {
		margin-bottom: 1% !important;
	}

	.neirong2>div {
		margin-bottom: 3%;
	}

	.hong2 {
		color: red;
	}

	.backColor3 {
		padding: 30px 0;
		height: 527px;
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

	/* .adds {
		width: 1102px;
	} */

	/* .adds header {
		height: 70px;
		padding-top: 20px;
		background: #e4e4e4;
	} */

	/* .adds .el-step__main {
		white-space: normal;
		text-align: center;
	} */

	/* .cent {} */

	.fshi {
		width: 922px;
		margin-top: 20px;
	}

	.fshi input {
		/* width: 100px;
		height: 30px;
		border-radius: 5px 5px;
		margin-right: 10px; */
	}

	.xing {
		color: red;
	}
</style>
