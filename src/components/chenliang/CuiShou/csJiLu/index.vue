<!-- 催收管理-催收记录 -->
<template>
	<el-container>
		<el-main>
			<div class="jilu">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">催收管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>催收记录</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<input type="text" placeholder="姓名/手机号">
						<input type="text" placeholder="借款编号">
						<select>
							<option value="放款方式">催收方式</option>
							<option value="放款方式1">催收方式1</option>
						</select>
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item>
								<el-col :span="11">
									<el-date-picker type="date" placeholder="请选择" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col class="line" :span="2">-</el-col>
								<el-col :span="11">
									<el-date-picker type="date" placeholder="请选择" style="width: 100%;"></el-date-picker>
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
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column width="30px">
						<input type="checkbox">
					</el-table-column>
					<el-table-column prop="number" label="催收编号">
					</el-table-column>
					<el-table-column prop="name" label="客户姓名">
					</el-table-column>
					<el-table-column prop="jiekuan" label="借款编号">
					</el-table-column>
					<el-table-column prop="tian" label="逾期天数">
						<span>3个月<br />先息后本</span>
					</el-table-column>
					<el-table-column prop="benjin" label="逾期本金">
					</el-table-column>
					<el-table-column prop="lixi" width="80px" label="逾期利息">
					</el-table-column>
					<el-table-column prop="fen" label="风险分类">
					</el-table-column>
					<el-table-column prop="fang" label="催收方式">
					</el-table-column>
					<el-table-column prop="riqi" label="催收日期">
					</el-table-column>
					<el-table-column prop="fan" label="催收反馈">
					</el-table-column>
					<el-table-column prop="jine" label="还款金额">
					</el-table-column>
					<el-table-column prop="shiji" label="实际还款日期">
					</el-table-column>
					<el-table-column label="操作" width="90px">
						<el-button type="text">
							<router-link to="/cs/csjiluchakan">查看</router-link>
						</el-button>
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
		name: 'csjilu',
		// 添加数据
		data() {
			return {
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
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '正常类',
					fang: '预催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '6153.00',
					shiji: '2018-12-18'
				}, {
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '关注类',
					fang: '电话催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '6153.00',
					shiji: '2018-12-18'
				}, {
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '次级类',
					fang: '外访催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '6153.00',
					shiji: '2018-12-18'
				}, {
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '损失类',
					fang: '外访催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '未还',
					shiji: '-'
				}, {
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '关注类',
					fang: '电话催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '未还',
					shiji: '-'
				}, {
					number: 'CC10001',
					name: '老朱',
					jiekuan: '10001',
					tian: '15',
					benjin: '5630.00',
					lixi: '485.00',
					fen: '损失类',
					fang: '外访催收',
					riqi: '2018-12-15',
					fan: '客户正在想办法筹钱',
					jine: '未还',
					shiji: '-'
				}],
				formLabelWidth: '120px'
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style>
	.jilu {
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

	.cell .el-button--text span a {
		color: #676767;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}
</style>
