<!-- 贷前管理-查看-运营商信息 -->
<template>
	<div>
		<div class="width5">
			<div class="tonghua" align="left">通话记录</div>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="phone" label="通话号码" width="150">
					</el-table-column>
					<el-table-column prop="didian" label="通话地点" width="130">
					</el-table-column>
					<el-table-column prop="hujiaotype" label="呼叫类型" width="130">
					</el-table-column>
					<el-table-column prop="date" label="通话时间" width="120">
					</el-table-column>
					<el-table-column prop="shichang" label="通话时长" width="120">
					</el-table-column>
					<el-table-column prop="tonghuatype" label="通话类型" width="120">
					</el-table-column>
					<el-table-column prop="taocan" label="套餐" width="130">
					</el-table-column>
				</el-table>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'YunYingShang',
		data() {
			const item = {
				phone: '13966311109',
				didian: '六安',
				hujiaotype: '被叫',
				date: '2017-10-12',
				shichang: '25秒',
				tonghuatype: '国内被叫',
				taocan: '29'
			};
			return {
				tableData: Array(15).fill(item)
			}
		}
	}
</script>

<style>
	.width5 {
		width: 83%;
		border: 1px solid #e4e4e4;
	}

	.tonghua {
		background: #364150;
		color: #fff;
		padding: 10px;
	}
</style>
