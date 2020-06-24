<!-- 系统设置-平台信息设置 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="jiekuan">
					<i class="el-icon-s-home"></i>首页/设置/平台信息
					<!-- <span style="border: 1px solid #E4E4E4; padding: 3px 7px;float: right;">
						<router-link to="/index/YunYing/GuangGao" tag="span">
							<i class="el-icon-arrow-left"></i> 返回
						</router-link>
					</span> -->
					<div class="clear"></div>
				</div>
				<div class="addGuan" align="left">平台信息设置</div>
				<div align="center">
					<table width="100%" class="addBuMen222">
						<tr height="40px">
							<td align="right" width="30%"><span>*</span>平台名称：</td>
							<td align="left"><input type="text" placeholder="平台简称,建议不超过4个字"></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>平台标题：</td>
							<td align="left">
								<input type="text" placeholder="平台完整名称">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>平台描述：</td>
							<td align="left">
								<input type="text">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>关键词：</td>
							<td align="left">
								<input type="text">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"></td>
							<td align="left">
								用于搜索优化，多个可用英文逗号隔开
							</td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>广告图片：</td>
							<td align="left">
								<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
									<el-form-item required>
										<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
											<i class="el-icon-upload" style="font-size: 1.25rem;margin-top: -0.325rem;margin-left: -6.25rem;"></i>
											<div class="el-upload__text" style="margin-top: -3.80rem;margin-left: 1.55rem;"><span style="color: #B8B8B8;">选择上传文件</span></div>
											<div class="el-upload__tip" slot="tip" style="margin-top: -1.25rem;"><span style="color: #B8B8B8;">只能上传jpg/png文件,文件不能超过200kb</span></div>
										</el-upload>
									</el-form-item>
								</el-form>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">客户热线：</td>
							<td align="left">
								<input type="text">
							</td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>客户邮箱：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>微信公众号名称：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>公众号二维码：</td>
							<td align="left"><img src="../../../../../public/images/2.png" alt=""></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>广告备注：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>用户协议：</td>
							<td align="left">
								<img src="../../../../../public/images/daiHouInfo.png" alt="">
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