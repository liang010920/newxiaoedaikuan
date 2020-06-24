<!-- 系统设置-管理服务费 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="body">
				<div class="jiekuan">
					<i class="el-icon-s-home"></i>首页/设置/系统费率配置
				</div>
				<div class="addGuan" align="left">贷款利率参数</div>
				<div align="center" class="lilv">
					<div>
						<el-row>
							<el-col :span="5">
								<div align="right"><h4>等额本息：</h4></div>
							</el-col>
							<el-col :span="10">
								<div align="left" class="bian7">
									<el-main>
										<el-table :data="tableData" align="center">
											<el-table-column prop="guize" label="规则">
											</el-table-column>
											<el-table-column prop="qixian" label="使用期限">
											</el-table-column>
											<el-table-column prop="zonghe" label="综合利率">
											</el-table-column>
										</el-table>
									</el-main>
								</div>
							</el-col>
						</el-row>
					</div>
					<div>
						<el-row>
							<el-col :span="5">
								<div align="right"><h4>等额本金：</h4></div>
							</el-col>
							<el-col :span="10">
								<div align="left" class="bian7">
									<el-main>
										<el-table :data="tableData">
											<el-table-column prop="guize" label="规则">
											</el-table-column>
											<el-table-column prop="qixian" label="使用期限">
											</el-table-column>
											<el-table-column prop="zonghe" label="综合利率">
											</el-table-column>
										</el-table>
									</el-main>
								</div>
							</el-col>
						</el-row>
					</div>
					<div>
						<el-row>
							<el-col :span="5">
								<div align="right"><h4>先息后本：</h4></div>
							</el-col>
							<el-col :span="10">
								<div align="left" class="bian7">
									<el-main>
										<el-table :data="tableData">
											<el-table-column prop="guize" label="规则">
											</el-table-column>
											<el-table-column prop="qixian" label="使用期限">
											</el-table-column>
											<el-table-column prop="zonghe" label="综合利率">
											</el-table-column>
										</el-table>
									</el-main>
								</div>
							</el-col>
						</el-row>
					</div>
					<div>
						<el-row>
							<el-col :span="5">
								<div align="right"><h4>一次性还息付本：</h4></div>
							</el-col>
							<el-col :span="10">
								<div align="left" class="bian7">
									<el-main>
										<el-table :data="tableData">
											<el-table-column prop="guize" label="规则">
											</el-table-column>
											<el-table-column prop="qixian" label="使用期限">
											</el-table-column>
											<el-table-column prop="zonghe" label="综合利率">
											</el-table-column>
										</el-table>
									</el-main>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
				<div align="center" style="margin: 30px; 0">
					<span class="tijiao2">提交</span>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			const item = [
			{
				guize: '1',
				qixian: '1月',
				zonghe: '8.0%'
			},
			{
				guize: '2',
				qixian: '3月',
				zonghe: '10.0%'
			},
			{
				guize: '3',
				qixian: '6月',
				zonghe: '11.0%'
			},
			{
				guize: '4',
				qixian: '9月',
				zonghe: '12.0%'
			},
			{
				guize: '5',
				qixian: '12月',
				zonghe: '13.0%'
			},
			{
				guize: '6',
				qixian: '18月',
				zonghe: '14.0%'
			},
			{
				guize: '7',
				qixian: '24月',
				zonghe: '15.0%'
			},
			{
				guize: '8',
				qixian: '36月',
				zonghe: '16.0%'
			},
			];
			return {
				tableData:item
			}
		}
	};
</script>

<style scoped>
	.tijiao2{
		cursor: pointer;
		background: #666666;
		color:#fff !important;
		border:1px solid #E4E4E4;
		border-radius: 3px;
		padding: 10px 15px;
	}
	.bian7>main>div{
		border: 1px solid #E4E4E4;
	}
	
	.lilv>div{
		margin-top: 15px;
		background: #fff;
		padding: 15px 0;
	}
	.tijiao {
		cursor: pointer;
		background: #666666;
		color: #fff !important;
		border: 1px solid #E4E4E4;
		border-radius: 3px;
		padding: 10px 15px;
	}

	.addGuan {
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
		background: #F3F3F3;
		padding: 10px 20px;
		font-size: 16px;
		margin-bottom: 15px;
	}
</style>
