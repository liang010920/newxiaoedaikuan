<!-- 运营管理-文章-帮助管理-分类管理 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="24">
						<div align="left">
							<i class="el-icon-s-home"></i>首页/运营管理/帮助管理/分类管理
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="lieBiao" style="margin-top: 20px;">
				<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
				<span class="floatR">
					<span @click="dialogTableVisible  = true" class="dao2" style="background:#fff ;1px solid #E4E4E4;padding: 3px 7px;">
						添加
					</span>
					<el-dialog title="添加分类" :visible.sync="dialogTableVisible">
						<div class="addFenLei">
							<el-row>
								<el-col :span="6">
									<div align="right">
										类型名称：
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left">
										<input type="text">
									</div>
								</el-col>
							</el-row>
							<el-row class="buge">
								<el-col :span="6">
									<div align="right">
										分类图标：
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left" class="shang">
										<i class="el-icon-upload"></i>选择上传文件
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="6">
									<div align="right" style="padding:1px;">
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left">
										只能上传jpg/png格式文件，文件不能超过50kb
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="6">
									<div align="right">
										是否显示：
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left">
										<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
										</el-switch>
									</div>
								</el-col>
							</el-row>
							<el-row class="buge">
								<el-col :span="6">
									<div align="right">
										分类排序：
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left">
										<input type="text">
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="6">
									<div align="right" style="padding:1px;">
									</div>
								</el-col>
								<el-col :span="18">
									<div align="left">
										排序值范围0~99，不填写默认为0; 数值越大越靠前
									</div>
								</el-col>
							</el-row>
						</div>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogTableVisible  = false">取 消</el-button>
							<el-button type="primary" @click="dialogTableVisible  = false">确 定</el-button>
						</span>
					</el-dialog>
				</span>
				<div class="clear"></div>
			</div>
			<template>
				<el-table :data="tableData" border style="width: 100%;">
					<el-table-column type="selection" width="35px"></el-table-column>
					<el-table-column prop="id" label="编号" width="70px"></el-table-column>
					<el-table-column prop="img" label="广告图片" width="110px">
						<img src="../../../../../public/images/2.png">
					</el-table-column>
					<el-table-column prop="name" label="分类名称" width="240px">
					</el-table-column>
					<el-table-column prop="sum" label="专属数量" width="90px">
					</el-table-column>
					<el-table-column prop="" label="是否显示">
						<el-switch>
						</el-switch>
					</el-table-column>
					<el-table-column prop="paixv" label="分类排序"></el-table-column>
					<el-table-column prop="" label="操作" width="200px">
						<template slot-scope="scope">
							<p class="play">
								<a style="margin-right: 10px;" @click="dialogTableVisible  = true">{{scope.row.bianJi}} </a>
								<a @click="dele"> {{scope.row.delete}}</a>
							</p>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpxin',
		data() {
			const item = [{
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}, {
				id: '10001',
				name: '常见问题',
				sum: '10',
				paixv: '0',
				bianJi: '编辑',
				delete: '删除'
			}];
			return {
				// 步骤条
				active: 0,
				value: true,
				tableData: item,
				dialogTableVisible: false,
				fileList: [{
					name: 'food.jpeg',
					url: '../../../../../public/images/2.png'
				}, {
					name: 'food2.jpeg',
					url: '../../../../../public/images/2.png'
				}]
			};
		},
		methods: {
			beforeRemove(file) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			},
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
			}
		}
	}
</script>

<style>
	.shang{
		width: 30%;
		border: 1px solid rgb(228, 228, 228);
		padding: 5px 10px;
		text-align: center;
	}
	.addFenLei {
		font-size: 16px;
	}
	.addFenLei>div{
		margin-bottom: 3%;
	}
	.addFenLei>.shang{
		margin-bottom: 1%;
	}

	.addFenLei input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}

	.cell {
		text-align: center;
	}

	.biaoti {
		background: #F8F8F8;
		padding: 2%;
		font-size: 22px;
	}

	.biaoti>li>p {
		border-bottom: 2px solid #D4D4D4;
		padding: 0 70px;
		margin-top: -10px;
	}

	.biaoti>li:nth-of-type(2)>p {
		border-bottom: 2px solid #666;
	}

	.biaoti>li {
		display: inline-block;
	}

	.biaoti>li>span {
		border: 2px solid #d4d4d4;
		padding: 5px 10px;
		background: #fff;
		border-radius: 50%;
		color: #d4d4d4;
	}

	.biaoti>li>div {
		color: #999;
		margin-top: 10px;
	}

	.biaoti>li:nth-of-type(1)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(1)>div {
		color: #666;
	}

	.jiben {
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.canshu {
		margin-top: 100%;
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.submit2 {
		width: 200px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		text-align: center;
	}

	.neirong2 label {
		margin-right: 10px;
	}

	.neirong2 {
		padding: 10px;
		background: #fff;
	}

	.neirong2 input[type=text] {
		padding: 1%;
	}

	.neirong2 select {
		padding: 1% 18% 1% 1%;
		color: #666;
	}

	.neirong2 .hanggao3 {
		line-height: 40px;
	}

	.neirong2 .jieshi {
		margin-bottom: 1% !important;
	}

	.neirong2>div {
		margin-bottom: 3%;
	}

	.hong2 {
		color: red;
	}

	.backColor3 {
		padding: 30px 0;
		height: 527px;
		position: relative;
	}

	.backColor {
		background: #F9F9F9;
		width: 100%;
	}

	.backColor2 {
		background: #fff;
		width: 100%;
		padding: 10px;
	}

	.fan {
		border: 1px solid #E4E4E4;
		padding: 2px 10px;
		text-align: center;
	}

	/* .adds {
		width: 1102px;
	} */

	/* .adds header {
		height: 70px;
		padding-top: 20px;
		background: #e4e4e4;
	} */

	/* .adds .el-step__main {
		white-space: normal;
		text-align: center;
	} */

	/* .cent {} */

	.fshi {
		width: 922px;
		margin-top: 20px;
	}

	.fshi input {
		/* width: 100px;
		height: 30px;
		border-radius: 5px 5px;
		margin-right: 10px; */
	}

	.xing {
		color: red;
	}
</style>
