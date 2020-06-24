<!-- 合同模板管理-->
<template>
	<el-container>
		<el-main>
			<div class="hetong">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">产品工厂</a></el-breadcrumb-item>
						<el-breadcrumb-item>合同模板管理</el-breadcrumb-item>
					</el-breadcrumb>

					<div class="buts2">
						<input placeholder="合同端号">
						<el-button type="primary" @click="openFullScreen2">查询</el-button>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
					<router-link to="/cp/NewHeTong"><button type="button">新增</button></router-link>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column style="color: #70B6FD;" prop="number" label="合同模板编号">
					</el-table-column>
					<el-table-column prop="name" label="合同模板名称">
					</el-table-column>
					<el-table-column prop="lei" label="合同类型">
					</el-table-column>
					<el-table-column prop="zhuang" label="合同状态">
					</el-table-column>
					<el-table-column prop="shijian" label="更新时间">
					</el-table-column>
					<el-table-column prop="caoz" label="操作" width="200px">
						<template slot-scope="scope">
							<router-link to="/cp/NewHeTong" tag="span"><span style="margin-right: 1%;">{{scope.row.caoz}} </span></router-link> 
							<span @click="yulan"> {{scope.row.yulan}}</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cphetong',
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
			yulan() {
				this.$confirm('需要管理员才能进行预览！', '确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '预览成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消预览'
					});
				});
			}
		},
		// 添加数据
		data() {
			return {
				// 审核
				dialogShen: false,
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					number: '100001',
					name: '个人信用贷款合同',
					lei: '个人信用贷款',
					zhuang: '使用中',
					shijian: '2018-12-01',
					caoz:'下载',
					yulan:'预览'
				}],
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style scoped>
	.hetong {
		width: 1102px;
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

	.buts2 {
		float: left;
		height: 80px;
		width: 1000px;
		margin-left: 30px;
		line-height: 80px;
		background-color: white;
	}

	.buts2 input {
		float: left;
		width: 167px;
		height: 30px;
		padding-left: 4px;
		line-height: 30px;
		margin-top: 25px;
		margin-left: 30px;
	}

	.buts2 .el-button--primary {
		width: 80px;
		height: 30px;
		line-height: 5px;
		color: white;
		margin-left: -499px;
		background: #6C6C6C;
		border-color: #6C6C6C;
		border-radius: 10px 10px 10px 10px;
	}

	.xin {
		float: right;
		width: 100px;
		height: 30px;
		color: white;
		margin-top: 25px;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		line-height: 10px;
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
	.shuju button {
		float: right;
		width: 100px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text {
		color: #676767;
	}
</style>
