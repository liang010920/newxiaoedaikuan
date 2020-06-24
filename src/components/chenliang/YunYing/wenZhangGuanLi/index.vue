<!-- 运营管理-文章 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/运营管理/文章管理</div>
			<div class="bgColor2" align="left">
				<span class="hanggao2">帮助标题：</span><input type="text" placeholder="标题关键字">
				<span class="hanggao2">帮助分类：</span><select>
					<option value="全部">全部</option>
					<option value="借款类型">借款类型</option>
					<option value="贷款类型">贷款类型</option>
					<option value="贷款类型">贷款类型</option>
				</select>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao">
				<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
				<span class="floatR" style="border: 0;">
					<span class="dao2">
						<router-link tag="span" to="/index/YunYing/wenZhangGuanLi/FaBuBangZu">发布帮助</router-link>
					</span>
					<span class="dao2" style="margin-left:10px;">
						<router-link tag="span" to="/index/YunYing/wenZhangGuanLi/FaBuBangZu/FenLeiGuanLi">分类管理</router-link>
					</span>
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
				<el-table :data="tableData" border style="width: 100%;">
					<el-table-column type="selection" width="35px"></el-table-column>
					<el-table-column prop="id" label="编号" width="70px"></el-table-column>
					<el-table-column prop="name" label="广告名称" width="200px"></el-table-column>
					<el-table-column prop="address" label="广告位置" width="110px"></el-table-column>
					<el-table-column prop="img" label="广告图片" width="110px">
						<img src="../../../../../public/images/2.png">
					</el-table-column>
					<el-table-column prop="time" label="时间" width="240px">
						<template slot-scope="scope">
							<p>{{scope.row.time1}}</p>
							<p>{{scope.row.time2}}</p>
						</template>
					</el-table-column>
					<el-table-column prop="upDown" label="上线/下线" width="90px">
						<el-switch>
						</el-switch>
					</el-table-column>
					<el-table-column prop="click" label="点击次数"></el-table-column>
					<el-table-column prop="dingDan" label="生成订单"></el-table-column>
					<el-table-column prop="play" label="操作" width="200px">
						<template slot-scope="scope">
							<p class="play">
								<router-link to="/BangZhuXiangQing" tag="span">
									<span style="margin-right: 10px;">{{scope.row.chakan}}</span>
								</router-link>
								<router-link to="/index/YunYing/wenZhangGuanLi/FaBuBangZu" tag="span">
									<span style="margin: 0% 2%;">{{scope.row.bianJi}}</span>
								</router-link>
								<a @click="dele">{{scope.row.delete}}</a>
							</p>
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
		name: 'GuangGao',
		data() {
			const item = [
				{
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}, {
					id: '10001',
					name: '春节有礼，免息券任性送',
					address: 'APP首页轮播',
					time1: '开始时间：2018-08-02 15:47:44',
					time2: '到期时间：2018-08-02 15:47:44',
					click: '100',
					dingDan: '50',
					bianJi: '编辑',
					chakan: '查看',
					delete: '删除'
				}
			];
			return {
				//tableData: Array(20).fill(item), //一个item数据显示20条数据
				tableData: item,
				form: {
					name: '',
					data1: '',
				},
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
			},
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
			},
			zhiding() {
				this.$confirm('确定要置顶该条数据吗?', '置顶确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '置顶成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消置顶'
					});
				});
			},
			bianji2() {
				this.$confirm('确定要编辑该条数据吗?', '置顶确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '申请管理员中!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消编辑'
					});
				});
			}
		}
	}
</script>

<style>
	.cell{
		text-align: center;
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
	.bgColor2{
		margin: 0 !important;
		margin-bottom: 15px !important;
		border:1px solid #E4E4E4;
		box-shadow: 1px 1px 5px #E4E4E4;
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
