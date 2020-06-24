<!-- 系统设置-会员等级设置 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="jiekuan">
				<i class="el-icon-s-home"></i>首页/客户档案管理/会员等级管理
			</div>
			<div class="lieBiao99" align="left">
				<span style="padding: 20px;"><i class="el-icon-s-fold"></i>数据列表</span>
				<router-link to="/index/XiTongSheZhi/HuiYuanDengJi/AddHuiYuanDengJi" tag="span">
					<button class="floatR add2">添加</button>
				</router-link>
				<div class="clear"></div>
			</div>
			<!-- 表格数据 -->
			<div class="ju22">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="name" label="等级名称">
					</el-table-column>
					<el-table-column prop="" label="默认会员等级">
						<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
					</el-table-column>
					<el-table-column prop="zhi" label="成长值满足点">
					</el-table-column>
					<el-table-column prop="jinE" label="每借贷金额">
					</el-table-column>
					<el-table-column prop="jiangli" label="评价奖励">
					</el-table-column>
					<el-table-column prop="beizhu" label="备注">
					</el-table-column>
					<el-table-column prop="" label="操作" width="85">
						<template slot-scope="scope">
							<div>
								<router-link to="/index/XiTongSheZhi/HuiYuanDengJi/AddHuiYuanDengJi" tag="span">{{ scope.row.bianji }}</router-link>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div align="center" style="margin: 35px;">
				Copyright &copy; 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			const item = [{
					name: '普通会员',
					zhi: '0',
					jinE: '+1代币/元',
					jiangli: '+5代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},
				{
					name: '铜牌会员',
					zhi: '5000',
					jinE: '+1代币/元',
					jiangli: '+10代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},
				{
					name: '银牌会员',
					zhi: '20000',
					jinE: '+1代币/元',
					jiangli: '+15代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},
				{
					name: '黄金会员',
					zhi: '50000',
					jinE: '+1代币/元',
					jiangli: '+20代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},
				{
					name: '铂金会员',
					zhi: '100000',
					jinE: '+1代币/元',
					jiangli: '+20代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},
				{
					name: '钻石会员',
					zhi: '200000',
					jinE: '+1代币/元',
					jiangli: '+30代币/元条',
					beizhu: '无',
					bianji: '编辑',
				},

			];
			return {
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				value: true
			}
		},
	}
</script>

<style>
	.ju22 .cell{
		text-align: center;
	}
	.lieBiao99{
		background: #f3f3f3;
		padding: 10px 0;
		border-top: 1px solid #E4E4E4;
		margin-top: 20px;
	}
	.ju22 th{
		border-right: 1px solid #E4E4E4;
	}
	.ju22{
		border: 1px solid #E4E4E4;
	}
	.ju22 td{
		border-right: 1px solid #E4E4E4;
	}
	.add2{
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}
</style>
