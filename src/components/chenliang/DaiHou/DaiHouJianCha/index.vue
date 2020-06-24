<!-- 贷后-检查列表 -->
<template>
	<el-container>
		<template>
			<el-main>
				<div class="jiekuan"><i class="el-icon-s-home"></i>首页/贷后管理/贷后检查列表</div>
				<div class="bgColor2" align="left">
					<input type="text" placeholder="姓名/手机号">
					<input type="text" placeholder="合同号">
					<input type="text" placeholder="借款意见">
					<select>
						<option value="处理意见">处理意见</option>
						<option value="借款类型">借款类型</option>
						<option value="贷款类型">贷款类型</option>
						<option value="贷款类型">贷款类型</option>
					</select>
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item>
							<el-col :span="11">
								<el-date-picker class="riqi" type="date" placeholder="请选择" v-model="form.date1" style="width: 100%;"></el-date-picker>
							</el-col>
							<el-col :span="11">
								<el-time-picker placeholder="请选择" v-model="form.date2" style="width: 100%;"></el-time-picker>
							</el-col>
						</el-form-item>
					</el-form>
					<el-row>
						<el-button type="info">查询</el-button>
					</el-row>
				</div>
				<div class="lieBiao">
					<span class="floatL font3">数据列表</span>
					<span class="floatR">
						<span class="dao2"><i class="el-icon-upload2"></i>导出</span>
						<router-link to="/index/JianCha/Add" tag="span"><el-button type="info" class="add">新增</el-button></router-link>
						
					</span>
					
					<div class="clear"></div>
				</div>
				<template>
					<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="" label="报告编号" width="120">
							<template slot-scope="scope">{{ scope.row.baogao }}</template>
						</el-table-column>
						<el-table-column label="借款编号" width="80">
							<template slot-scope="scope"><span style="color:#339;">{{ scope.row.id }}</span></template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="65">
						</el-table-column>
						<el-table-column prop="hetongmoney" label="合同金额" width="120">
						</el-table-column>
						<el-table-column prop="jiekuan" label="借款期限" width="80">
						</el-table-column>
						<el-table-column prop="daikuan" label="贷款类型" width="80">
						</el-table-column>
						<el-table-column prop="huankuan" label="还款方式" width="90">
						</el-table-column>
						<el-table-column prop="date" label="贷后检查时间" width="105">
						</el-table-column>
						<el-table-column prop="fangshi" label="检查方式" width="80">
						</el-table-column>
						<el-table-column prop="yuanyin" label="检查原因" width="80">
						</el-table-column>
						<el-table-column prop="" label="贷后处理意见" width="120">
							<template slot-scope="scope">
								<div>{{scope.row.yijian}}</div>
								<div style="color: red;">{{scope.row.redyijian}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="jianyi" label="贷后建议" width="120">
						</el-table-column>
						<el-table-column prop="" label="操作" width="85">
							<template slot-scope="scope">
								<div>
									<router-link tag="span" to="/index/Cha">
										{{scope.row.caozuo}}
									</router-link>
								</div>
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
		name:'DaiHouJianCha',
		data() {
			const item = [{
					baogao:'ALT201812181528964',
					id: '100001',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'电话检查',
					yuanyin:'首次检查',
					yijian: '正常贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
				{
					baogao:'ALT201812181528964',
					id: '100002',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'电话检查',
					yuanyin:'首次检查',
					yijian: '关注贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
				{
					baogao:'ALT201812181528964',
					id: '100003',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'实地检查',
					yuanyin:'日常检查',
					yijian: '关注贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
				{
					baogao:'ALT201812181528964',
					id: '100004',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'实地检查',
					yuanyin:'日常检查',
					yijian: '次级贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
				{
					baogao:'ALT201812181528964',
					id: '100005',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'电话检查',
					yuanyin:'首次检查',
					redyijian: '可疑贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
				{
					baogao:'ALT201812181528964',
					id: '100006',
					name: '老朱',
					hetongmoney:'48000',
					jiekuan: '12',
					daikuan: '个人信用',
					huankuan: '等本等息',
					date: '2018-12-15',
					fangshi:'电话检查',
					yuanyin:'首次检查',
					redyijian: '损失贷款',
					jianyi:'客户资信较好，信用稳定',
					caozuo: '查看'
				},
		
			];
			return {
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				dialogTableVisible: false,
				dialogTableVisible2: false,
				currentPage4: 5,
				form: {
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
			}
		}
	}
</script>

<style>
	.addBuMen {
		font-size: 16px;
	}
	
	.addBuMen td {
		vertical-align: top;
	}
	
	.addBuMen>tr>td>span {
		color: red;
	}
	
	.addBuMen>tr>td>label {
		margin-right: 15px;
	}
	
	.addBuMen textarea {
		width: 80%;
		height: 150px;
		padding: 5px 10px;
	}
	
	.addBuMen input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}
	.add{
		background:#333;
	}
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

	.dao2 {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
		padding: 7px 16px;
		border-radius: 4px;
		margin-right: 10px;
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
	
	.bgColor2 select{
		color:#ccc;
		border-radius: 2px;
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

	.font3 {
		font-weight: bold;
		margin-left: 10px;
		line-height: 30px;
	}
</style>
