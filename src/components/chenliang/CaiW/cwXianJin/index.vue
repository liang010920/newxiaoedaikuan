<!-- 财务管理-现金流录入 -->
<template>
	<el-container>
		<el-main>
			<div class="xianjin">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">财务管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>财务款项台账</el-breadcrumb-item>
						<el-breadcrumb-item>现金流录入</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<template>
							<el-select v-model="value" placeholder="流水类型">
								<el-option value="aa"></el-option>
							</el-select>
						</template>
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item>
								<el-col :span="11">
									<el-date-picker class="riqi" type="date" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col :span="11">
									<el-time-picker placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
								</el-col>
							</el-form-item>
						</el-form>
						<el-row>
							<el-button type="primary" @click="openFullScreen2">查询</el-button>
						</el-row>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<div class="buts1">
						<input type="button" name="" @click="openFullScreen2" value="新增流水" />
						<button><i class="el-icon-printer"></i>打印</button>
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column prop="number" style="width: 131px;" label="流水编号">
					</el-table-column>
					<el-table-column prop="riqi" label="交易日期">
					</el-table-column>
					<el-table-column prop="zhai" label="摘要">
					</el-table-column>
					<el-table-column prop="shou" label="收入">
					</el-table-column>
					<el-table-column prop="zhichu" label="支出">
						<span>3个月<br />先息后本</span>
					</el-table-column>
					<el-table-column prop="shijian" label="录入时间">
					</el-table-column>
					<el-table-column prop="bei" width="110px" label="备注">
					</el-table-column>
					<el-table-column label="操作" width="175px">
						<el-button type="text" @click="dialogTableVisible2 = true">编辑</el-button>
						<el-button type="text" @click="dialogShuZu=true">删除</el-button>
					</el-table-column>
				</el-table>
				<!-- 编辑 -->
				<el-dialog title="编辑" :visible.sync="dialogTableVisible2">
					<div>
						<table width="100%" class="addBuMen">
							<tr height="50px">
								<td align="right"><span>*</span>流水账号：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">交易日期：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">摘要：</td>
								<td align="left"><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">收入：</td>
								<td align="left"><input type="text"></td>
							</tr>
						</table>
					</div>
					<div align="center" slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible2 = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible2 = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<!-- 删除 -->
				<el-dialog :visible.sync="dialogShuZu">
					<el-form :model="form">
						<el-form-item :label-width="formLabelWidth">
							<div class="gou" align="center">
								<i class="el-icon-check"></i>
								操作成功
							</div>
						</el-form-item>
					</el-form>
				</el-dialog>

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
		name: 'cwxianjin',
		methods: {
			// 撤销
			dele() {
				this.$confirm('确定要撤销该条对账吗?', '删除确认', {
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
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			// 查询
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: '正在处理',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			}
		},
		// 添加数据
		data() {
			return {
				dialogShuZu: false,
				currentPage4: 5,
				dialogTableVisible2 : false,
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					number: 'RY201811111111',
					riqi: '2018-07-19',
					zhai: 'GPS安装费',
					shou: '+500.00',
					zhichu: '',
					shijian: '2018-07-19 14:48:38',
					bei: '-'
				}, {
					number: 'RY201811111111',
					riqi: '2018-07-19',
					zhai: '其他',
					shou: '',
					zhichu: '-500.00',
					shijian: '2018-07-19 14:48:38',
					bei: '投资人购车款'
				}, {
					number: 'RY201811111111',
					riqi: '2018-07-19',
					zhai: 'GPS安装费',
					shou: '+500.00',
					zhichu: '',
					shijian: '2018-07-19 14:48:38',
					bei: '投资人购车款'
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style scoped>
	.xianjin {
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

	.shuju .buts1 {
		float: right;
		margin-right: 100px;
	}

	.buts1 button {
		height: 34px;
		margin-left: 10px;
	}

	.buts1 input {
		color: white;
		background: #000000;
		width: 75px;
		height: 34px;
		border-radius: 5px 5px;
	}

	.bgColor2 .el-button--primary {
		width: 80px;
		height: 30px;
		line-height: 5px;
		color: white;
		background: #6C6C6C;
		border-color: #6C6C6C;
		border-radius: 10px 10px 10px 10px;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text {
		color: #676767;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.el-form-item .el-form-item__content {
		background: black;
		width: 150px;
		height: 150px;
		color: white;
		line-height: 150px;
		border-radius: 50%;
		margin-left: 0 !important;
	}

	.el-dialog__body {
		text-align: center;
	}

	.gou {
		background: black;
		width: 150px;
		height: 150px;
		color: white;
		line-height: 150px;
		border-radius: 50%;
		margin-left: 35% !important;
	}
</style>
