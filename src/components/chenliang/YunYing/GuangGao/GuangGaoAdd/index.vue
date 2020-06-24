<!-- 运营管理-广告-添加 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="jiekuan">
					<i class="el-icon-s-home"></i>首页/运营管理/产品管理
					<span style="border: 1px solid #E4E4E4; padding: 3px 7px;float: right;">
						<router-link to="/index/YunYing/GuangGao" tag="span">
							<i class="el-icon-arrow-left"></i> 返回
						</router-link>
					</span>
					<div class="clear"></div>
				</div>
				<div class="addGuan" align="left">添加广告</div>
				<div align="center">
					<table width="100%" class="addBuMen222">
						<tr>
							<td align="right" width="30%"><span>*</span>广告名称：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="30px">
							<td align="right"></td>
							<td align="left">广告名称只是作为辨别多个广告条目之用，并不显示在广告中</td>
						</tr>
						<tr height="50px">
							<td align="right">广告位置：</td>
							<td align="left">
								<select name="" id="">
									<option value="请选择">请选择</option>
								</select>
							</td>
						</tr>
						<tr height="40px">
							<td align="right">开始时间：</td>
							<td align="left">
								<input type="text" placeholder="请选择时间">
							</td>
						</tr>
						<tr height="40px">
							<td align="right">到期时间：</td>
							<td align="left">
								<input type="text" placeholder="请选择时间">
							</td>
						</tr>
						<tr height="40px">
							<td align="right">上线/下线：</td>
							<td align="left">
								<label><input type="radio" name="abc">上线</label>
								<label><input type="radio" name="abc">下线</label>
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
							<td align="right"><span>*</span>广告链接：</td>
							<td align="left"><input type="text" placeholder="http://"></td>
						</tr>
						<tr height="40px">
							<td align="right"><span>*</span>广告备注：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
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