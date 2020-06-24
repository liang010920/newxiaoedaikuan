<!-- 系统管理-登录日志 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/系统管理/登录日志
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="bgColor22" align="left">
				<input type="text" placeholder="手机号">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-col :span="11">
							<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col :span="11">
							<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
						</el-col>
					</el-form-item>
				</el-form>
				<el-row>
					<el-button type="info">查询</el-button>
				</el-row>
			</div>
			<div class="lieBiao22" align="left">
				<span class="font222"><i class="el-icon-s-fold"></i> 数据列表</span>
			</div>
			<!-- 表格数据 -->
			<template>
				<el-table class="ju2" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="phone" label="手机号码">
					</el-table-column>
					<el-table-column prop="date" label="时间">
					</el-table-column>
					<el-table-column prop="IP" label="IP">
					</el-table-column>
					<el-table-column prop="address" label="地区">
					</el-table-column>
					<el-table-column prop="liulanqi" label="浏览器">
					</el-table-column>
				</el-table>
			</template>
			<template>
				<div class="block margin2" align="center">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
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
	export default{
		data() {
			const item = 
			{
				phone:'18888888888',
				date:' 2018-07-05 14:36:21',
				IP:'183.14.135.1',
				address:'广东省深圳市',
				liulanqi:'Firefox 45'
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
	.ju2 * {
		text-align: center !important;
	}
	.ju2 th{
		border-right: 1px solid #E4E4E4;
	}
	.ju2 td{
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
	.shuaxin2{
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
		;
		width: 105px;
		margin: 0 10px;
		color: #000 !important;
	}
</style>
