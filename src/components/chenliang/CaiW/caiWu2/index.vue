<!-- 财务管理-本金收款台账 -->
<template>
	<el-container>
		<el-main>
			<div class="benjin">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">财务管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>本金放款台账</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="bgColor2" align="left">
						<input type="text" placeholder="借款人">
						<input type="text" placeholder="借款编号">
						<select>
							<option value="放款方式">对账状态</option>
							<option value="放款方式1">对账状态</option>
						</select>
						<select>
							<option value="放款方式">放款方式</option>
							<option value="放款方式1">放款方式</option>
						</select>
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
						<button @click="dialogTableVisible2 = true">批量对账确认</button>
						<button><i class="el-icon-printer"></i>打印</button>
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<!-- 批量对账确认 -->
				<el-dialog title="批量对账确认" :visible.sync="dialogTableVisible2">
					<div>
						<textarea cols="40" rows="7" placeholder="请输入处理备注"></textarea>
					</div>
					<div>批量对账操作，将会对所有选中项执行对帐处理。</div>
					<div align="center" slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible2 = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible2 = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<!-- 表格传输数据 -->
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column label="全选">
						<input type="checkbox">
					</el-table-column>
					<el-table-column prop="number" label="借款编号">
					</el-table-column>
					<el-table-column prop="name" label="借款人">
					</el-table-column>
					<el-table-column prop="xiangmu" label="借款项目">
					</el-table-column>
					<el-table-column prop="qixian" label="期限">
						<span>3个月<br />先息后本</span>
					</el-table-column>
					<el-table-column prop="jine" label="放款金额(元)">
					</el-table-column>
					<el-table-column prop="shijian" width="110px" label="放款时间">
					</el-table-column>
					<el-table-column prop="fangshi" label="放款方式">
					</el-table-column>
					<el-table-column prop="ren" label="对账人员">
					</el-table-column>
					<el-table-column prop="riqi" label="对账日期">
					</el-table-column>
					<el-table-column prop="zhuangtai" label="对账状态">
					</el-table-column>
					<el-table-column label="操作" width="90px">
						<el-button type="text">
							<router-link to="/cw/cwchaKan">查看详情</router-link>
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
		name: 'cwbenjinfktz',
		// 添加数据
		data() {
			return {
				// 审核
				dialogShen: false,
				dialogTableVisible2:false,
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					number: '100001',
					name: '张飞',
					xiangmu: '悦薪贷',
					jine: '50,000.00',
					shijian: '2018-01-12',
					fangshi: '委托放款',
					ren: 'N/A',
					riqi: 'N/A',
					zhuangtai: '未对账'
				}, {
					number: '100001',
					name: '关悦',
					xiangmu: '工薪贷',
					jine: '100,000.00',
					shijian: '2018-01-12',
					fangshi: '线下放款',
					ren: 'admin',
					riqi: '2018-01-12',
					zhuangtai: '已对账'
				}, {
					number: '100001',
					name: '宝强',
					xiangmu: '房薪贷',
					jine: '10,000.00',
					shijian: '2018-01-12',
					fangshi: '线下放款',
					ren: 'admin',
					riqi: '2018-01-12',
					zhuangtai: '异常'
				}, {
					number: '100001',
					name: '宝强',
					xiangmu: '房薪贷',
					jine: '10,000.00',
					shijian: '2018-01-12',
					fangshi: '线下放款',
					ren: 'admin',
					riqi: '2018-01-12',
					zhuangtai: '已冲正'
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style>
	.buts button:nth-of-type(1){
		height: 34px;
		width: 103px;
		padding: 0 10px;
		font-size: 13px;
		color: white;
		border-radius: 5px 5px;
		background: black;
	}
	.benjin {
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
