<!-- 贷前管理-准入授信-已终止 -->
<template>
		<el-main>
			<div class="lieBiao">
				<span class="floatL font2">数据列表</span>
				<button class="floatR dao">
					<i class="el-icon-upload2"></i>导出
				</button>
				<div class="clear"></div>
			</div>
			<el-table :data="tableData">
			</el-table>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="借款编号" width="90">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="75">
					</el-table-column>
					<el-table-column prop="date" label="申请日期" width="95">
					</el-table-column>
					<el-table-column prop="phone" label="手机号" width="120">
					</el-table-column>
					<el-table-column prop="edu" label="申请额度" width="80">
					</el-table-column>
					<el-table-column prop="huankuan" label="还款方式" width="90">
					</el-table-column>
					<el-table-column prop="jiekuan" label="借款期限" width="80">
					</el-table-column>
					<el-table-column prop="daikuan" label="贷款类型" width="80">
					</el-table-column>
					<!-- <el-table-column prop="shenpi" label="审批金额" width="80">
					</el-table-column> -->
					<el-table-column prop="" label="状态" width="85">
						<template slot-scope="scope">
							<div class="shenhe">
								<div class="boHui">{{ scope.row.jujue }}</div>
								<div>
									<span type="text" @click="dialogTableVisible = true">
										<span type="primary" @click="openFullScreen2">
											{{ scope.row.xiangqing }}
										</span>
									</span>
									<el-dialog title="审核详情" :visible.sync="dialogTableVisible">
										<el-table :data="gridData">
											<el-table-column property="date" label="审核时间" width="100"></el-table-column>
											<el-table-column property="zhuangtai" label="状态" width="80"></el-table-column>
											<el-table-column property="renyuan" label="审核人员" width="80"></el-table-column>
											<el-table-column property="jieguo" label="审核结果" width="80"></el-table-column>
											<el-table-column label="反馈详情">
												<template slot-scope="scope">
													<div>{{ scope.row.fankui }}</div>
													<div align="left">{{ scope.row.edu }}</div>
												</template>
											</el-table-column>
										</el-table>
									</el-dialog>
								</div>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="chushendate" label="初审时间" width="95">
					</el-table-column>
					<el-table-column prop="chushenren" label="初审人员" width="85">
					</el-table-column>
					<el-table-column prop="" label="操作" width="75">
						<template slot-scope="scope">
							<router-link to="/index/ChaKan" tag="div">{{ scope.row.caozuo }}</router-link>
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

<script>
	export default{
		name:'ZhunYiZhongZhi',
		data() {
			const item = [{
					id: '100001',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
				},
				{
					id: '100002',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
				},
				{
					id: '100003',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
				},
				{
					id: '100004',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
				},
				{
					id: '100005',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
				},
				{
					id: '100006',
					name: '老朱',
					date: '2018-12-15 14:36:18',
					phone: '13888888888',
					edu: '50000',
					huankuan: '等本等息',
					jiekuan: '12',
					daikuan: '个人信用',
					shenpi: '50000',
					jujue: '初审拒绝',
					xiangqing: '审核详情',
					chushendate: '2018-12-15 14:36:18',
					chushenren: '张茉茉',
					caozuo: '查看'
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
				
				currentPage4: 5
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
	.boHui{
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
