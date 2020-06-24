<!-- 系统权限-部门管理 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/部门管理
				<span class="f5"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor7">
				<i class="el-icon-s-fold"></i>数据列表
				<span @click="dialogTableVisible = true" class="tianjia">添加</span>
				<el-dialog title="添加部门" :visible.sync="dialogTableVisible">
					<div>
						<table width="100%" class="addBuMen">
							<tr height="50px">
								<td align="right"><span>*</span>部门名称：</td>
								<td><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">是否启动：</td>
								<td>
									<label><input type="radio" name="abc">启用</label>
									<label><input type="radio" name="abc">关闭</label>
								</td>
							</tr>
							<tr>
								<td align="right"><span>*</span>职能描述：</td>
								<td><textarea placeholder="请输入内容"></textarea></td>
							</tr>
						</table>
					</div>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<template>
				<el-table :data="tableData" border style="width: 100%" align="center">
					<el-table-column prop="name" label="部门名称" width="180">
					</el-table-column>
					<el-table-column prop="miaoshu" label="职能描述" width="180">
					</el-table-column>
					<el-table-column prop="sum" label="成员数量">
					</el-table-column>
					<el-table-column prop="date" label="添加时间">
					</el-table-column>
					<el-table-column label="是否启用">
						<el-switch v-model="value"></el-switch>
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<div>
								<span class="bianju" @click="dialogTableVisible2 = true">{{scope.row.bianji}}</span>
								<el-dialog title="编辑部门" :visible.sync="dialogTableVisible2">
									<div>
										<table width="100%" class="addBuMen">
											<tr height="50px">
												<td align="right"><span>*</span>部门名称：</td>
												<td><input type="text"></td>
											</tr>
											<tr height="40px">
												<td align="right">是否启动：</td>
												<td>
													<label><input type="radio" name="abc">启用</label>
													<label><input type="radio" name="abc">关闭</label>
												</td>
											</tr>
											<tr>
												<td align="right"><span>*</span>职能描述：</td>
												<td><textarea placeholder="请输入内容"></textarea></td>
											</tr>
										</table>
									</div>
									<div slot="footer" class="dialog-footer">
										<el-button @click="dialogTableVisible2 = false">取 消</el-button>
										<el-button type="primary" @click="dialogTableVisible2 = false">
											确 定</el-button>
									</div>
								</el-dialog>
								<span @click="dele">{{scope.row.del}}</span>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</template>

		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'BuMen',
		data() {
			const item = {
				name: '风控部',
				miaoshu: '暂无描述',
				sum: '10',
				date: '2018-08-05 15:47:44',
				bianji: '编辑',
				del: '删除',
				value: true
			};
			return {
				tableData: Array(10).fill(item), //一个item数据显示20条数据
				value: true,
				dialogTableVisible: false,
				dialogTableVisible2: false,
				formLabelWidth: '120px'
			}
		},
		methods: {
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

	.el-dialog__header {
		background: #f2f2f2;
	}

	.bianju {
		margin-right: 25px;
	}

	.cell {
		text-align: center;
	}

	.tianjia {
		border: 1px solid #e4e4e4;
		float: right;
		background: #fff;
		padding: 2px 30px;
	}

	.clear {
		clear: both;
	}

	.f5 {
		border: 1px solid #e4e4e4;
		padding: 5px 15px;
		float: right;
	}

	.bgColor7 {
		margin-top: 40px;
		background: #F3F3F3;
		padding: 14px;
	}
</style>
