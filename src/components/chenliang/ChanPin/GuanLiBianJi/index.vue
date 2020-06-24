<!-- 贷款产品管理，编辑页面 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							贷款产品详情
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
			<div>
					<ul class="biaoti2" align="left">
						<li>基本信息</li>
						<li>产品参数</li>
						<li>申请材料</li>
					</ul>
				<el-row>
					<el-col :span="4">
						<div class="backColor3">
							<div class="jiben">基本信息</div>
							<div class="canshu">贷款参数</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="neirong2">
							<el-row class="jieshi">
								<el-col :span="4">
									<div align="right" class="hanggao3">
										<span class="hong2">*</span>产品名称：
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
										<span class="hong2">*</span>贷款类型：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<select>
											<option value="请选择">请选择</option>
										</select>
										<select>
											<option value="请选择">请选择</option>
										</select>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right" class="hanggao3">
										<span class="hong2">*</span>产品封面：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
										:before-remove="beforeRemove" multiple :limit="3"
										:file-list="fileList">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right" class="hanggao3">
										<span class="hong2">*</span>产品介绍：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<textarea cols="50" rows="10"></textarea>
									</div>
								</el-col>
							</el-row>
							<el-row class="jieshi">
								<el-col :span="4">
									<div align="right" class="hanggao3">
										<span class="hong2">*</span>产品亮点：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<textarea cols="50" rows="10"></textarea>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										<span class="hong2">*</span>产品标签：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="checkbox" name="biaoqian">新品</label>
										<label><input type="checkbox" name="biaoqian">推荐</label>
										<label><input type="checkbox" name="biaoqian">精品</label>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										<span class="hong2">*</span>放款通道：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="radio" checked name="shifou">委托银行放款</label>
										<label><input type="radio" name="shifou">线下放款</label>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										<span class="hong2">*</span>贷款额度范围：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<input type="text"> - <input type="text"> 元
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										<span class="hong2">*</span>还款方式：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="radio" checked name="fangshi">等额本息</label>
										<label><input type="radio" name="fangshi">等本等息</label>
										<label><input type="radio" name="fangshi">先息后本</label>
										<label><input type="radio" name="fangshi">一次性还息付本</label>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										<span class="hong2">*</span>贷款期限：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="checkbox" name="qixian">1个月</label>
										<label><input type="checkbox" name="qixian">3个月</label>
										<label><input type="checkbox" name="qixian">6个月</label>
										<label><input type="checkbox" name="qixian">9个月</label>
										<label><input type="checkbox" name="qixian">12个月</label>
										<label><input type="checkbox" name="qixian">18个月</label>
										<label><input type="checkbox" name="qixian">24个月</label>
										<label><input type="checkbox" name="qixian">36个月</label>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right" style="padding: 1px;">
									</div>
								</el-col>
								<el-col :span="20">
									<router-link tag="span" to="/cp/cpxin2">
										<div align="left" class="submit2">
											下一步，产品参数配置
										</div>
									</router-link>
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
	.biaoti2>li:first-child{
		border-bottom: 1px solid #333;
	}
	.biaoti2>li:hover{
		cursor: pointer;
		opacity: 0.8;
	}
	.biaoti2{
		background: #F8F8F8;
		font-size: 22px;
	}
	.biaoti>li>p{
		border-bottom: 2px solid #D4D4D4;
		padding: 0 70px;
		margin-top: -10px;
	}
	.biaoti>li:nth-of-type(2)>p{
		border-bottom: 2px solid #666;
	}
	.biaoti2>li{
		display: inline-block;
		margin-right: 15px;
		padding: 2%;
	}
	.biaoti>li>span{
		border: 2px solid #d4d4d4;
		padding: 5px 10px;
		background: #fff;
		border-radius: 50%;
		color:#d4d4d4;
	}
	.biaoti>li>div{
		color:#999;
		margin-top: 10px;
	}
	.biaoti>li:nth-of-type(1)>span{
		border: 2px solid #666;
		background: #666;
		color:#fff;
	}
	.biaoti>li:nth-of-type(1)>div{
		color:#666;
	}
	.jiben{
		padding: 10px 0;
		background: #9ea7b4;
		color:#fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}
	.canshu{
		margin-top: 100%;
		padding: 10px 0;
		background: #9ea7b4;
		color:#fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}
	.submit2{
		width: 200px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		text-align: center;
	}
	.neirong2 label{
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
		height:936px;
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
