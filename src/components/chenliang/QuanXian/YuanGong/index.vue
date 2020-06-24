<!-- 系统权限-员工管理 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/员工管理
				<span class="f5"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor7">
				<i class="el-icon-s-fold"></i>数据列表
				<span class="tianjia">
					<router-link tag="div" to="/index/QuanXian/YuanGong/YuanGongAdd">添加</router-link>
				</span>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<div class="sousuo" align="left">
				<span>输入搜索：<input type="text" placeholder="成员账号/姓名"></span>
				<span>
					<template>
						<el-select v-model="value1" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1">
							</el-option>
						</el-select>
					</template>
				</span>
				<span>
					<el-row>
						<el-button type="info">查询</el-button>
					</el-row>
				</span>
			</div>
			<template>
				<el-table :data="tableData" border style="width: 100%" align="center">
					<el-table-column prop="zhanghao" label="成员账号" width="80">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="80">
					</el-table-column>
					<el-table-column prop="phone" label="手机号">
					</el-table-column>
					<el-table-column prop="email" label="邮箱地址">
					</el-table-column>
					<el-table-column prop="suoshu" label="所属" width="90">
					</el-table-column>
					<el-table-column prop="juese" label="角色" width="90">
					</el-table-column>
					<el-table-column prop="login" label="登录">
					</el-table-column>
					<el-table-column label="是否启用" width="100">
						<el-switch v-model="value"></el-switch>
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<div>
								<router-link tag="span" to="/index/QuanXian/YuanGong/YuanGongAdd">
									<span class="bianju">{{scope.row.bianji}}</span>
								</router-link>
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
		name: 'YuanGong',
		data() {
			const item = {
				zhanghao: 'user',
				name: '北极熊',
				phone: '18888888888',
				email: '5698401@qq.com',
				suoshu: '运营部',
				juese: '风控经理',
				login: '2018-08-05 15:47:44',
				bianji: '编辑',
				del: '删除',
			};
			return {
				tableData: Array(10).fill(item), //一个item数据显示20条数据
				value: true,
				dialogTableVisible2:false,
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
	.sousuo {
		margin: 20px 0;
	}
	.sousuo>span input[type=text]{
		padding: 6px;
	}
	.sousuo>span{
		display: inline-block;
		margin: 0 20px;
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
