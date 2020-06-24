<!-- 财务管理-银行流水录入 -->
<template>
	<el-container>
		<el-main>
			<div class="yinhang">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">财务管理</a></el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">银行账户管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>银行流水录入</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<select>
							<option value="对方账号">对方账号</option>
							<option value="对方账号1">对方账号1</option>
						</select>
						<input type="text" placeholder="借款账号">

						<select>
							<option value="摘要">摘要</option>
							<option value="摘要1">摘要1</option>
						</select>
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item>
								<el-col :span="11">
									<el-date-picker class="riqi" type="date" placeholder="请选择" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col :span="11">
									<el-time-picker placeholder="请选择" v-model="form.date2" style="width: 100%;"></el-time-picker>
								</el-col>
							</el-form-item>
						</el-form>
						<el-row>
							<el-button type="info">查询</el-button>
						</el-row>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<div class="buts">
						<input type="button" @click="dialogTableVisible2=true" value="摘要分类管理">
						<router-link to="/cw/cwyhbian"><button>录入</button></router-link>
						<button><i class="el-icon-printer"></i>打印</button>
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<!-- 录入 -->
				<el-dialog title="录入" :visible.sync="dialogTableVisible">
					<div>
						<table width="100%" class="luru">
							<tr height="50px">
								<td align="right"><span>*</span>日期：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">摘要：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">凭证号：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">账户类型：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr>
								<td align="right"><span>*</span>职能描述：</td>
								<td align="left"><textarea placeholder="请输入内容"></textarea></td>
							</tr>
						</table>
					</div>
					<div align="center" slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<!-- 摘要分类 -->
				<el-dialog title="摘要管理" :visible.sync="dialogTableVisible2">
					<div>
						<table width="100%" align="center" border="1" class="luru">
							<tr height="">
								<td align="center">摘要名称</td>
								<td align="center">备注</td>
								<td align="center">操作</td>
							</tr>
							<tr height="">
								<td align="center">贷款发放</td>
								<td align="center"></td>
								<td align="center">编辑</td>
							</tr>
							<tr height="">
								<td align="center">本金归还</td>
								<td align="center"></td>
								<td align="center">编辑</td>
							</tr>
							<tr height="">
								<td align="center">利息归还	</td>
								<td align="center"></td>
								<td align="center">编辑</td>
							</tr>
						</table>
					</div>
					<div align="center" slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible2 = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible2 = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column prop="riqi" label="日期">
					</el-table-column>
					<el-table-column prop="ping" label="凭证号">
					</el-table-column>
					<el-table-column prop="zhai" label="摘要">
					</el-table-column>
					<el-table-column prop="zhuan" label="转出/转入">
					</el-table-column>
					<el-table-column prop="jiefang" label="借方发生额">
					</el-table-column>
					<el-table-column prop="daifang" label="贷方发生额">
					</el-table-column>
					<el-table-column prop="fangshi" width="110px" label="发生账户">
					</el-table-column>
					<el-table-column prop="hu" label="账户户名">
					</el-table-column>
					<el-table-column prop="bei" label="备注">
					</el-table-column>
					<el-table-column label="操作" width="175px">
						<el-button type="text">
							<router-link to="/cw/cwyhbian">编辑</router-link>
						</el-button>
						<el-button type="text" @click="dele">删除</el-button>
					</el-table-column>
				</el-table>
			</div>
			<template>
				<div class="block margin2">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
					</el-pagination>
				</div>
			</template>
			<template>
				<div>
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cwyhls',
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// 删除
			dele() {
				this.$confirm('确定要删除该条银行流水吗?', '删除确认', {
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
		},
		// 添加数据
		data() {
			return {
				dialogTableVisible:false,
				dialogTableVisible2:false,
				currentPage4: 5,
				// 审核
				dialogShen: false,
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					riqi: '2018/01/01',
					ping: '0',
					zhai: '本息还款',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '提前还款手续费',
					zhuan: '转出',
					jiefang: '0.00',
					daifang: '485.25',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '本金还款',
					zhuan: '转入',
					jiefang: '530,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '利息还款',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '发放贷款',
					zhuan: '转出',
					jiefang: '0.00',
					daifang: '480000.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '发放贷款',
					zhuan: '转出',
					jiefang: '0.00',
					daifang: '480000.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '提现手续费',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '提现手续费',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '提现手续费',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '提现手续费',
					zhuan: '转入',
					jiefang: '130,564.00',
					daifang: '0.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}, {
					riqi: '2018/01/01',
					ping: '0',
					zhai: '罚息',
					zhuan: '转出',
					jiefang: '0.00',
					daifang: '130,564.00',
					fangshi: '6228888888888',
					hu: '深圳市51贷款有限公司',
					bei: ''
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style>
	.luru {
		font-size: 16px;
	}
	
	.luru td {
		vertical-align: top;
	}
	
	.luru>tr>td>span {
		color: red;
	}
	
	.luru>tr>td>label {
		margin-right: 15px;
	}
	
	.luru textarea {
		width: 80%;
		height: 150px;
		padding: 5px 10px;
	}
	
	.luru input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}
	.yinhang {
		width: 1102px;
	}

	header {
		height: 165px;
		background-color: #F2F2F2;
	}

	.el-breadcrumb {
		margin-left: 60px;
		font-size: 14px;
		line-height: 1;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.but {
		float: left;
		height: 80px;
		width: 1000px;
		margin-left: 30px;
		line-height: 80px;
		background-color: white;
	}

	.but .el-select {
		float: left;
		width: 167px;
		margin-left: 30px;
	}

	.but .el-button--primary {
		width: 80px;
		height: 30px;
		line-height: 5px;
		color: white;
		margin-left: -450px;
		background: #6C6C6C;
		border-color: #6C6C6C;
		border-radius: 10px 10px 10px 10px;
	}

	.shuju {
		padding-top: 20px;
		padding-bottom: 50px;
		background: #F3F3F3;
		border: 1px solid #E4E4E4;
	}

	.shuju>p {
		float: left;
		font-weight: 700;
		margin-left: 40px;
	}

	.shuju .buts {
		float: right;
		margin-right: 100px;
	}

	.buts input {
		height: 34px;
		color: white;
		width: 120px;
		margin-left: 10px;
		background: #9A9A9A;
		border-radius: 5px 5px;
	}

	.buts button {
		height: 34px;
		width: 60px;
		margin-left: 10px;
	}

	.buts button:nth-of-type(1) {
		height: 34px;
		width: 60px;
		color: white;
		border-radius: 5px 5px;
		background: black;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text span {
		color: #676767;
	}
	.cell .el-button--text span a {
		color: #676767;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}
</style>
