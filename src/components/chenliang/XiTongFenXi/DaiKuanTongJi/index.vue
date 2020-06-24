<!-- 系统分析-贷款统计 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/贷款统计
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">贷款概况</span>
					<span class="floatR yonghutongji22">
						<span>导出数据</span>
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
							<div align="center" class="gaikuang">
								<table width="100%">
									<tr align="center" class="daikuanbg">
										<td>浏览人数</td>
										<td>贷款人数</td>
										<td>申请贷款数</td>
										<td>有效贷款数</td>
									</tr>
									<tr align="center">
										<td>1888</td>
										<td>235</td>
										<td>643</td>
										<td>130</td>
									</tr>
									<tr align="center" class="daikuanbg">
										<td>浏览人数</td>
										<td>贷款人数</td>
										<td>申请贷款数</td>
										<td>有效贷款数</td>
									</tr>
									<tr align="center">
										<td>1888</td>
										<td>235</td>
										<td>643</td>
										<td>130</td>
									</tr>
								</table>
							</div>
						</el-col>
						<el-col :span="11">
							<div align="center">
								<img src="../../../../../public/images/daikuan1.png" alt="">
							</div>
						</el-col>
					</el-row>
					<div>
						<img src="../../../../../public/images/daikuan2.png" alt="">
					</div>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">新老客户贷款构成</span>
					<span class="floatR yonghutongji22">
						<span>导出数据</span>
						<span class="zuotian">本月</span>
						<span class="zuijin">上月</span>
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
							<div align="center" class="gaikuang">
								<ve-pie :data="chartData"></ve-pie>
							</div>
						</el-col>
						<el-col :span="11">
							<div align="center" style="margin-top: 25%;">
								<table width="100%" class="gaikuang">
									<tr align="center" class="daikuanbg">
										<td></td>
										<td>贷款金额</td>
										<td>较前一月</td>
										<td>贷款人数</td>
										<td>较前一月</td>
									</tr>
									<tr align="center">
										<td>新客户</td>
										<td>￥1970700.49</td>
										<td> ↑ 4.73%</td>
										<td>30</td>
										<td>↓ -92.00%</td>
									</tr>
									<tr align="center">
										<td>老客户</td>
										<td>￥0.00</td>
										<td>/</td>
										<td>42</td>
										<td> ↑ 2000%</td>
									</tr>
								</table>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">贷款走势数据</span>
					<span class="floatR yonghutongji22">
						<span style="margin-right: 10px;">导出数据</span>
						<span class="zuijin">最近7天</span>
						<span class="zuotian" style="margin-right: 0 !important;">最近1个月</span>
						<span class="zuijin">最近3个月</span>
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
							<div align="center" class="gaikuang">
								<ve-histogram :data="chartData2" :settings="chartSettings"></ve-histogram>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">贷款省份分布</span>
					<span class="floatR yonghutongji22">
						<span style="margin-right: 10px;">导出数据</span>
						<span class="zuotian" style="margin-right: 0 !important;">本月</span>
						<span class="zuijin">上月</span>
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
							<div align="center" class="gaikuang">
								<div>
									<span>当前选中了: {{ cityName || '-' }}</span>
									<ve-map :data="chartData3" :settings="chartSettings2" :events="chartEvents"></ve-map>
								</div>
							</div>
						</el-col>
					</el-row>
					<table width="100%" class="gaikuang">
						<tr align="center" class="daikuanbg">
							<td>省份</td>
							<td>贷款金额</td>
							<td>较前一月</td>
							<td>贷款人数</td>
							<td>较前一月</td>
						</tr>
						<tr align="center">
							<td>广东省</td>
							<td>￥1970700.49</td>
							<td> ↑ 4.73%</td>
							<td>30</td>
							<td>↓ -92.00%</td>
						</tr>
						<tr align="center">
							<td>山东省</td>
							<td>￥0.00</td>
							<td>/</td>
							<td>42</td>
							<td> ↑ 2000%</td>
						</tr>
						<tr align="center">
							<td>广东省</td>
							<td>￥1970700.49</td>
							<td> ↑ 4.73%</td>
							<td>30</td>
							<td>↓ -92.00%</td>
						</tr>
						<tr align="center">
							<td>山东省</td>
							<td>￥0.00</td>
							<td>/</td>
							<td>42</td>
							<td> ↑ 2000%</td>
						</tr>
					</table>
				</div>
			</div>
			<div>
				<div class="lieBiao77" align="left">
					<span class="font77">贷款金额分布</span>
					<span class="floatR yonghutongji22">
						<span style="margin-right: 10px;">导出数据</span>
						<span class="zuijin">最近7天</span>
						<span class="zuotian" style="margin-right: 0 !important;">最近1个月</span>
						<span class="zuijin">最近3个月</span>
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
							<div align="center" class="gaikuang">
								<ve-histogram :data="chartData2" :settings="chartSettings"></ve-histogram>
							</div>
						</el-col>
					</el-row>
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
				axisSite: {
					right: ['下单率']
				},
				yAxisType: ['KMB', 'percent'],
				yAxisName: ['数值', '比率']
			}
			this.chartSettings2 = {
				position: 'china',
				// selectData: true,
				selectedMode: 'single'
			}
			this.chartEvents = {
				click: (v) => {
					this.cityName = v.name
				}
			}
			return {
				cityName: '',
				chartData3: {
					columns: ['位置', 'GDP'],
					rows: [{
							'位置': '吉林',
							'GDP': 123
						},
						{
							'位置': '北京',
							'GDP': 1223
						},
						{
							'位置': '上海',
							'GDP': 2123
						},
						{
							'位置': '浙江',
							'GDP': 4123
						}
					]
				},
				form: {
					name: '',
					data1: '',

				},
				chartData: {
					columns: ['日期', '访问用户'],
					rows: [{
							'日期': '老客户',
							'访问用户': 1393
						},
						{
							'日期': '新客户',
							'访问用户': 3530
						},
					]
				},
				chartData2: {
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
		},
	}
</script>

<style>
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
