<!-- 财务管理-银行账户管理 -->
<template>
	<el-container>
		<el-main>
			<div class="zhanghu">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">财务管理</a></el-breadcrumb-item>
						<el-breadcrumb-item>银行账户管理</el-breadcrumb-item>
					</el-breadcrumb>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<div class="buts">
						<button>
							<router-link to="/cw/cwzhbian">添加</router-link>
						</button>
						<button><i class="el-icon-printer"></i>打印</button>
						<button><i class="el-icon-upload2"></i>导出</button>
					</div>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column prop="zhanghao" label="账号">
					</el-table-column>
					<el-table-column prop="name" label="账户名称">
					</el-table-column>
					<el-table-column prop="kaihuyh" label="开户银行">
					</el-table-column>
					<el-table-column prop="kaihu" label="开户行">
					</el-table-column>
					<el-table-column prop="zhong" label="币种">
					</el-table-column>
					<el-table-column prop="lei" label="账户类型">
					</el-table-column>
					<el-table-column prop="shou" width="110px" label="收入">
					</el-table-column>
					<el-table-column prop="zhi" label="支出">
					</el-table-column>
					<el-table-column prop="riqi" label="更新日期">
					</el-table-column>
					<el-table-column prop="zhuang" label="状态">
					</el-table-column>
					<el-table-column label="操作" width="175px">
						<el-button type="text">
							<router-link to="/cw/cwzhbian">编辑</router-link>
						</el-button>
						<el-button type="text" @click="dele">删除</el-button>
						<el-button type="text" @click="dialogTableVisible2 = true">账户明细</el-button>
					</el-table-column>
				</el-table>
			</div>
			<!-- 账户明细 -->
			<el-dialog title="账户明细" :visible.sync="dialogTableVisible2">
				<div>
					<table width="100%" class="addBuMen">
						<tr height="50px">
							<td align="right"><span>*</span>账号：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right">账号名称：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right">开户银行：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr height="40px">
							<td align="right">账户类型：</td>
							<td align="left"><input type="text"></td>
						</tr>
						<tr>
							<td align="right"><span>*</span>职能描述：</td>
							<td align="left"><textarea placeholder="请输入内容"></textarea></td>
						</tr>
					</table>
				</div>
				<div align="center" slot="footer" class="dialog-footer">
					<el-button @click="dialogTableVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="dialogTableVisible2 = false">
						确 定</el-button>
				</div>
			</el-dialog>
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
	</el-container>
</template>

<script>
	export default {
		name: 'cwyhgl',
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
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
		},
		// 添加数据
		data() {
			return {
				dialogTableVisible2:false,
				currentPage4: 5,
				message: [{
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '基本账户',
					shou: '48,584.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '使用中'
				}, {
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '基本账户',
					shou: '0.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '已停用'
				}, {
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '专用账户',
					shou: '8,888.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '使用中'
				}, {
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '专用账户',
					shou: '48,584.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '使用中'
				}, {
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '辅助账户',
					shou: '0.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '使用中'
				}, {
					zhanghao: '6225 8888 8888 8888',
					name: '杭州蚂蚁小额贷款有限公司',
					kaihuyh: '招商银行',
					kaihu: '杭州市招商银行位于花路支行',
					zhong: '人民币',
					lei: '辅助账户',
					shou: '8,888.00',
					zhi: '0.00',
					riqi: '2018-12-16',
					zhuang: '未使用'
				}],
				formLabelWidth: '120px'
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
	.zhanghu {
		width: 1102px;
	}

	header {
		height: 65px;
		background-color: #F2F2F2;
	}

	.el-breadcrumb {
		margin-left: 60px;
		font-size: 14px;
		line-height: 1;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.but {
		float: left;
		height: 80px;
		width: 1000px;
		margin-left: 30px;
		line-height: 80px;
		background-color: white;
	}

	.but .el-select {
		float: left;
		width: 167px;
		margin-left: 30px;
	}

	.but .el-button--primary {
		width: 80px;
		height: 30px;
		line-height: 5px;
		color: white;
		margin-left: -450px;
		background: #6C6C6C;
		border-color: #6C6C6C;
		border-radius: 10px 10px 10px 10px;
	}

	.shuju {
		padding-top: 20px;
		padding-bottom: 50px;
		background: #F3F3F3;
		border: 1px solid #E4E4E4;
	}

	.shuju>p {
		float: left;
		font-weight: 700;
		margin-left: 40px;
	}

	.shuju .buts {
		float: right;
		margin-right: 100px;
	}

	.buts input {
		height: 34px;
		color: white;
		width: 120px;
		margin-left: 10px;
		background: #9A9A9A;
		border-radius: 5px 5px;
	}

	.buts button {
		height: 34px;
		width: 60px;
		margin-left: 10px;
	}

	.buts button:nth-of-type(1) {
		height: 34px;
		width: 60px;
		color: white;
		border-radius: 5px 5px;
		background: black;
	}

	.buts button a {
		color: white;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text span {
		color: #676767;
	}

	.cell .el-button--text span a {
		color: #676767;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}
</style>
