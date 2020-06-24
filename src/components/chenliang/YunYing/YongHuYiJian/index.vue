<!-- 用户意见 -->
<template>
	<el-container>
		<el-main>
			<div class="all">
				<!-- 头部导航 -->
				<el-breadcrumb class="title" style="line-height: 60px;margin-left:30px;" separator="/">
					<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">运营管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>用户反馈</el-breadcrumb-item>
				</el-breadcrumb>
				<!-- 消息下拉 -->
				<div class="input2">
					<div class="demo-input-size" style="padding-left: 10px;">
						<span class="guangGao">广告名称：<el-input style="width: 10rem;" size="small" placeholder="广告名称" v-model="input1"></el-input></span>
						<span class="guangGao">
							广告位置：<el-select v-model="select1" style="width: 10rem;" size="small" placeholder="全部">
								<el-option label="全部" value="1"></el-option>
								<el-option label="个人" value="2"></el-option>
								<el-option label="平台" value="3"></el-option>
							</el-select>
						</span>
						<span class="guangGao">
							到期时间：<el-select v-model="select2" style="width: 10rem;" size="small" placeholder="全部">
								<el-option label="全部" value="1"></el-option>
								<el-option label="个人" value="2"></el-option>
								<el-option label="平台" value="3"></el-option>
							</el-select>
						</span>
						<span style="position: relative;z-index: 1;">
							<el-button style="margin-left: 1.25rem;" size="small" type="primary">查询</el-button>
						</span>
					</div>
				</div>
				<!-- 消息弹框 -->
				<div class="list" style="margin-left:30px;">
					<div class="tit"><span style="float: left;"><i class="el-icon-s-fold"></i>数据列表</span>
					</div>
					<!-- 表格 -->
					<el-table :data="tableData" border style="width: 100%;">
						<el-table-column type="selection"></el-table-column>
						<el-table-column prop="id" label="编号"></el-table-column>
						<el-table-column prop="title" label="反馈问题类型" width="200px"></el-table-column>
						<el-table-column prop="time" label="用户姓名"></el-table-column>
						<el-table-column prop="men" label="反馈时间"></el-table-column>
						<el-table-column prop="jieShou" label="问题描述"></el-table-column>
						<el-table-column prop="zhuangtai" label="处理状态"></el-table-column>
						<el-table-column prop="jieguo" label="处理结果"></el-table-column>
						<el-table-column prop="play" label="操作">
							<template slot-scope="scope">
								<p class="play">
									<a><router-link to="/FanKuiXiangQing" tag="span">
										{{scope.row.select}}</router-link></a>
									<a @click="dele">{{scope.row.delete}}</a>
								</p>
							</template>
						</el-table-column>
					</el-table>
					<!-- 消息弹框 -->
					<!-- 分页 -->
					<div class="fenye">
						<div class="block" style="margin-top: 1.25rem;">
							<el-pagination background layout="total,prev, pager, next, jumper" :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'zhanNeiXiaoXi',
		data() {
			return {
				input1: '',
				select1: '',
				select2: '',
				value1: true,
				textarea: '',
				formLabelWidth: '100px',
				form: {
					name1: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				// 表格添加
				tableData: [{
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '功能问题类型',
					time: '小熊',
					men: '2018-03-22 11:05',
					jieShou: '问题描述',
					zhuangtai: '未处理',
					jieguo: 'N/A',
					select: '查看',
					delete: '删除'
				}]
			}
		},
		methods:{
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

<style scoped>
	.cell{
		text-align: center;
	}
	.all {
		float: left;
		width: 100%;
		line-height: 3.125rem;
		background-color: #F9F9F9;
		height: 100%;
	}

	.title {
		font-size: 0.875rem;
		background: none;
	}

	.input2 {
		width: 100%;
		height: 3.125rem;
		background-color: white;
		border: 1px solid #E4E4E4;
		border-right: 0;
		border-left: 0;
		text-align: left;
	}

	.title {
		font-size: 0.875rem;
		background: none;
	}

	.tit {
		position: relative;
		z-index: 1;
		text-indent: 1.25rem;
		color: black;
		font-weight: bold;
		border-bottom: 1px solid #E4E4E4;
		height: 3.125rem;
		line-height: 3.125rem;
	}

	.rig {
		float: right;
		margin-right: 2rem;
	}

	.tan {
		line-height: 2.5rem;
	}

	.input {
		width: 95%;
		height: 3.125rem;
		background-color: white;
		border: 1px solid #E4E4E4;
	}

	.guangGao {
		margin-left: 1.25rem;
	}

	.list {
		margin-top: 1.25rem;
		width: 95%;
		border: 1px solid #E4E4E4;
	}

	.play a {
		margin: 0 0.5rem;
		color: black;
		font-weight: bold;
	}

	.fenye {
		background-color: white;
		border: 1px solid #E4E4E4;
	}

	.text {
		width: 25rem;
		margin: auto;
		margin-top: 0.625rem;
		line-height: 1.5625rem;
		color: #747474;
	}
</style>
