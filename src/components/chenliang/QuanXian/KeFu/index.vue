<!-- 系统权限-客户管理 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/客服管理
				<span class="f5"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="clear"></div>
			<div class="fuwu">
				<ul>
					<li>
						<span><img src="../../../../../public/images/fuwu.png" align="center"></span>
						<div>历史接待次数</div>
						<div>200</div>
					</li>
					<li>
						<span><img src="../../../../../public/images/fuwu.png" align="center"></span>
						<div>历史接待次数</div>
						<div>200</div>
					</li>
					<li>
						<span><img src="../../../../../public/images/fuwu.png" align="center"></span>
						<div>历史接待次数</div>
						<div>200</div>
					</li>
					<li>
						<span><img src="../../../../../public/images/fuwu.png" align="center"></span>
						<div>历史接待次数</div>
						<div>200</div>
					</li>
				</ul>
			</div>
			<div align="left" class="bgColor7">
				<i class="el-icon-s-fold"></i>数据列表
				<span @click="dialogTableVisible = true" class="tianjia">添加</span>
				<el-dialog title="添加客服" :visible.sync="dialogTableVisible">
					<div>
						<table width="100%" class="addBuMen">
							<tr height="40px">
								<td align="right"><span>*</span>客户昵称：</td>
								<td><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right">QQ号：</td>
								<td><input type="text"></td>
							</tr>
							<tr height="40px">
								<td align="right"><span>*</span>成员账号：</td>
								<td>
									<template>
										<el-select v-model="value1" clearable placeholder="请选择" style="margin-right:;">
											<el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1">
											</el-option>
										</el-select>
									</template>
									<template>
										<el-select v-model="value1" clearable placeholder="请选择">
											<el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1">
											</el-option>
										</el-select>
									</template>
								</td>
							</tr>
							<tr>
								<td align="right"><span>*</span>备注信息：</td>
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
					<el-table-column prop="zhanghao" label="成员账号" width="90">
					</el-table-column>
					<el-table-column prop="name" label="客服昵称" width="90">
					</el-table-column>
					<el-table-column prop="phone" label="手机号">
					</el-table-column>
					<el-table-column prop="qq" label="QQ号" width="100">
					</el-table-column>
					<el-table-column prop="date" label="添加时间">
					</el-table-column>
					<el-table-column prop="login" label="最后登录">
					</el-table-column>
					<el-table-column label="是否启用" width="90">
						<el-switch v-model="value"></el-switch>
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<div>
								<span class="bianju">
								<router-link to="/index/QuanXian/KeFu/JiLu" tag="span">{{scope.row.chakan}}</router-link></span>
								<span class="bianju"  @click="dialogTableVisible2 = true">{{scope.row.bianji}}</span>
								<el-dialog title="编辑客服" :visible.sync="dialogTableVisible2">
									<div>
										<table width="100%" class="addBuMen">
											<tr height="40px">
												<td align="right"><span>*</span>客户昵称：</td>
												<td><input type="text"></td>
											</tr>
											<tr height="40px">
												<td align="right">QQ号：</td>
												<td><input type="text"></td>
											</tr>
											<tr height="40px">
												<td align="right"><span>*</span>成员账号：</td>
												<td>
													<template>
														<el-select v-model="value1" clearable placeholder="请选择" style="margin-right:;">
															<el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1">
															</el-option>
														</el-select>
													</template>
													<template>
														<el-select v-model="value1" clearable placeholder="请选择">
															<el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1">
															</el-option>
														</el-select>
													</template>
												</td>
											</tr>
											<tr>
												<td align="right"><span>*</span>备注信息：</td>
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
		name: 'KeFu',
		data() {
			const item = {
				zhanghao: 'user',
				name: '小熊',
				phone: '18888888888',
				qq: '88888888',
				date: '2018-08-05 15:47:44',
				login: '2018-08-05 15:47:44',
				chakan: '查看记录',
				bianji: '编辑',
				del: '删除',
				value: true
			};
			return {
				tableData: Array(10).fill(item), //一个item数据显示20条数据
				dialogTableVisible: false,
				dialogTableVisible2: false,
				formLabelWidth: '120px',
				value: true,
				options: [{
					value1: '选项1',
					label: '黄金糕'
				}, {
					value1: '选项2',
					label: '双皮奶'
				}, {
					value1: '选项3',
					label: '蚵仔煎'
				}, {
					value1: '选项4',
					label: '龙须面'
				}, {
					value1: '选项5',
					label: '北京烤鸭'
				}],
				value1: ''
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
	.fuwu {
		margin-top: 20px;
		padding: 20px 10px;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
	}

	.fuwu>ul>li {
		text-align: left;
		list-style-type: none;
		display: inline-block;
		width: 25%;
		font-size: 18px;
	}

	.fuwu>ul>li>span {
		float: left;
		margin-right: 10px;
	}

	.fuwu>ul>li>div:first-child {
		color: #999;
	}

	.fuwu>ul>li>div:last-child {
		color: #666;
	}

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
