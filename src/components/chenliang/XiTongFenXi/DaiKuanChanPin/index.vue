<!-- 系统分析-贷款产品分析 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/贷款产品分析
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">贷款形式占比</span>
					<span class="floatR yonghutongji22">
						<span class="zuotian">昨天</span>
						<span class="zuijin">最近7天</span>
						<span class="zuijin">最近30天</span>
						<el-badge :value="1" class="item" type="warning">
							<el-form ref="form" style="margin-left:15px;" :model="form" label-width="80px">
								<el-form-item style="margin:0 !important;">
									<el-col :span="11">
										<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
									</el-col>
								</el-form-item>
							</el-form>
						</el-badge>
					</span>
					<div class="clear"></div>
				</div>
				<div class="daikuan1">
					<el-row>
						<el-col :span="24">
							<div align="center">
								<ve-pie :data="chartData"></ve-pie>
							</div>
						</el-col>
					</el-row>
					<el-main>
						<el-table :data="tableData2" class="qwe">
							<el-table-column prop="dai1" label="贷款形式" width="140">
							</el-table-column>
							<el-table-column prop="dai2" label="贷款数量" width="120">
							</el-table-column>
							<el-table-column prop="dai3" label="数量比例">
							</el-table-column>
							<el-table-column prop="dai4" label="贷款金额">
							</el-table-column>
							<el-table-column prop="dai5" label="金额比例">
							</el-table-column>
						</el-table>
					</el-main>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">数据明细</span>
					<span class="floatR yonghutongji22">
						<span>导出数据</span>
					</span>
					<div class="clear"></div>
				</div>
				<div class="daikuan1">
					<el-main>
						<el-table :data="tableData" class="qwe">
							<el-table-column prop="chan1" label="产品名称" width="140">
							</el-table-column>
							<el-table-column prop="chan2" label="浏览量" width="120">
							</el-table-column>
							<el-table-column prop="chan3" label="浏览人数">
							</el-table-column>
							<el-table-column prop="chan4" label="申请贷款人数">
							</el-table-column>
							<el-table-column prop="chan5" label="贷款转化率">
							</el-table-column>
							<el-table-column prop="chan6" label="成交贷款笔数">
							</el-table-column>
							<el-table-column prop="chan7" label="成交贷款金额">
							</el-table-column>
						</el-table>
					</el-main>
				</div>
			</div>
			<template>
				<div style="margin:3%;">
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			const item = {
				dai1: '个人信用',
				dai2: '1000',
				dai3: '20%',
				dai4: '￥10000.00',
				dai5: '20%',
			};
			const item2 = {
				chan1: '产品A',
				chan2: '1000',
				chan3: '1000',
				chan4: '100',
				chan5: '10%',
				chan6: '100',
				chan7: '￥10000.00'
			};
			return {
				form: {
					name: '',
					data1: '',

				},
				tableData: Array(7).fill(item2),
				tableData2: Array(5).fill(item),
				chartData: {
					columns: ['日期', '访问用户'],
					rows: [{
							'日期': '个人信用',
							'访问用户': 1393
						},
						{
							'日期': '个人抵押',
							'访问用户': 3530
						},
						{
							'日期': '个人分期',
							'访问用户': 2923
						},
						{
							'日期': '企业信用',
							'访问用户': 1723
						},

					]
				}
			}
		}
	}
</script>

<style>
	.qwe .cell {
		text-align: center;
	}

	.daikuanbg {
		background: #F9FAFC;
	}

	.gaikuang td {
		border: 1px solid #E4E4E4;
		padding: 10px;
	}

	.gaikuang>table {
		border: 1px solid #E4E4E4;
	}

	.zuotian {
		margin-left: 10px;
		background: #000 !important;
		color: #fff;
		border-radius: 2px;
	}

	.zuijin {
		border: 1px solid #E4E4E4;
		background: #fff;
		border-radius: 2px;
	}

	.daikuan1 {
		padding: 10px;
		background: #fff;
		border-bottom: 1px solid #E4E4E4;
		margin-bottom: 50px;
	}

	.lieBiao77 {
		background: #f3f3f3;
		padding: 10px 0;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;

	}

	.yonghutongji22 * {
		display: inline-block;
		vertical-align: top;
	}

	.yonghutongji22 select {
		border: 1px solid #E4E4E4;
		padding: 7px;
		margin-left: 15px;
	}

	.yonghutongji22>span {
		border: 1px solid #E4E4E4;
		padding: 5px 7px;
		background: #fff;
	}

	.font77 {
		line-height: 37px;
		margin-left: 10px;
		font-size: 12px;
	}

	.shuaxin2 {
		float: right;
		border: 1px solid #E4E4E4;
		background: #fff;
		padding: 3px 7px;
	}
</style>
