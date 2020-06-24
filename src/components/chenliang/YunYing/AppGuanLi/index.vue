<!-- 运营管理-App应用管理 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan"><i class="el-icon-s-home"></i>首页/运营管理/消息管理/App应用管理</div>
			<div class="lieBiao">
				<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
				<span class="floatR" style="border: 0;">
					<el-button type="text" @click="dialogFormVisible = true"><span class="dao2">发布应用</span></el-button>
					<el-dialog title="发布应用" :visible.sync="dialogFormVisible" class="huise">
						<div class="bian5">
							<el-row width="100%">
								<el-col :span="8">
									<div align="right"><span>*</span>应用名称：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<input type="text">
									</div>
								</el-col>
							</el-row>
							<el-row width="100%">
								<el-col :span="8">
									<div align="right"><span>*</span>APK：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
										:before-remove="beforeRemove" multiple :limit="3">
											<el-button size="small" type="primary">点击上传</el-button>
											<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
										</el-upload>
									</div>
								</el-col>
							</el-row>
							<el-row width="100%">
								<el-col :span="8">
									<div align="right">是否发布：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
										</el-switch>
									</div>
								</el-col>
							</el-row>
							<el-row width="100%">
								<el-col :span="8">
									<div align="right"><span>*</span>版本号：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<input type="text">
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8">
									<div align="right"><span>*</span>Build：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<input type="text">
									</div>
								</el-col>
							</el-row>
							<el-row width="100%">
								<el-col :span="8">
									<div align="right"><span>*</span>应用名称：</div>
								</el-col>
								<el-col :span="16">
									<div>
										<textarea cols="22" rows="10"></textarea>
									</div>
								</el-col>
							</el-row>
						</div>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
						</div>
					</el-dialog>
				</span>
				<div class="clear"></div>
			</div>
			<template>
				<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
					<el-table-column label="编号" width="90">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="yingyongname" label="应用名称">
					</el-table-column>
					<el-table-column prop="banben" label="版本">
					</el-table-column>
					<el-table-column prop="date" label="更新时间">
					</el-table-column>
					<el-table-column prop="shuoming" label="更新说明" width="220">
					</el-table-column>
					<el-table-column prop="xiazai" label="下载地址" width="220">
					</el-table-column>
					<el-table-column prop="" label="操作">
						<template slot-scope="scope">
							<!-- 下架 -->
							<el-button style="padding: 0 !important;" type="text" @click="centerDialogVisible2 = true"><span>{{ scope.row.xiajia }}</span></el-button>
							<el-dialog title="下架确认" :visible.sync="centerDialogVisible2" width="30%" center>
								<span>确定要下架该版本吗？</span>
								<span slot="footer" class="dialog-footer">
									<el-button @click="centerDialogVisible2 = false">取 消</el-button>
									<el-button type="primary" @click="centerDialogVisible2 = false">确 定</el-button>
								</span>
							</el-dialog>
							<!-- 编辑App推送信息 -->
							<span  @click="dialogFormVisible = true"> {{ scope.row.bianji }} </span>
							<!-- 删除 -->
							<el-button style="padding: 0 !important;" type="text" @click="centerDialogVisible = true"><span>{{ scope.row.del }}</span></el-button>
							<el-dialog title="删除确认" :visible.sync="centerDialogVisible" width="30%" center>
								<span>确定要删除该版本吗？</span>
								<span slot="footer" class="dialog-footer">
									<el-button @click="centerDialogVisible = false">取 消</el-button>
									<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
								</span>
							</el-dialog>
						</template>
					</el-table-column>
				</el-table>
			</template>
			<template>
				<div class="bottom3">
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'AppGuanLi',
		data() {
			const item = [{
					id: '1000001',
					yingyongname: '51贷款',
					banben: '1.2.5(build 25)',
					date: '2018-03-22',
					shuoming: '修复了特定机型的一些BUG',
					xiazai: 'http://',
					xiajia: '下架',
					bianji: '编辑'
				},
				{
					id: '1000001',
					yingyongname: '51贷款',
					banben: '1.2.5(build 25)',
					date: '2018-03-22',
					shuoming: '修复了特定机型的一些BUG',
					xiazai: 'http://',
					bianji: '编辑',
					del: '删除'
				},
				{
					id: '1000001',
					yingyongname: '51贷款',
					banben: '1.2.5(build 25)',
					date: '2018-03-22',
					shuoming: '修复了特定机型的一些BUG',
					xiazai: 'http://',
					bianji: '编辑',
					del: '删除'
				}
			];
			return {
				//tableData: Array(20).fill(item), //一个item数据显示20条数据
				tableData: item,
				dialogFormVisible: false,
				currentPage4: 5,
				formLabelWidth: '120px',
				fileList: [],
				value: true,
				centerDialogVisible: false,
				centerDialogVisible2: false
			}
		},
		methods: {
			beforeRemove(file) {
				return this.$confirm(`确定移除 ${ file.name }？`);
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
		}
	}
</script>

<style>
	.man {
		width: 100%;
	}

	.bian5>div {
		margin-bottom: 15px;
	}

	.huise>div:first-child {
		text-align: left;
		font-weight: 500;
	}

	.bian3 {
		margin-right: 10px;
	}

	.xiala {
		padding: 3px 3px 5px 3px;
		margin-left: 15px;
	}

	.hanggao2 {
		line-height: 35px;
		color: #333;
		font-size: 15px;
		margin-left: 15px;
	}

	.boHui {
		color: red !important;
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

	.dao2 {
		background: #fff;
		padding: 5px 7px;
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
