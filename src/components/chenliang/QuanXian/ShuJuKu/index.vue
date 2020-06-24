<!-- 系统权限-数据库备份 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/操作日志
				<span class="f5"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor7">
				<i class="el-icon-s-fold"></i>数据列表
				<span @click="dialogTableVisible = true" class="tianjia">开始备份</span>
				<el-dialog title="备份数据库" :visible.sync="dialogTableVisible">
					<div align="center">
						<i class="el-icon-loading"></i>
						<div style="margin: 20px 0;"><el-button type="info" class="button1">开始备份</el-button></div>
						<div>备份过程中请不要关闭窗口，备份时间大概需要5分钟，请耐心等待</div>
					</div>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogTableVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogTableVisible = false">
							确 定</el-button>
					</div>
				</el-dialog>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<template>
				<el-table :data="tableData" border style="width: 100%" align="center">
					<el-table-column prop="wenjianname" label="备份文件名">
					</el-table-column>
					<el-table-column prop="banbenhao" label="版本号">
					</el-table-column>
					<el-table-column prop="daxiao" label="大小(字节)">
					</el-table-column>
					<el-table-column prop="date" label="备份时间">
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<div>
								<span @click="huifu" class="bianju">{{scope.row.huifu}}</span>
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
		name: 'ShuJuKu',
		data() {
			const item = {
				wenjianname: '20180810165225.bak',
				banbenhao: '4.0',
				daxiao: '15902208',
				date:'2018-08-05 15:47:44',
				huifu: '恢复',
				del: '删除',
			};
			return {
				tableData: Array(10).fill(item), //一个item数据显示20条数据
				dialogTableVisible: false,
				formLabelWidth: '120px'
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
			},
			// 恢复
			huifu() {
				this.$confirm('是否恢复该文件夹?', '确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '恢复成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消恢复'
					});
				});
			}
		},
	}
</script>

<style>
	.button{
		background:#333 !important;
		width:35%;
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
