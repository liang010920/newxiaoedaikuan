<!-- 系统管理-操作日志 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/系统管理/操作日志
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="bgColor22" align="left">
				<span class="caozuo">操作人员： </span>
				<select>
					<option value="请选择">请选择</option>
					<option value="借款类型">借款类型</option>
					<option value="贷款类型">贷款类型</option>
					<option value="贷款类型">贷款类型</option>
				</select>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-col :span="11">
							<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col :span="11">

						</el-col>
					</el-form-item>
				</el-form>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao22" align="left">
				<span class="font222"><i class="el-icon-s-fold"></i> 数据列表</span>
				<span class="floatR abc22">
					清除日志：
					<el-badge :value="1" class="item" type="warning">
						<select name="" id="">
							<option value="">选择清除的日志</option>
						</select>
					</el-badge>
					<span>确定</span>
				</span>
				<div class="clear"></div>
			</div>
			<!-- 表格数据 -->
			<template>
				<el-table class="ju2" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="id" label="编号">
					</el-table-column>
					<el-table-column prop="date" label="操作时间">
					</el-table-column>
					<el-table-column prop="renyuan" label="操作人员">
					</el-table-column>
					<el-table-column prop="IP" label="IP">
					</el-table-column>
					<el-table-column prop="caozuorizhi" label="操作日志">
					</el-table-column>
				</el-table>
			</template>
			<template>
				<div class="block margin2" align="center">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
					:page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
					</el-pagination>
				</div>
			</template>
			<template>
				<div align="center">
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			const item = {
				id: '100001',
				date: ' 2018-07-05 14:36:21',
				renyuan: 'admin',
				IP: '183.14.135.1',
				caozuorizhi: '编辑会员账号：小熊'
			};
			return {
				tableData: Array(20).fill(item), //一个item数据显示20条数据
				// tableData: item,
				currentPage4: 5,
				form: {
					name: '',
					data1: '',
					data2: '',

				},
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
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.abc22 select {
		padding: 5px;
		color: #E4E4E4;
		border: 1px solid #E4E4E4;
	}

	.abc22 span {
		padding: 5px 10px;
		background: #fff;
		border: 1px solid #E4E4E4;
		margin-left: 10px;
	}

	.caozuo {
		line-height: 30px;
		margin-left: 20px;
	}

	.ju2 * {
		text-align: center !important;
	}

	.ju2 th {
		border-right: 1px solid #E4E4E4;
	}

	.ju2 td {
		border-right: 1px solid #E4E4E4;
	}

	.lieBiao22 {
		background: #f3f3f3;
		padding: 10px 0;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
	}

	.font222 {
		font-weight: bold;
		margin-left: 10px;
	}

	.shuaxin2 {
		float: right;
		border: 1px solid #E4E4E4;
		background: #fff;
		padding: 3px 7px;
	}

	.bgColor22 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.bgColor22 {
		background: #fff;
		color: #000;
		padding: 15px;
		margin: 20px;

	}

	.bgColor22 input {
		padding: 6px 10px;
		width: 145px;
		margin: 0 10px;
		color: #000 !important;
	}

	.bgColor22 select {
		padding: 6px 10px 9px;
		width: 16%;
		margin: 0 10px;
		color: #ccc !important;
	}
</style>
