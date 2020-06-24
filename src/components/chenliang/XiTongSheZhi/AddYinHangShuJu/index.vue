<!-- 系统设置-银行数据-添加 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="dengji" align="left">
					<i class="el-icon-s-home"></i>首页/设置/通用参数配置/银行数据字典
				</div>
				<div class="addGuan222" align="left">添加银行数据字典</div>
				<div align="center">
					<table width="100%" class="addBuMen777">
						<tr height="40px">
							<td align="right" width="30%"><span>*</span>银行名称：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>银行LOGO：</td>
							<td align="left">
								<span><el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
									<el-form-item required>
										<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
											<i class="el-icon-upload" style="font-size: 1.25rem;margin-top: -0.325rem;margin-left: -6.25rem;"></i>
											<div class="el-upload__text" style="margin-top: -3.80rem;margin-left: 1.55rem;"><span style="color: #B8B8B8;">选择上传文件</span></div>
											<div class="el-upload__tip" slot="tip" style="margin-top: -1.25rem;"><span style="color: #B8B8B8;">只能上传jpg/png格式文件，文件不能超过50kb；建议上传尺寸100*100px。</span></div>
										</el-upload>
									</el-form-item>
								</el-form></span>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">是否启用：</td>
							<td align="left">
								<label><input type="radio" name="huiyuan">是</label>
								<label><input type="radio" name="huiyuan">否</label>
							</td>
						</tr>
						<tr>
							<td align="right">排序值：</td>
							<td align="left">
								<input type="text" placeholder="0">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
								排序值越大，显示越靠前
							</td>
						</tr>
						<tr height="70px">
							<td align="right">描述信息：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
						</tr>
						<tr height="20px"></tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left"><span class="submit4">提交</span></td>
						</tr>
					</table>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data(){
			return{
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
			}
		}
	}
</script>

<style scoped>
	.shangchuan2{
		padding: 10px 15px;
		color:#000 !important;
		border: 1px solid #E4E4E4;
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
