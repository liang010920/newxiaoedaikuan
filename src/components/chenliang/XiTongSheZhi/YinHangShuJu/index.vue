<!-- 系统设置-银行数据设置 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="jiekuan">
				<i class="el-icon-s-home"></i>首页/设置/通用参数配置/银行数据字典
				<span>
					<button class="floatR add2"><i class="el-icon-refresh"></i>刷新</button>
				</span>
			</div>
			<div class="lieBiao99" align="left">
				<span style="padding: 20px;"><i class="el-icon-s-fold"></i>数据列表</span>
				<router-link to="/index/XiTongSheZhi/YinHangShuJu/AddYinHangShuJu" tag="span">
					<button class="floatR add2">添加</button>
				</router-link>
				<div class="clear"></div>
			</div>
			<!-- 表格数据 -->
			<div class="ju22">
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column prop="name" label="银行名称">
					</el-table-column>
					<el-table-column prop="" label="银行LOGO">
						<img src="../../../../../public/images/yinhangLogo.png" alt="">
					</el-table-column>
					<el-table-column prop="miaoshu" label="描述" width="260">
					</el-table-column>
					<el-table-column prop="" label="是否启用">
						<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
						</el-switch>
					</el-table-column>
					<el-table-column label="排序">
						<input type="text" placeholder="100">
					</el-table-column>
					<el-table-column prop="" label="操作" width="120">
						<template slot-scope="scope">
							<div>
								<router-link to="/index/XiTongSheZhi/YinHangShuJu/AddYinHangShuJu" tag="span">{{ scope.row.bianji }}</router-link>
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
			const item = {
					name: '中国银行',
					miaoshu: '中国银行描述',
					bianji: '编辑',
					};
			return {
				tableData: Array(7).fill(item), //一个item数据显示20条数据
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
