<!-- 催收管理-已逾期列表 -->
<template>
	<el-container>
		<el-main>
			<div class="yuqi">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">催收管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>已逾期列表</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<input type="text" placeholder="姓名/手机号">
						<input type="text" placeholder="借款编号">
						<input type="text" placeholder="合同号">
						<select>
							<option value="风险分类">风险分类</option>
							<option value="风险分类1">风险分类1</option>
						</select>
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
					<el-table-column prop="name" width="50px" label="姓名">
					</el-table-column>
					<el-table-column prop="jiekuan" label="合同号">
					</el-table-column>
					<el-table-column prop="tian" width="50px" label="当前期次">
					</el-table-column>
					<el-table-column prop="benjin" label="逾期本金">
					</el-table-column>
					<el-table-column prop="lixi" width="80px" label="逾期利息">
					</el-table-column>
					<el-table-column prop="fen" label="借款管理费">
					</el-table-column>
					<el-table-column prop="fang" label="贷款类型">
					</el-table-column>
					<el-table-column prop="riqi" label="本期还款日">
					</el-table-column>
					<el-table-column prop="fan" width="50px" label="逾期天数">
					</el-table-column>
					<el-table-column prop="jine" width="50px" label="风险分类">
					</el-table-column>
					<el-table-column prop="shiji" width="50px" label="催收次数">
					</el-table-column>
					<el-table-column prop="zhuang" label="状态">
					</el-table-column>
					<el-table-column label="操作" width="150px">
						<el-button type="text">
							<router-link to="/cs/csyqChaKan">查看</router-link>
						</el-button>
						<el-button type="text">
							<router-link to="/cs/csbanli">催收办理</router-link>
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
		name: 'csyuqi',
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
					number: '10001',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '3',
					jine: '正常类',
					shiji: '1',
					zhuang: '还款中'
				}, {
					number: '10002',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '4800.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '31',
					jine: '关注类',
					shiji: '1',
					zhuang: '还款中'
				}, {
					number: '10003',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '3',
					jine: '正常类',
					shiji: '1',
					zhuang: '还款中'
				}, {
					number: '10004',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '4800.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '31',
					jine: '关注类',
					shiji: '1',
					zhuang: '还款中'
				}, {
					number: '10005',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '3',
					jine: '正常类',
					shiji: '1',
					zhuang: '还款中'
				}, {
					number: '10006',
					name: '老朱',
					jiekuan: '201810151520005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '4800.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-12-15 已逾期',
					fan: '31',
					jine: '关注类',
					shiji: '1',
					zhuang: '还款中'
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
	.yuqi {
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

	.cell .el-button--text span {
		color: #676767;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}
</style>
