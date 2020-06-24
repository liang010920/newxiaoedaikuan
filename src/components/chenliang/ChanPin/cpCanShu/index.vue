<!-- 贷款产品参数配置列表 -->
<template>
	<el-container>
		<el-main>
			<div id="indi">
				<!-- 头部 -->
				<div class="header" style="float: left;margin: 10px 0;">
					<el-button type="text" @click="dialogShuZu=true"><i class="el-icon-circle-plus-outline yuan">
							添加参数组
						</i></el-button>
					<!-- 添加参数组 -->
					<el-dialog title="添加参数组" :visible.sync="dialogShuZu">
						<div>
							<table width="100%" class="addBuMen1">
								<tr height="50px">
									<td align="right"><span>*</span>参数组名称：</td>
									<td align="left"><input type="text"></td>
								</tr>
								<tr height="50px">
									<td align="right"><span>*</span>参数组分类：</td>
									<td align="left">
										<select name="" id="">
											<option value="请选择">请选择</option>
										</select>
									</td>
								</tr>
								<tr>
									<td align="right"><span>*</span>排序值：</td>
									<td align="left"><input type="text"></td>
								</tr>
								<tr height="50px">
									<td align="right"></td>
									<td align="left">排序值越小显示越靠前，不填写默认为0</td>
								</tr>
								<tr>
									<td align="right">是否启动：</td>
									<td align="left">
										<label><input type="radio" name="abc" checked="checked">启用</label>
										<label><input type="radio" name="abc">关闭</label>
									</td>
								</tr>
								<tr height="40px">
									<td align="right"></td>
									<td align="left">
										启用后配置贷款产品时，可使用该参数组
									</td>
								</tr>
							</table>
						</div>
						<div slot="footer" class="dialog-footer">
							<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
						</div>
					</el-dialog>
					<!-- 编辑参数组 -->
					<el-dialog title="编辑参数组" :visible.sync="dialogShuZu2">
						<div>
							<table width="100%" class="addBuMen1">
								<tr height="50px">
									<td align="right"><span>*</span>参数组名称：</td>
									<td align="left"><input type="text"></td>
								</tr>
								<tr height="50px">
									<td align="right"><span>*</span>参数组分类：</td>
									<td align="left">
										<select name="" id="">
											<option value="请选择">请选择</option>
										</select>
									</td>
								</tr>
								<tr>
									<td align="right"><span>*</span>排序值：</td>
									<td align="left"><input type="text"></td>
								</tr>
								<tr height="50px">
									<td align="right"></td>
									<td align="left">排序值越小显示越靠前，不填写默认为0</td>
								</tr>
								<tr>
									<td align="right">是否启动：</td>
									<td align="left">
										<label><input type="radio" name="abc" checked="checked">启用</label>
										<label><input type="radio" name="abc">关闭</label>
									</td>
								</tr>
								<tr height="40px">
									<td align="right"></td>
									<td align="left">
										启用后配置贷款产品时，可使用该参数组
									</td>
								</tr>
							</table>
						</div>
						<div slot="footer" class="dialog-footer">
							<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
						</div>
					</el-dialog>
				</div>
				<div class="indi-centre">
					<!-- 侧边栏 -->
					<div class="indi-left">
						<ul>
							<li class="active">个人信息</li>
							<li>居住信息</li>
							<li>资产信息</li>
							<li>联系人信息</li>
							<li>职业信息</li>
							<li>身份信息</li>
							<li>银行信息</li>
							<li>公司信息</li>
							<li>私营业主补充信息</li>
							<li>车辆信息</li>
							<li>房产信息</li>
							<li>其它房产信息</li>
							<li>保险信息</li>
						</ul>
					</div>
					<!-- 右边表格 -->
					<div class="indi-right" style="width: 90%">
						<p class="rip" style="width: 90%">
							<span style="float: left;">个人信息配置</span>
							<span id="risp1">
								<el-button type="text" @click="dialogFormVisible=true"><i class="el-icon-plus add">添加参数项</i></el-button>
							</span>
							<span class="risp2">
								<button type="button"  @click="dialogShuZu2=true">编辑参数组</button>
								<button type="button" @click="listDelete">删除参数组</button>
							</span>
						</p>
						<!-- 点击添加参数项 -->
						<el-dialog title="添加参数项" :visible.sync="dialogFormVisible">
							<div>
								<table width="100%" class="addBuMen1">
									<tr height="50px">
										<td align="right"><span>*</span>参数名：</td>
										<td align="left"><input type="text"></td>
									</tr>
									<tr height="50px">
										<td align="right"><span>*</span>参数类型：</td>
										<td align="left">
											<select name="" id="">
												<option value="请选择">请选择</option>
											</select>
										</td>
									</tr>
									<tr height="40px">
										<td align="right"></td>
										<td align="left">
											<label><input type="radio" name="abc" checked="checked">单选项</label>
											<label><input type="radio" name="abc">多选项</label>
										</td>
									</tr>
									<tr height="40px">
										<td align="right"><span>*</span>选择项：</td>
										<td align="left"><textarea placeholder="请输入可选择项,用回车分隔"></textarea></td>
									</tr>
									<tr>
										<td align="right"><span>*</span>是否必填：</td>
										<td align="left"><el-switch v-model="value"></el-switch></td>
									</tr>
									<tr height="40px">
										<td align="right"></td>
										<td align="left">非必填</td>
									</tr>
								</table>
							</div>
							<div slot="footer" class="dialog-footer">
								<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
							</div>
						</el-dialog>
						<!-- 点击添加参数项 -->
						<el-dialog title="添加参数项" :visible.sync="dialogFormVisible2">
							<div>
								<table width="100%" class="addBuMen1">
									<tr height="50px">
										<td align="right"><span>*</span>参数名：</td>
										<td align="left"><input type="text"></td>
									</tr>
									<tr height="50px">
										<td align="right"><span>*</span>参数类型：</td>
										<td align="left">
											<select name="" id="">
												<option value="请选择">请选择</option>
											</select>
										</td>
									</tr>
									<tr height="40px">
										<td align="right"></td>
										<td align="left">
											<label><input type="radio" name="abc" checked="checked">单选项</label>
											<label><input type="radio" name="abc">多选项</label>
										</td>
									</tr>
									<tr height="40px">
										<td align="right"><span>*</span>选择项：</td>
										<td align="left"><textarea placeholder="请输入可选择项,用回车分隔"></textarea></td>
									</tr>
									<tr>
										<td align="right"><span>*</span>是否必填：</td>
										<td align="left"><el-switch v-model="value"></el-switch></td>
									</tr>
									<tr height="40px">
										<td align="right"></td>
										<td align="left">非必填</td>
									</tr>
								</table>
							</div>
							<div slot="footer" class="dialog-footer">
								<el-button type="primary" @click="dialogFormVisible2 = false">保存</el-button>
							</div>
						</el-dialog>

						<el-table :data="message" stripe style="width: 90%;border: 1px solid #E4E4E4;">
							<el-table-column style="color: #70B6FD;" prop="name" label="参数名">
							</el-table-column>
							<el-table-column prop="type" label="参数类型">
							</el-table-column>
							<el-table-column prop="xuanze" label="可选择值" width="240">
							</el-table-column>
							<el-table-column prop="bitian" label="必填">
							</el-table-column>
							<el-table-column prop="operate" label="操作">
								<!-- 编辑 -->
								<i class="el-icon-edit"  @click="dialogFormVisible2 = true"></i>
								<!-- 删除 -->
								<i class="el-icon-close" @click="deletes"></i>
								<i class="el-icon-arrow-up"></i>
								<i class="el-icon-arrow-down"></i>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpcanshu',
		// 个人信息配置表格
		data() {
			return {
				kaig: false,
				value:true,
				//添加参数组
				dialogShuZu: false,
				//编辑
				dialogShuZu2: false,
				//添加参数项
				dialogFormVisible: false,
				dialogFormVisible2: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					name: '本人姓名',
					type: '输入框',
					xuanze: '-',
					bitian: '是',
					operate: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '手机号1',
					type: '输入框',
					xuanze: '-',
					bitian: '是',
					operate: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '手机号2',
					type: '输入框',
					xuanze: '-',
					bitian: '否',
					operate: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '身份证',
					type: '输入框',
					xuanze: '-',
					bitian: '是',
					operate: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '性别',
					type: '选择项(单选)',
					xuanze: '男，女',
					bitian: '是',
					operate: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '兴趣爱好',
					type: '选择项(多选)',
					xuanze: '运动,旅游,娱乐,炒股,文艺控,腐女',
					bitian: '否',
					operate: '上海市普陀区金沙江路 1518 弄'
				}],
				formLabelWidth: '120px'
			}
		},
		methods: {
			//删除参数组
			listDelete() {
				this.$confirm('确定要删除参数组吗?', '删除确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			// 删除参数项
			deletes() {
				this.$confirm('确定要删除该参数吗?', '删除确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}

		}
	}
</script>

<style scoped>
	
	.addBuMen1 {
		font-size: 16px;
	}
	
	.addBuMen1 td {
		vertical-align: top;
	}
	
	.addBuMen1>tr>td>span {
		color: red;
	}
	
	.addBuMen1>tr>td>label {
		margin-right: 15px;
	}
	
	.addBuMen1 select{
		width: 85%;
		padding: 10px;
		color: #999;
	}
	
	.addBuMen1 textarea {
		width: 80%;
		height: 150px;
		padding: 5px 10px;
	}
	
	.addBuMen1 input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}
	.el-form-item *{
		display: inline-block;
	}
	.el-input {
		width: 80% !important;
	}

	.el-input__inner:hover {
		border-color: #C0C4CC;
	}

	.el-input__inner {
		padding: 10px !important;
		width: 60% !important;
		text-align: center;
		height: 34px;
		-webkit-appearance: none;
		background-color: #FFF;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #DCDFE6;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		font-size: inherit;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		width: 100%;
	}

	#indi {
		width: 1102px;
	}

	.xuanx input {
		margin-left: 20px;
	}

	.qi input {
		margin-left: 20px;
	}

	.qi input:nth-child(1) {
		margin-left: -200px;
	}

	.qi span {
		color: #BFBFBF;
	}

	.el-dialog__header {
		background: #F2F2F2;
	}

	.dialog-footer {
		border-top: 1px solid #E4E4E4;
		text-align: center;
		padding-top: 15px;
	}

	.dialog-footer button {
		background: #000000;
	}

	#indi .header {
		width: 1102px;
		padding-bottom: 11px;
		border-bottom: 1px solid #E4E4E4;
	}

	#indi .header el-button {
		float: left;
	}

	.el-button--text {
		float: left;
	}

	.yuan {
		width: 120px;
		height: 30px;
		text-align: center;
		line-height: 32px;
		border: 1px dashed #E4E4E4;
	}

	.indi-centre {
		clear: both;
	}

	.indi-right {
		margin-left: 170px;
	}

	.rip {
		color: #676767;
		font-size: 20px;
		float: left;
		font-weight: 700;
		padding-bottom: 20px;
	}

	#risp1 button {
		color: #027AFE;
		font-size: 14px;
		margin-left: 53px;
	}

	.risp2 {
		float: right;
	}

	.risp2 button {
		width: 93px;
		font-size: 14px;
		margin-left: 15px;
		height: 31px;
	}

	.indi-left {
		float: left;
	}

	.indi-left ul {
		text-align: center;
		list-style: none;
		background-color: #F2F2F2;
	}

	.indi-left ul li {
		width: 140px;
		height: 40px;
		line-height: 40px;
	}

	.indi-left ul li.active {
		color: white;
		background-color: #000000;
	}

	.el-table .cell {
		text-align: center;
	}
</style>
