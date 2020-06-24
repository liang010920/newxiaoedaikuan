<!-- 贷中管理-放款处理 -->
<template>
	<el-container>
		<el-header style="padding:0;text-align: left; font-size: 12px;background: transparent;">
			<ul class="liuCheng">
				<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">
						待放款
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/index/DaiZhong/FangKuanChuLi">已放款</router-link>
					</el-menu-item>
				</el-menu>
			</ul>
		</el-header>
		<div class="jiekuan"><i class="el-icon-s-home"></i>首页/贷中管理/放款处理列表</div>
		<div class="bgColor2" align="left">
			<input type="text" placeholder="姓名">
			<input type="text" placeholder="手机号">
			<input type="text" placeholder="合同号">
			<select>
				<option value="贷款类型">贷款类型</option>
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
						<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					</el-col>
				</el-form-item>
			</el-form>
			<el-row>
				<el-button type="info">查询</el-button>
			</el-row>
		</div>
		<template>
			<router-view></router-view>
		</template>
	</el-container>
</template>

<script>
	export default {
		name: 'FangKuanChuLi',
		data(){
			return {
				form: {
					name: '',
					data1: '',
					data2: '',
				},
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.shehe>div:first-child{
		color: red;
	}
	.shenhe>div:last-child {
		color: #0099FF;
	}
	.cell:hover {
		cursor: pointer;
	}

	.margin2 {
		margin: 50px 0;
	}

	.ju * {
		text-align: center !important;
	}

	.dao {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}

	.lieBiao {
		background: #f3f3f3;
		padding: 10px 0;
	}

	.el-button {
		padding: 8px 20px !important;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.el-input__inner {
		padding: 10px !important;
		width: 100px !important;
		text-align: center;
		padding-left: 18px !important;
		height: 34px;
	}

	.el-input__prefix {
		padding-left: 5px !important;
		top: -2px;
	}

	.el-form-item__content {
		margin-left: 0 !important;
	}

	.floatR {
		float: right;
		margin-right: 20px;
	}

	.top li {
		display: inline-block;
	}

	* {
		margin: 0;
		padding: 0;
	}

	ul li {
		list-style-type: none;
	}

	body {
		margin: 0;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.fenlei {
		padding: 19px 0;
		border-bottom: 1px solid;
	}

	.color {
		color: #999999;
	}

	.color span {
		margin: 0 15px;
	}

	.icon1 {
		float: right;
		margin-right: 10px;
	}

	.width {
		width: 200px;
		background: #f2f2f2;
		float: left;
		padding: 10px 0;
	}

	.width2 {
		width: 85%;
		float: left;
		padding: 10px 0;
	}

	.clear {
		clear: both;
	}

	.font {
		font-weight: bold;
		margin-left: 15px;
	}

	.floatL {
		float: left;
	}

	.liuCheng {
		border-bottom: 1px solid #999;
	}

	.liuCheng li {
		display: inline-block;
		color: #999;

		margin: 0 10px;
		font-size: 16px;
		width: 150px;
		text-align: center;
	}

	.border {
		border-bottom: 2px solid #000;
	}

	.liuCheng li:hover {
		cursor: pointer;
		border-bottom: 2px solid #000;
	}

	.bgColor {
		background: #f9f9f9;
	}

	.jiekuan {
		text-align: left;
		padding: 20px;
	}

	.bgColor2 {
		background: #fff;
		color: #000;
		padding: 15px;
		margin: 0 20px;

	}

	.bgColor2 input {
		padding: 6px 10px;
		width: 115px;
		margin: 0 10px;
		color: #000 !important;
	}

	.bgColor2 select {
		padding: 6px 10px 9px;
		;
		width: 105px;
		margin: 0 10px;
		color: #000 !important;
	}

	.cha {
		background: #6b6b6b;
		color: #fff;

	}

	.font2 {
		font-weight: bold;
		margin-left: 10px;
	}
</style>
