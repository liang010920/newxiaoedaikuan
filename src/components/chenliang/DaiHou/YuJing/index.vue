<!-- 贷后管理-贷后预警 -->
<template>
	<el-container>
		<template>
			<el-main>
				<div class="jiekuan"><i class="el-icon-s-home"></i>首页/贷后管理/贷后预警列表</div>
				<div class="bgColor2" align="left">
					<select>
						<option value="预警阶段">预警阶段</option>
						<option value="借款类型">借款类型</option>
						<option value="贷款类型">贷款类型</option>
						<option value="贷款类型">贷款类型</option>
					</select>
					<select>
						<option value="启动状态">启动状态</option>
						<option value="借款类型">借款类型</option>
						<option value="贷款类型">贷款类型</option>
						<option value="贷款类型">贷款类型</option>
					</select>
					<el-row>
						<el-button type="info">查询</el-button>
					</el-row>
				</div>
				<div class="lieBiao">
					<span class="floatL font3">数据列表</span>
					<span class="floatR">
						<router-link to="/index/YuJingAdd" tag="span">
							<el-button type="info" class="add">新增</el-button>
						</router-link>
					</span>

					<div class="clear"></div>
				</div>
				<template>
					<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
						<el-table-column label="编号" width="80">
							<template slot-scope="scope"><span>{{ scope.row.id }}</span></template>
						</el-table-column>
						<el-table-column prop="yujingname" label="预警名称" width="160">
						</el-table-column>
						<el-table-column prop="daikuan" label="贷款类型" width="80">
						</el-table-column>
						<el-table-column prop="chanpin" label="借款产品" width="80">
						</el-table-column>
						<el-table-column prop="jieduan" label="预警阶段" width="150">
						</el-table-column>
						<el-table-column prop="day" label="提前预警天数" width="105">
						</el-table-column>
						<el-table-column prop="week" label="预警周期" width="80">
						</el-table-column>
						<el-table-column prop="date" label="提醒时间" width="80">
						</el-table-column>
						<el-table-column prop="fangshi" label="发送方式" width="80">
						</el-table-column>
						<el-table-column prop="" label="启用状态" width="90">
							<template slot-scope="scope">
								<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
								</el-switch>
								<div>{{scope.row.kaiqi}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="" label="操作" width="105">
							<template slot-scope="scope">
								<div>
									<span @click="handleEdit(scope.$index, scope.row)" style="margin-right: 10px;">
										<router-link tag="span" to="/index/YuJingCha">{{scope.row.chakan}}</router-link>
									</span>
									<span @click="handleEdit2(scope.$index, scope.row)">
										<router-link tag="span" to="/index/YuJingNew">{{scope.row.update}}</router-link></span>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<template>
					<div class="block margin2">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
						:page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
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
	export default {
		name: 'YuJing',
		data() {
			const item = [{
					id: 'EW1001',
					yujingname: '逾期预警',
					daikuan: '个人信用',
					chanpin: '工薪贷',
					jieduan: '即将到期',
					day: '3',
					week: '每天一次',
					date: '10:00',
					fangshi: '短信',
					kaiqi: '开启',
					chakan: '查看',
					update: '修改'
				},
				{
					id: 'EW1002',
					yujingname: '即将到期预警',
					daikuan: '个人信用',
					chanpin: '悦薪贷',
					jieduan: '已经预期的贷款',
					day: '7',
					week: '一次',
					date: '18:00',
					fangshi: '邮件',
					kaiqi: '开启',
					chakan: '查看',
					update: '修改'
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
				id:'deft',
				value:true
			}
		},
		methods: {
			handleEdit(index,row){
				this.$router.push({path:'/index/YuJingCha',query:{list:row}})
				// console.log(index, row);
			},
			handleEdit2(index,row){
				this.$router.push({path:'/index/YuJingNew',query:{list:row}})
				// console.log(index, row);
			},
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
	.add {
		background: #333;
	}

	.shehe>div:first-child {
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

	.bgColor2 select {
		color: #ccc !important;
		border-radius: 2px;
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
