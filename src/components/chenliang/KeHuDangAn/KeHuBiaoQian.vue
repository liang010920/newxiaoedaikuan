<!-- 客户档案管理-客户标签 -->
<template>
	<el-container>
		<el-main style="background: #f9f9f9;">
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/客户档案管理/客户标签</div>
			<div class="lieBiao">
				<span class="floatL font2">数据列表</span>
				<div class="lieBiao-kuang2">
					<span @click="dialogFormVisible1 = true" style="background:#fff;border: 1px solid #E4E4E4;padding: 3px 7px;">添加</span>
				</div>
				<div class="clear"></div>
			</div>
			<div>
				<el-table :data="tableData" border style="width: 100%;">
					<el-table-column prop="date" label="标签名称" width="300">
					</el-table-column>
					<el-table-column prop="name" label="自动打标签条件" width="300">
					</el-table-column>
					<el-table-column prop="address" label="备注" width="207">
					</el-table-column>
					<el-table-column prop="money" label="操作" width="300">
						<el-button type="text" @click="dialogFormVisible1 = true">编辑</el-button>
						<el-button type="text" @click="dele">删除</el-button>
					</el-table-column>
			
				</el-table>
				<el-dialog title="添加标签类型" :visible.sync="dialogFormVisible1">
					<el-form>
						<p align="center" style="margin-left: 80px;">
							<span style="color: red;margin-right: 5px;">*</span>标签名称 : <input type="text" style="margin-left: 5px;">
						</p>
						<p align="center" style="margin-left: -32px;margin-top: 15px;">
							自动打标签条件 : 累计成功借贷 <input type="text" style="margin-left: 15px;"> 笔
						</p>
						<p align="center" style="margin-left: 32px;margin-top: 15px;">
							或者 : 累计借贷金额 <input type="text" style="margin-left: 15px;"> 元
						</p>
				
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible1 = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible1 = false" style="background-color: black;">确定</el-button>
					</div>
				</el-dialog>
				<template>
					<div class="yemian-di">
						Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
					</div>
				</template>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				dialogFormVisible: false,
				dialogFormVisible1: false,
				tableData: [{
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}, {
					date: '优质用户',
					name: '累计成功借贷:10笔 累计借贷金额：￥20000',
					address: '',
					money: '编辑 删除'
				}]
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
			},
		}
	}
</script>

<style>
	.lieBiao-kuang2{
		float:right;
		margin-right: 10px;
	}
	.el-table .cell {
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-all;
		line-height: 23px;
		padding-right: 10px;
		text-align: center;
	}

	.el-pagination {
		white-space: nowrap;
		padding: 2px 5px;
		color: #303133;
		font-weight: 700;
		margin-left: 619px;
	}
	.yemian-di {
		background-color: #F9F9F9;
		text-align: center;
		height: 67px;
		padding-top: 45px;
	}
</style>

