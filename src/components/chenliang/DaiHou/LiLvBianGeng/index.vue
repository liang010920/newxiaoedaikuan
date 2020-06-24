<!-- 贷后管理-利率变更 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/贷前管理/利率变更列表</div>
			<div class="bgColor2" align="left">
				<input type="text" placeholder="姓名">
				<input type="text" placeholder="手机号">
				<select>
					<option value="贷款类型">贷款类型</option>
					<option value="借款类型">借款类型</option>
					<option value="贷款类型">贷款类型</option>
					<option value="贷款类型">贷款类型</option>
				</select>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-col :span="11">
							<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col :span="11">
							<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
						</el-col>
					</el-form-item>
				</el-form>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao">
				<span class="floatL font2">数据列表</span>
				<el-row>
					<el-button type="info" class="new">
						<router-link to="/index/LiLvBianGengNew" tag="span">新增</router-link>
					</el-button>
				</el-row>
				<div class="clear"></div>
			</div>
			<el-table :data="tableData">
			</el-table>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="变更号" width="90">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="name" label="借款编号" width="85">
					</el-table-column>
					<el-table-column prop="date" label="姓名" width="95">
					</el-table-column>
					<el-table-column prop="phone" label="借款期限" width="120">
					</el-table-column>
					<el-table-column prop="edu" label="还款方式" width="90">
					</el-table-column>
					<el-table-column prop="huankuan" label="借款金额" width="90">
					</el-table-column>
					<el-table-column prop="jiekuan" label="借款利率" width="90">
					</el-table-column>
					<el-table-column prop="daikuan" label="调整后利率" width="100">
					</el-table-column>
					<el-table-column prop="shenpi" label="变更时间" width="95">
					</el-table-column>
					<el-table-column prop="jianyi" label="变更描述" width="105">
					</el-table-column>
					<el-table-column prop="" label="操作" width="80">
						<template slot-scope="scope">
							<router-link to="/index/LiLvBianGengCha" tag="div">{{ scope.row.caozuo }}</router-link>
						</template>
					</el-table-column>
				</el-table>
			</template>
			<template>
				<div class="block margin2">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
					</el-pagination>
				</div>
			</template>
			<template>
				<div class="yemian-di">
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'LiLvBianGeng',
		data() {
			const item = [{
					id: 'IR1001',
					name: '10001',
					date: '李某某',
					phone: '12',
					edu: '等额本息',
					huankuan: '48000',
					jiekuan: '12%',
					daikuan: '13%',
					shenpi: '2018-12-20',
					caozuo: '查看'
				},
				{
					id: 'IR1001',
					name: '10001',
					date: '李某某',
					phone: '12',
					edu: '等额本息',
					huankuan: '48000',
					jiekuan: '12%',
					daikuan: '13%',
					shenpi: '2018-12-20',
					caozuo: '查看'
				},


			];
			const item2 = [{
					date: '2018-07-06 16:58:11',
					zhuangtai: '复审',
					renyuan: '李某某',
					jieguo: '审核通过',
					fankui: '申请材料属实，资料齐全',
					edu: '【额度审批】审批金额50000元，期限36期，综合利率1.0%'
				},
				{
					date: '2018-07-06 16:58:11',
					zhuangtai: '初审',
					renyuan: '张某某',
					jieguo: '审核通过',
					fankui: '申请材料属实，资料齐全',
				}
			];
			return {
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				gridData: item2,
				dialogTableVisible: false,

				currentPage4: 5,
				form: {
					name: '',
					data1: '',
					data2: '',

				},
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: '正在处理',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			}
		}
	}
</script>

<style>
	.yemian-di {
		background-color: #F9F9F9;
		text-align: center;
		height: 100px;
		padding-top: 70px;
	}

	.boHui {
		color: red !important;
	}

	.shenhe>div:last-child {
		color: #0099FF;
	}

	.cell:hover {
		cursor: pointer;
	}

	.margin2 {
		margin: 50px 0;
	}

	.ju * {
		text-align: center !important;
	}

	.dao {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}

	.lieBiao {
		background: #f3f3f3;
		padding: 10px 0;
	}

	.el-button {
		padding: 8px 20px !important;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.el-input__inner {
		padding: 10px !important;
		width: 100px !important;
		text-align: center;
		padding-left: 18px !important;
		height: 34px;
	}

	.el-input__prefix {
		padding-left: 5px !important;
		top: -2px;
	}

	.el-form-item__content {
		margin-left: 0 !important;
	}

	.floatR {
		float: right;
		margin-right: 20px;
	}

	.top li {
		display: inline-block;
	}

	* {
		margin: 0;
		padding: 0;
	}

	ul li {
		list-style-type: none;
	}

	body {
		margin: 0;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.fenlei {
		padding: 19px 0;
		border-bottom: 1px solid;
	}

	.color {
		color: #999999;
	}

	.color span {
		margin: 0 15px;
	}

	.icon1 {
		float: right;
		margin-right: 10px;
	}

	.width {
		width: 200px;
		background: #f2f2f2;
		float: left;
		padding: 10px 0;
	}

	.width2 {
		width: 85%;
		float: left;
		padding: 10px 0;
	}

	.clear {
		clear: both;
	}

	.font {
		font-weight: bold;
		margin-left: 15px;
	}

	.floatL {
		float: left;
	}

	.liuCheng {
		border-bottom: 1px solid #999;
	}

	.liuCheng li {
		display: inline-block;
		color: #999;

		margin: 0 10px;
		font-size: 16px;
		width: 150px;
		text-align: center;
	}

	.liuCheng li:hover {
		cursor: pointer;
		border-bottom: 2px solid #000;
	}

	.bgColor {
		background: #f9f9f9;
	}

	.jiekuan {
		text-align: left;
		padding: 20px;
	}

	.bgColor2 {
		background: #fff;
		color: #000;
		padding: 15px;
		margin: 0 20px;

	}

	.bgColor2 input {
		padding: 6px 10px;
		width: 115px;
		margin: 0 10px;
		color: #000 !important;
	}

	.bgColor2 select {
		padding: 6px 10px 9px;
		;
		width: 105px;
		margin: 0 10px;
		color: #000 !important;
	}

	.cha {
		background: #6b6b6b;
		color: #fff;

	}

	.font2 {
		font-weight: bold;
		margin-left: 10px;
	}

	.router-link {
		color: white;
	}

	.new {
		margin-left: 942px;
		background-color: black;

	}
</style>
