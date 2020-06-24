<!-- 系统分析-渠道分析 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/渠道分析
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">各渠道注册用户数</span>
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
						<el-col :span="13">
							<div align="center">
								<img src="../../../../../public/images/tongji2.png" alt="">
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
							<el-table-column prop="xinlang" label="新浪财经" width="120">
							</el-table-column>
							<el-table-column prop="rong" label="融360">
							</el-table-column>
							<el-table-column prop="baidu" label="百度">
							</el-table-column>
							<el-table-column prop="zhifubao" label="支付宝">
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
			const item = [
				{
					date: '合计',
					xinlang: '2,336',
					rong: '2,316',
					baidu:'2,290',
					zhifubao:'2,186'
				},
				{
					date: '2-26(一)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-25(日)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-24(五)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-23(四)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-22(三)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-21(二)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
				{
					date: '2-26(一)',
					xinlang: '71',
					rong: '75',
					baidu:'73',
					zhifubao:'68'
				},
			];
			return {
				form: {
					name: '',
					data1: '',

				},
				tableData: item
			}
		}
	}
</script>

<style>
	.daikuan1 .cell{
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
