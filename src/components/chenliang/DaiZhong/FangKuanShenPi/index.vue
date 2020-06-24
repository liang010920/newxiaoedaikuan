<!-- 贷中管理-放款审批 -->
<template>
	<el-container>
		<template>
			<el-main>
				<div class="jiekuan"><i class="el-icon-s-home"></i>首页/贷中管理/贷款审批</div>
				<div class="bgColor2" align="left">
					<input type="text" placeholder="姓名">
					<input type="text" placeholder="手机号">
					<input type="text" placeholder="合同号">
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
					<button class="floatR dao">
						<i class="el-icon-upload2"></i>导出
					</button>
					<div class="clear"></div>
				</div>
				<template>
					<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="编号" width="80">
							<template slot-scope="scope">{{ scope.row.id }}</template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="65">
						</el-table-column>
						<el-table-column prop="" label="合同号" width="120">
							<template slot-scope="scope"><span style="color:#339;">{{ scope.row.hetonghao }}</span></template>
						</el-table-column>
						<el-table-column prop="date" label="申请日期" width="95">
						</el-table-column>
						<el-table-column prop="edu" label="申请额度" width="80">
						</el-table-column>
						<el-table-column prop="shenpi" label="审批额度" width="80">
						</el-table-column>
						<el-table-column prop="hetongmoney" label="合同金额" width="120">
						</el-table-column>
						<el-table-column prop="jiekuan" label="借款期限" width="80">
						</el-table-column>
						<el-table-column prop="daikuan" label="贷款类型" width="80">
						</el-table-column>
						<el-table-column prop="huankuan" label="还款方式" width="90">
						</el-table-column>
						<el-table-column prop="fangkuanshijian" label="放款时间" width="80">
						</el-table-column>
						<el-table-column prop="tongdao" label="放款通道" width="120">
						</el-table-column>
						<el-table-column prop="zhuangtai" label="状态" width="85">
						</el-table-column>
						<el-table-column prop="" label="操作" width="85">
							<template slot-scope="scope">
								<span><router-link to="/index/DaiZhong/FangKuanShenPi/ShenPiFangKuan" tag="div">{{scope.row.caozuo}}</router-link></span>
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
					<div>
						Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
					</div>
				</template>
			</el-main>
		</template>
	</el-container>
</template>

<script>
	export default{
		name:'FangKuanChuLi',
		data() {
			const item = [{
					id: '100001',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					fangkuanshijian:'-',
					tongdao:'线下放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
				{
					id: '100002',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '24',
					daikuan: '个人信用',
					huankuan: '先息后本',
					fangkuanshijian:'-',
					tongdao:'线下放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
				{
					id: '100003',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '24',
					daikuan: '个人信用',
					huankuan: '先息后本',
					fangkuanshijian:'-',
					tongdao:'委托银行放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
				{
					id: '100004',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '24',
					daikuan: '个人信用',
					huankuan: '先息后本',
					fangkuanshijian:'-',
					tongdao:'委托银行放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
				{
					id: '100005',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '24',
					daikuan: '个人信用',
					huankuan: '先息后本',
					fangkuanshijian:'-',
					tongdao:'委托银行放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
				{
					id: '100006',
					name: '老朱',
					hetonghao:'201810150152005',
					date: '2018-12-15',
					edu: '50000',
					shenpi: '48000',
					hetongmoney:'48000',
					jiekuan: '24',
					daikuan: '个人信用',
					huankuan: '先息后本',
					fangkuanshijian:'-',
					tongdao:'委托银行放款',
					zhuangtai: '放款审批',
					caozuo: '审批放款'
				},
		
			];
			const item2 = [
				{
					date:'2018-07-06 16:58:11',
					zhuangtai:'复审',
					renyuan:'李某某',
					jieguo:'审核通过',
					fankui:'申请材料属实，资料齐全',
					edu:'【额度审批】审批金额50000元，期限36期，综合利率1.0%'
				},
				{
					date:'2018-07-06 16:58:11',
					zhuangtai:'初审',
					renyuan:'张某某',
					jieguo:'审核通过',
					fankui:'申请材料属实，资料齐全',
				}
			];
			return {
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				gridData:item2,
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
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
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
				this.$confirm('是否确定放款?', '放款确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '放款成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消放款'
					});
				});
			}
		}
	}
</script>

<style>
	.shehe>div:first-child{
		color: red;
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

	.border {
		border-bottom: 2px solid #000;
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
