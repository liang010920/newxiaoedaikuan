<!-- 贷款材料管理 -->
<template>
	<el-container>
		<el-main>
			<div class="datalie">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">产品工厂</a></el-breadcrumb-item>
						<el-breadcrumb-item>贷款材料管理</el-breadcrumb-item>
					</el-breadcrumb>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<router-link to="/cp/NewCaiLiao"><button type="button">新增</button></router-link>
					
				</div>
				<el-table :data="message" border stripe style="width: 1102px;text-align: center;">
					<el-table-column style="color: #70B6FD;" prop="name" label="材料名称">
					</el-table-column>
					<el-table-column prop="type" label="材料类型">
					</el-table-column>
					<el-table-column prop="shuliang" label="附近上传数量">
					</el-table-column>
					<el-table-column prop="zhuangtai" label="材料状态">
					</el-table-column>
					<el-table-column prop="paixu" label="排序值">
					</el-table-column>
					<el-table-column prop="gengxin" label="更新时间">
					</el-table-column>
					<el-table-column prop="operate" label="操作" width="200px" >
						<div>
							<router-link to="/cp/NewCaiLiao"><el-button type="text" >查看</el-button></router-link>
							<router-link to="/cp/NewCaiLiao"><el-button type="text" >编辑</el-button></router-link>
							<el-button type="text" @click="jin">禁用</el-button>
							<el-button type="text" @click="dele">删除</el-button>
						</div>
					</el-table-column>
				</el-table>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpcailiao',
		// 添加数据
		data() {
			return {
				// 查看
				// form: {
				// 	name: '',
				// 	region: '',
				// 	date1: '',
				// 	date2: '',
				// 	delivery: false,
				// 	type: [],
				// 	resource: '',
				// 	desc: ''
				// },
				// 附件要求
				// num: 1,
				message: [{
					name: '工作证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '使用中',
					paixu: '0',
					gengxin: '2018-12-01',
					operate: ''
				}, {
					name: '银行流水证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '未使用',
					paixu: '100',
					gengxin: '2018-12-01',
					operate: ''
				}, {
					name: '保单证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '未使用',
					paixu: '100',
					gengxin: '2018-12-01',
					operate: ''
				}, {
					name: '房产证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '未使用',
					paixu: '100',
					gengxin: '2018-12-01',
					operate: ''
				}, {
					name: '学历证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '未使用',
					paixu: '100',
					gengxin: '2018-12-01',
					operate: ''
				}, {
					name: '其他证明',
					type: '附件',
					shuliang: '2',
					zhuangtai: '未使用',
					paixu: '100',
					gengxin: '2018-12-01',
					operate: ''
				}],
			}
		},
		methods: {
			// 附件要求
			handleChange(value) {
				console.log(value);
			},
			// 禁用
			jin() {
				this.$confirm('确定要禁用该合同吗?', '提示', {
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
	.el-button+.el-button{
		margin: 0 !important;
	}
	.datalie {
		width: 1102px;
	}

	header {
		height: 60px;
	}

	.shuju {
		padding-top: 20px;
		padding-bottom: 40px;
		background: #F3F3F3;
	}

	.shuju>p {
		float: left;
		font-weight: 700;
		margin-left: 40px;
	}

	.shuju button {
		float: right;
		width: 100px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
	}

	.qi input {
		margin-left: 20px;
	}

	.qi input:nth-child(1) {
		margin-left: -200px;
	}

	.el-form-item br+span {
		color: #BFBFBF;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text {
		color: #676767;
	}
</style>
