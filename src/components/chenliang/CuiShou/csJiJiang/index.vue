<!-- 催收管理-即将到期 -->
<template>
	<el-container>
		<el-main>
			<div class="daoqi">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">催收管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>即将到期</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<input type="text" placeholder="姓名/手机号">
						<input type="text" placeholder="借款编号">
						<input type="text" placeholder="合同号">
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
					<el-table-column prop="number" label="借款编号">
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="jiekuan" label="合同号">
					</el-table-column>
					<el-table-column prop="tian" label="当前期次">
					</el-table-column>
					<el-table-column prop="benjin" label="应收本金">
					</el-table-column>
					<el-table-column prop="lixi" width="80px" label="应收利息">
					</el-table-column>
					<el-table-column prop="fen" label="借款管理费">
					</el-table-column>
					<el-table-column prop="fang" label="贷款类型">
					</el-table-column>
					<el-table-column prop="riqi" label="本期还款日">
					</el-table-column>
					<el-table-column prop="fan" label="提醒次数">
					</el-table-column>
					<el-table-column prop="jine" width="65px" label="状态">
					</el-table-column>
					<el-table-column label="操作" width="150px">
						<el-button type="text">
							<router-link to="/cs/csyqChaKan">查看</router-link>
						</el-button>
						<el-button type="text" @click="dialogShen = true">到期提醒</el-button>
					</el-table-column>
				</el-table>

				<!-- 到期提醒 -->
				<el-dialog title="即将到期提醒(客户 张某某)" :visible.sync="dialogShen">
					<el-form :model="form" align="center">
						<el-form-item label="通知方式:" :label-width="formLabelWidth" align="left">
							<span><input type="checkbox" checked="checked">系统推送</span>
							<span><input type="checkbox" checked="checked">短信</span>
							<span><input type="checkbox" checked="checked">邮件</span>
						</el-form-item>
						<el-form-item class="qi" label="使用模板:" :label-width="formLabelWidth" align="left">
							<input type="text" style="margin: 0px !important;" placeholder="模板:即将到期提醒模板">
						</el-form-item>
						<el-form-item label="提醒周期:" :label-width="formLabelWidth" align="left">
							<input type="radio" checked="checked">一次
							<input type="radio">到期前每天两次
						</el-form-item>
						<el-form-item label="发送时间:" :label-width="formLabelWidth" align="left">
							<input type="radio" checked="checked">立即发送
							<input type="radio">定时发送<select>
								<option value="">8:00</option>
							</select>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogShen = false">取 消</el-button>
						<el-button type="primary" @click="dialogShen = false">确 定</el-button>
					</div>
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
		name: 'csdaoqi',
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
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
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}, {
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}, {
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}, {
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}, {
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}, {
					number: '100001',
					name: '老朱',
					jiekuan: '2018101502005',
					tian: '1/12',
					benjin: '0.00',
					lixi: '1250.00',
					fen: '0.00',
					fang: '个人信用',
					riqi: '2018-01-15',
					fan: '1',
					jine: '还款中'
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style>
	.daoqi {
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
