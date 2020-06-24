<!-- 客户档案管理-黑名单 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/客户档案管理/黑名单客户</div>
			<div class="bgColor2" align="left">
				<input type="text" placeholder="用户ID/手机号">
				<input type="text" placeholder="用户姓名">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-col :span="11">
							<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
						</el-col>
					</el-form-item>
				</el-form>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
				<el-row style="margin-left: 10px;">
					<el-button type="info" class="gaoji" @click="dialogFormVisible = true">高级查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao">
				<span class="floatL font2">数据列表</span>
				<div class="lieBiao-kuang">
					<span @click="dialogFormVisible1 = true" style="background:#fff;border: 1px solid #E4E4E4;padding: 3px 7px;">撤销黑名单</span>
					<select>
						<option value="贷款类型">导出数据</option>
					</select>
					<select>
						<option value="贷款类型">显示条数</option>
					</select>
					<select>
						<option value="贷款类型">排序方式</option>
					</select>
				</div>
				<div class="clear"></div>
			</div>
			<el-table :data="tableData">
			</el-table>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="用户ID" width="120">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="name" label="用户手机号" width="125">
					</el-table-column>
					<el-table-column prop="date" label="用户姓名" width="125">
					</el-table-column>
					<el-table-column prop="phone" label="会员等级" width="120">
					</el-table-column>
					<el-table-column prop="edu" label="贷款金额" width="100">
					</el-table-column>
					<el-table-column prop="huankuan" label="贷款笔数" width="110">
					</el-table-column>
					<el-table-column prop="jiekuan" label="剩余贷还" width="120">
					</el-table-column>
					<el-table-column prop="daikuan" label="账户启用状态" width="110">
						<el-switch v-model="value" active-color="black" inactive-color="#ff4949">
						</el-switch>
					</el-table-column>
					<el-table-column prop="" label="操作" width="135">
						<span><router-link to="/index/HeiMingDan/ChaKan">查看</router-link></span>
						<span @click="dele" style="margin-left: 10px;">删除</span>
					</el-table-column>
				</el-table>
				<el-dialog title="撤销黑名单" :visible.sync="dialogFormVisible1">
					<el-form :model="form">
						<p style="margin-left: -33%;">
							撤销对象 : <span style="margin-left: 15px;">共<span style="color: red;">5</span>个用户</span>
						</p>
						<p style="margin-top: 15px;margin-left: 50px;">
							<span class="kuang-zi1">选中对象：</span> <input type="text" value="张三李四王二" class="form-input">
						</p>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible1 = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible1 = false">确认撤销</el-button>
					</div>
				</el-dialog>
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
		name: 'Cha',
		data() {
			const item = [{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
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
				dialogFormVisible1: false,
				currentPage4: 5,
				value: true,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'

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
			},
			// 删除
			dele() {
				this.$confirm('确定要删除该条数据吗?', '删除确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>

<style>

	.form-input {
		width: 314px;
		padding-left: 5px;
		padding-bottom: 55px;
		margin-left: 15px;
	}

	.el-pagination {
		white-space: nowrap;
		padding: 2px 5px;
		color: #303133;
		font-weight: 700;
		text-align: center;
	}

	.form-ul1 li {
		margin-left:-400px;
		margin-bottom: 35px;
	}

	.form-ul1 input {
		width: 129px;
		height: 24px;
		padding-left: 6px;
		font-size: 13px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul1 select {
		font-size: 13px;
		width: 140px;
		height: 24px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul1 span {
		font-family: fantasy;
	}

	.form-ul1 {
		margin-left: 54px;
	}

	.form-ul2 {
		float: right;
		margin-top: -266px;
		margin-right: 169px;
	}

	.form-ul2 li {
		margin-bottom: 35px;
	}

	.form-ul2 input {
		width: 129px;
		height: 24px;
		padding-left: 6px;
		font-size: 13px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul2 select {
		font-size: 13px;
		width: 140px;
		height: 24px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul2 span {
		font-family: fantasy;
	}

	.lieBiao-kuang {
		float: right;
		margin-right: 68px;

	}

	.lieBiao-kuang select {
		height: 27px;
		margin-left: 9px;
	}

	.lieBiao-kuang input {
		height: 23px;

	}

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
</style>
