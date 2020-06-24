<!-- 贷后检查列表-查看 -->
<template>
	<el-container>
		<el-main>
			<div class="shouxin">
				<div class="floatL">
					贷后报告-ALT201812181528964
				</div>
				<div class="floatR3">
					<div class="kuan">
						<span class="fan22">
							<i class="el-icon-printer"></i>
							打印
						</span>
						<span class="fan22">
							<router-link to="/index/JianCha" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</span>
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<div align="left" class="neirong" style="margin-top: 15px;">
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<h3>贷后内容</h3>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right" style="line-height: 35px;">贷款编号：</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light">
							<div align="left">
								<template>
									<select placeholder="请选择" class="bianhao">
										<option value="100001">100001</option>
										<option value="100002">100002</option>
										<option value="100003">100003</option>
										<option value="100004">100004</option>
									</select>
								</template>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div style="padding: 1px;"></div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div>
								<span>贷款姓名：张某某</span>
								<span>贷款期限：24期</span>
								<span>贷款金额：48000元</span>
								<span>贷款剩余：38500元</span>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right">
								检查方式：
							</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div class="radio">
								<label><input type="radio" name="fangshi"> 电话检查</label>
								<label><input type="radio" name="fangshi"> 实地检查</label>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right">
								检查原因：
							</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div class="radio">
								<label><input type="radio" name="fangshi"> 首次检查</label>
								<label><input type="radio" name="fangshi"> 日常检查</label>
								<label><input type="radio" name="fangshi"> 逾期检查</label>
								<label><input type="radio" name="fangshi"> 其它</label>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right">
								检查内容：
							</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div>
								<img src="../../../../../../public/images/daiHouInfo.png" alt="">
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div style="padding: 1px;"></div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div>
								<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange"
								:file-list="fileList">
									<el-button size="small" type="primary" class="shangchuan">上传附件</el-button>
									<span slot="tip" class="el-upload__tip"> 只能上传jpg/png文件，且不超过500kb</span>
								</el-upload>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<h3>贷后处理意见</h3>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right">
								贷款归类：
							</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div class="radio2">
								<label><input type="radio" name="fangshi"> 正常贷款</label>
								<label><input type="radio" name="fangshi"> 关注贷款</label>
								<label><input type="radio" name="fangshi"> 次级贷款</label>
								<label><input type="radio" name="fangshi"> 可疑贷款</label>
								<label><input type="radio" name="fangshi"> 损失贷款</label>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row width="100%">
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<div align="right">
								具体建议：
							</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple-light xiangxiInfo">
							<div class="border3"></div>
						</div>
					</el-col>
				</el-row>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'DaiHouChaKan',
		data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: '../../../../../../public/images/daiHouInfo.png?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: '../../../../../../public/images/daiHouInfo.png?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
	}
</script>

<style>
	.floatR3{
		float: right;
	}
	.fan22{
		border: 1px solid #e4e4e4;
		padding: 4px 7px;
		margin-left: 10px;
	}
	.border3{
		border: 2px solid #B1B1B1;
		height: 100px;
	}
	.shangchuan{
		background: transparent;
		color: #000;
		border: 1px solid #ccc;
	}
	.radio>label {
		margin-right: 20px;
	}
	.radio2{
		padding: 10px;
		border: 1px solid #E4E4E4;
	}
	.radio2>label {
		display: block;
		margin-bottom: 10px;
	}
	.neirong>div {
		margin-bottom: 30px;
	}

	.neirong>div:first-child {
		margin-bottom: 10px !important;
	}

	.neirong>div:nth-child(2) {
		margin-bottom: 10px !important;
	}

	.bianhao {
		background: #F9FAFC;
		padding: 10px 90px 10px 10px;
		color: #ccc;
		border-radius: 2px;
		border: 1px solid;
	}
	
	.xiangxiInfo{
		width: 61%;
	}

	.xiangxiInfo div span {
		margin-rigth: 20px;
	}
</style>
