<!-- 系统分析-逾期概况 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/逾期概况
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">逾期占比</span>
					<span class="floatR yonghutongji22">
						<span class="zuotian">最近七天</span>
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
								<ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="center">
					<span class="font77">用户逾期总览</span>
					<span class="floatR yonghutongji22">
						<span>导出数据</span>
					</span>
					<div class="clear"></div>
				</div>
				<div style="background: #fff;">
					<div class="yonghuyuqi" align="left">
						<div>
							<div>逾期金额的总和</div>
							<div>10,467,533,862</div>
						</div>
						<div>
							<div>逾期总用户数</div>
							<div>159人</div>
						</div>
						<div>
							<div>预期总次数</div>
							<div>1828次</div>
						</div>
						<div>
							<div>逾期已还金额总和</div>
							<div>10,467,533,862</div>
						</div>
						<div>
							<div>逾期剩余金额总和</div>
							<div>10,467,533,862</div>
						</div>
					</div>
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
			this.chartSettings = {
				dimension: '日期',
				metrics: '访问用户'
			}
			return {
				form: {
					name: '',
					data1: '',

				},
				chartData: {
					columns: ['日期', '访问用户'],
					rows: [{
							'日期': '15天内 28.59%',
							'访问用户': 1393
						},
						{
							'日期': '7天内 18.68%',
							'访问用户': 3530
						},
						{
							'日期': '30天内 28.59%',
							'访问用户': 2923
						},
						{
							'日期': '45天内 32.68%',
							'访问用户': 1723
						}
					]
				}
			}
		}
	}
</script>

<style>
	.yonghuyuqi{
		margin: 15px;
	}
	.yonghuyuqi>div{
		margin-bottom: 20px;
	}
	.yonghuyuqi>div>div:first-child{
		background: #F2F2F2;
		color:666;
		font-weight: bold;
		padding: 10px;
		border-top: 2px solid #666;
		border-bottom: 1px solid #E4E4E4;
	}
	.yonghuyuqi>div>div:last-child{
		padding: 10px;
		border-bottom: 1px solid #E4E4E4;
	}
	.daikuan1>main>div {
		border: 1px solid #E4E4E4;
	}

	.daikuan1 th {
		border-right: 1px solid #E4E4E4;
	}

	.daikuan1 td {
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
