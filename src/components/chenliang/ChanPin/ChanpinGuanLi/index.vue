<!-- 贷款产品管理，新增没做 -->
<template>
	<el-container>
		<el-main>
			<div class="loan">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">产品工厂</a></el-breadcrumb-item>
						<el-breadcrumb-item>借款产品配置</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="but">
						<el-select placeholder="贷款类型">
							<el-option>123</el-option>
						</el-select>
						<el-select placeholder="状态">
							<el-option>123</el-option>

						</el-select>
						<el-button type="primary" @click="openFullScreen2">查询</el-button>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<router-link tag="button" to="/cp/cpxin">
						新增
					</router-link>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;text-align: center;">
					<el-table-column style="color: #70B6FD;" prop="number" label="产品编号">
					</el-table-column>
					<el-table-column prop="name" label="产品名称">
					</el-table-column>
					<el-table-column prop="lei" label="贷款类型">
					</el-table-column>
					<el-table-column label="标签">
						<el-switch v-model="value1" inactive-text="新品:">
						</el-switch>
						<br />
						<el-switch v-model="value2" inactive-text="推荐:">
						</el-switch>
					</el-table-column>
					<el-table-column prop="paixu" label="排序">
					</el-table-column>
					<el-table-column prop="zhuang" label="状态">
					</el-table-column>
					<el-table-column label="操作" width="200px">
						<div class="caozuo22">
							<span><router-link tag="span" to="/cp/GuanLiBianJi">查看</router-link></span>
							<span type="text"><router-link tag="span" to="/cp/GuanLiBianJi">编辑</router-link></span>
							<span type="text" @click="tishen">提审</span>
							<span type="text" @click="dele">删除</span>
						</div>
					</el-table-column>
				</el-table>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'ChanpinGuanLi',
		methods: {
			// 查询
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
				this.$confirm('确定要删除该产品吗?', '删除确认', {
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
			// 提审
			tishen() {
				this.$confirm('确定要提审该产品吗?', '提审确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '提审成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消提审'
					});
				});
			}
		},
		// 添加数据
		data() {
			return {
				value1: '',
				value2: '',
				message: [{
					number: '100001',
					name: '高薪贷',
					lei: '个人信用',
					paixu: '1',
					zhuang: '发布中'
				}, {
					number: '100002',
					name: '才薪货',
					lei: '个人信用',
					paixu: '2',
					zhuang: '已审核'
				}, {
					number: '100003',
					name: '保薪贷',
					lei: '个人信用',
					paixu: '3',
					zhuang: '未审核'
				}, {
					number: '100004',
					name: '室薪贷',
					lei: '个人信用',
					paixu: '4',
					zhuang: '审核不通过'
				}, {
					number: '100005',
					name: '高薪贷',
					lei: '个人信用',
					paixu: '5',
					zhuang: '已下架'
				}]
			}
		}
	}
</script>

<style>
	.caozuo22>span{
		margin-right: 5px;
	}
	.loan {
		width: 1102px;
	}

	.item {
		margin-top: 10px;
		margin-right: 40px;
	}

	header {
		height: 165px;
		background-color: #F2F2F2;
	}

	.el-breadcrumb {
		margin-left: 60px;
		font-size: 14px;
		line-height: 1;
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
		width: 115px;
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
		padding-bottom: 40px;
		background: #F3F3F3;
		border: 1px solid #E4E4E4;
	}

	.shuju>p {
		float: left;
		font-weight: 700;
		margin-left: 40px;
	}

	.shuju>button {
		float: right;
		width: 100px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
	}

	.cell {
		text-align: center;
	}

	.cell .el-button--text {
		color: #676767;
	}
</style>
