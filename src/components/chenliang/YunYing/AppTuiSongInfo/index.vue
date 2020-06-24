<!-- 运营管理-App推送信息 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9;">
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/运营管理/消息管理/App推送消息</div>
			<div class="bgColor2" align="left" style="margin: 0 !important; margin-bottom: 20px;">
				<span class="hanggao2">消息标题：</span><input type="text" placeholder="消息标题">
				<span class="hanggao2">发布人员：</span><select>
					<option value="全部">全部</option>
					<option value="借款类型">借款类型</option>
					<option value="贷款类型">贷款类型</option>
					<option value="贷款类型">贷款类型</option>
				</select>
				<span class="hanggao2">发布时间：</span>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-col :span="11">
							<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
					</el-form-item>
				</el-form>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao">
				<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
				<span class="floatR" style="border: 0;">
					<router-link to="/index/JieKuanShaiXuan" tag="span"><el-button style="padding: 0 !important;color: #000000;" type="text"><span
					class="dao2">群发信息</span></el-button></router-link>
					<select class="xiala">
						<option value="显示条数">显示条数</option>
						<option value="5">5</option>
						<option value="3">3</option>
						<option value="1">1</option>
					</select>
					<select class="xiala">
						<option value="排序方式">排序方式</option>
						<option value="顺序">顺序</option>
						<option value="倒序">倒序</option>
					</select>
				</span>
				<div class="clear"></div>
			</div>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="编号" width="90">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="title" label="推送标题" width="210">
					</el-table-column>
					<el-table-column prop="type" label="类型">
					</el-table-column>
					<el-table-column prop="date" label="发布时间">
					</el-table-column>
					<el-table-column prop="renyuan" label="发布人员">
					</el-table-column>
					<el-table-column prop="jieshou" label="接收对象">
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<span  @click="dialogTableVisible2 = true" class="bian3">{{ scope.row.chakan }}</span>
							<el-dialog title="查看" :visible.sync="dialogTableVisible2">
								<div class="qunfa">
									<el-row>
										<el-col :span="8">
											<div align="right" style="text-align: right !important;">
												推送类型：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left" style="text-align: left !important;">
												链接
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right" style="text-align: right !important;">
												链接：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left" style="text-align: left !important;">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right" style="text-align: right !important;">
												推送标题：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left" style="text-align: left !important;">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right" style="text-align: right !important;">
												推送内容：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left" style="text-align: left !important;">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
								<span slot="footer" class="dialog-footer">
									<el-button @click="dialogTableVisible2 = false">取 消</el-button>
									<el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
								</span>
							</el-dialog>
							<span @click="dele">{{ scope.row.del }}</span>
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
	</el-container>
</template>

<script>
	export default {
		name: 'AppTuiSongInfo',
		data() {
			const item = {
					id: '1000001',
					title: '抵押贷产品专区正式上线公告',
					type: '链接',
					date: '2018-08-02 15:47:44',
					renyuan: 'admin',
					jieshou: '200人',
					chakan: '查看',
					del: '删除'
				};
			return {
				tableData: Array(20).fill(item), //一个item数据显示20条数据
				// tableData: item,
				form: {
					name: '',
					data1: '',
				},
				currentPage4: 5,
				dialogTableVisible:false,
				dialogTableVisible2:false,
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
	.qunfa>div{
		margin-bottom: 1%;
	}
	.qunfa span{
		color: red;
	}
	.bian3{
		margin-right: 10px;
	}
	.xiala{
		padding: 3px 3px 5px 3px;
		margin-left: 15px;
	}
	.hanggao2{
		line-height: 35px;
		color: #333;
		font-size: 15px;
		margin-left: 15px;
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

	.dao2 {
		background: #fff;
		padding: 5px 7px;
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