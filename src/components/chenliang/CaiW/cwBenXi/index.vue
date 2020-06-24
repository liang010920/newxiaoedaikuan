<!-- 财务管理-本息收支对账日志 -->
<template>
	<el-container>
		<el-main>
			<div class="benxi">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">财务管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>财务款项台账</el-breadcrumb-item>
						<el-breadcrumb-item>本息收支对账日志</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<input type="text" placeholder="借款编号">
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
							<el-button type="info">查询</el-button>
						</el-row>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<div class="buts">
						<button><i class="el-icon-printer"></i>打印</button>
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column prop="riqi" label="对账日期">
					</el-table-column>
					<el-table-column prop="number" label="借款编号">
					</el-table-column>
					<el-table-column prop="benjin" label="本金(元)">
					</el-table-column>
					<el-table-column prop="lixi" label="利息(元)">
					</el-table-column>
					<el-table-column prop="ren" label="对账人员">
						<span>3个月<br />先息后本</span>
					</el-table-column>
					<el-table-column prop="beizhu" label="对账备注">
					</el-table-column>
					<el-table-column prop="shuo" width="110px" label="冲正说明">
					</el-table-column>
					<el-table-column label="操作" width="90px">
						<el-button type="text" @click="dele">撤销
						</el-button>
					</el-table-column>
				</el-table>
			</div>
			<template>
				<div class="block margin2">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"  :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
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
		name: 'cwbenxi',
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
			}
		},
		// 添加数据
		data() {
			return {
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					riqi: '2018-01-12 14:25:47',
					number: '100001',
					benjin: '0.00',
					lixi: '收入 500.00',
					ren: 'admin',
					beizhu: '',
					shuo: ''
				}, {
					riqi: '2018-01-12 14:25:47',
					number: '100001',
					benjin: '收入 10,000.00',
					lixi: '0.00',
					ren: 'admin',
					beizhu: '',
					shuo: ''
				}, {
					riqi: '2018-01-12 14:25:47',
					number: '100001',
					benjin: '支出 10,000.00',
					lixi: '0.00',
					ren: 'admin',
					beizhu: '',
					shuo: ''
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style scoped>
	.benxi {
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

	.buts button {
		height: 34px;
		margin-left: 10px;
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
</style>
