<!-- 客户档案管理-会员排行 -->
<template>
	<el-container>
		<el-main style="background: #f9f9f9;">
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/客户档案管理/会员排行</div>
			<div class="lieBiao">
				<span class="floatL font2">会员排行</span>
				<div class="">
					<span class="lieBiao-kuang2">导出数据</span>
				</div>
				<div class="clear"></div>
			</div>
			<div>
				<el-table :data="list" border style="width: 100%;">
					<el-table-column prop="id" label="排行" width="300">
					</el-table-column>
					<el-table-column prop="name" label="会员名" width="300">
					</el-table-column>
					<el-table-column prop="state" label="贷款总数(单位个)" width="255">
					</el-table-column>
					<el-table-column prop="money" label="贷款总金额" width="252">
					</el-table-column>
				</el-table>
				<template>
					<div class="yemian-di">
						Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
					</div>
				</template>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				list: "",
				// tableData: [{
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }, {
				// 	date: '1',
				// 	name: 'Gem',
				// 	address: '100',
				// 	money: '$10000.00'
				// }]
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
			}
		},
		created() {
			axios.get("http://yapi.dapengjiaoyu.com/mock/380/order").then(res => {
				this.list=res.data.data;
				console.log(res.data.data);
			});
			// fetch("http://122.112.179.240:9005/api/masterData/getAllTemplate?pageNum=1&pageSize=10", {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		},
			// 		//body: JSON.stringify({key:value}), //POST传参方式
			// 		credentials: 'include' //允许携带cookie
			// 	}) //fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。
			// 	.then(res => {
			// 		return res.json();
			// 	})
			// 	.then(res => {
			// 		// 这里返回的数据就是我们想要请求的json数据
			// 		if (res.message == "OK") {
			// 			this.list=res.responseBody.list
			// 			console.log(res.responseBody.list);
			// 		}
			// 	})
		}
	}
</script>

<style>
	.lieBiao-kuang2 {
		background: #fff;
		border: 1px solid #E4E4E4;
		padding: 3px 7px;
		float: right;
		margin-right: 10px;
	}

	.block {
		marign-left: 50% !important;
	}

	.el-table .cell {
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-break: break-all;
		line-height: 23px;
		padding-right: 10px;
		text-align: center;
	}

	.el-pagination {
		white-space: nowrap;
		padding: 2px 5px;
		color: #303133;
		font-weight: 700;
		margin-left: 619px;
	}

	.yemian-di {
		background-color: #F9F9F9;
		text-align: center;
		height: 67px;
		padding-top: 45px;
	}
</style>
