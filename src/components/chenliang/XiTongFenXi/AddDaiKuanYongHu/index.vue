<!-- 系统分析-新增贷款用户 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/新增贷款用户
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">新增借款用户数</span>
					<span class="floatR yonghutongji22">
						<span class="zuotian">按月统计</span>
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
								<div style="color:#559FF0;"><span>403</span>人</div>
								<ve-histogram :data="chartData"></ve-histogram>
								<div>借款成功的触发用户数(人)</div>
							</div>
						</el-col>
					</el-row>
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
						<el-table :data="tableData">
							<el-table-column prop="date" label="日期" width="140">
							</el-table-column>
							<el-table-column prop="chufa" label="借款成功的触发用户数(人)">
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
			const item = [{
					date: '合计',
					chufa: '2,186'
				},
				{
					date: '2-26(一)',
					chufa: '68'
				},
				{
					date: '2-25(日)',
					chufa: '68'
				},
				{
					date: '2-24(五)',
					chufa: '68'
				},
				{
					date: '2-23(四)',
					chufa: '68'
				},
				{
					date: '2-22(三)',
					chufa: '68'
				},
				{
					date: '2-21(二)',
					chufa: '68'
				},
				{
					date: '2-26(一)',
					chufa: '68'
				},
			];
			return {
				form: {
					name: '',
					data1: '',

				},
				tableData: item,
				chartData: {
					columns: ['日期', '访问用户', '下单用户', '下单率'],
					rows: [{
							'日期': '1/1',
							'访问用户': 1393,
							'下单用户': 1093,
							'下单率': 0.32
						},
						{
							'日期': '1/2',
							'访问用户': 3530,
							'下单用户': 3230,
							'下单率': 0.26
						},
						{
							'日期': '1/3',
							'访问用户': 2923,
							'下单用户': 2623,
							'下单率': 0.76
						},
						{
							'日期': '1/4',
							'访问用户': 1723,
							'下单用户': 1423,
							'下单率': 0.49
						},
						{
							'日期': '1/5',
							'访问用户': 3792,
							'下单用户': 3492,
							'下单率': 0.323
						},
						{
							'日期': '1/6',
							'访问用户': 4593,
							'下单用户': 4293,
							'下单率': 0.78
						}
					]
				}
			}
		}
	}
</script>

<style>
	.daikuan1>main>div{
		border: 1px solid #E4E4E4;
	}
	.daikuan1 th{
		border-right: 1px solid #E4E4E4;
	}
	.daikuan1 td{
		border-right: 1px solid #E4E4E4;
	}
	.daikuan1 .cell {
		text-align: right;
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
