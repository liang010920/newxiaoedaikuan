<!-- 系统设置- -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="jiekuan">
				<i class="el-icon-s-home"></i>首页/设置/消息提醒
			</div>
			<div class="lieBiao99" align="left">
				<span style="padding: 20px;">消息提醒</span>
			</div>
			<!-- 表格数据 -->
			<div class="ju22">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="info" label="信息类型">
					</el-table-column>
					<el-table-column prop="" label="电子邮件">
						<template slot-scope="scope">
							<div>
								<label style="color: #ccc;">
									<input type="checkbox" checked> {{scope.row.fasong}}
								</label>
								<span>
									<router-link to="/index/XiTongSheZhi/InfoTiShi/InfoTiShiBianJi" tag="span"> {{scope.row.bianji}}</router-link>
								</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="zhi" label="站内信息">
						<template slot-scope="scope">
							<div>
								<label style="color: #ccc;">
									<input type="checkbox" checked> {{scope.row.fasong}}
								</label>
								<span>
									<router-link to="/index/XiTongSheZhi/InfoTiShi/InfoTiShiBianJi" tag="span"> {{scope.row.bianji}}</router-link>
								</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="jinE" label="手机短信">
						<template slot-scope="scope">
							<div>
								<label style="color: #ccc;">
									<input type="checkbox" checked> {{scope.row.fasong}}
								</label>
								<span>
									<router-link to="/index/XiTongSheZhi/InfoTiShi/InfoTiShiBianJi" tag="span"> {{scope.row.bianji}}</router-link>
								</span>
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
					info: '贷款审批通过提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '贷款审批拒绝提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '放款提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '预警提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '即将到期提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '逾期提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '还款提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
				},
				{
					info: '结项提醒',
					fasong: '是否发送',
					bianji: '编辑内容',
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
