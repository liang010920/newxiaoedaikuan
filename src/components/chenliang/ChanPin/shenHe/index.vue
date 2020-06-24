<!-- 贷款产品审核 查看没做-->
<template>
	<el-container>
		<el-main>
			<div class="shen">
				<header>
					<el-breadcrumb style="line-height: 60px;" separator="/">
						<el-breadcrumb-item><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">产品工厂</a></el-breadcrumb-item>
						<el-breadcrumb-item>借款产品配置审核</el-breadcrumb-item>
					</el-breadcrumb>
					<div class="but">
						<el-select placeholder="业务类型">
							<el-option>123</el-option>
							<el-option>123</el-option>
						</el-select>
						<el-select placeholder="审核状态">
							<el-option>123</el-option>
							<el-option>123</el-option>
						</el-select>
						<el-button type="primary" @click="openFullScreen2">查询</el-button>
					</div>
				</header>
				<div class="shuju">
					<p>数据列表</p>
				</div>
				<el-table :data="message" border stripe style="width: 1102px;">
					<el-table-column prop="number" label="产品编号">
					</el-table-column>
					<el-table-column prop="name" label="产品名称">
					</el-table-column>
					<el-table-column prop="lei" label="业务类型">
					</el-table-column>
					<el-table-column label="标签">
						<span>新品:是</span><br />
						<span>推荐:否</span>
					</el-table-column>
					<el-table-column prop="paixu" label="排序">
					</el-table-column>
					<el-table-column prop="zhuang" label="审核状态">
					</el-table-column>
					<el-table-column prop="fabu" label="发布状态">
					</el-table-column>
					<el-table-column label="操作" width="200px">
						<el-button type="text"><router-link to="/cp/ShenHeChaKan" tag="span">查看</router-link></el-button>
						<el-button type="text" @click="dialogShen = true">审核</el-button>
					</el-table-column>
				</el-table>

				<!-- 审核 -->
				<el-dialog title="产品审核" :visible.sync="dialogShen">
					<div class="sh">
						<el-row>
							<el-col :span="10">
								<div align="right">产品名称：</div>
							</el-col>
							<el-col :span="12">
								<div align="left">[1000001]悦薪贷</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="10">
								<div align="right">审核结论：</div>
							</el-col>
							<el-col :span="12">
								<div align="left">
									<label><input type="radio" name="shi">审核通过</label>
									<label><input type="radio" checked="checked" name="shi">审核不通过</label>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="10">
								<div align="right">反馈详情：</div>
							</el-col>
							<el-col :span="12">
								<div align="left">
									<textarea name="" id="" cols="30" rows="10"></textarea>
								</div>
							</el-col>
						</el-row>
						<div slot="footer" align="center" class="dialog-footer">
							<el-button @click="dialogShen = false">取 消</el-button>
							<el-button type="primary" @click="dialogShen = false">确 定</el-button>
						</div>
					</div>
				</el-dialog>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpShenhe',
		methods: {
			// 查询
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
		// 添加数据
		data() {
			return {
				// 审核
				dialogShen: false,
				dialogShen2: false,
				form: {
					region: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				message: [{
					number: '100001',
					name: '高薪贷',
					lei: '个人信用',
					paixu: '1',
					zhuang: '发布中',
					fabu: '启用中'
				}, {
					number: '100002',
					name: '才薪货',
					lei: '个人信用',
					paixu: '2',
					zhuang: '已审核',
					fabu: '未启用'
				}, {
					number: '100003',
					name: '保薪贷',
					lei: '个人信用',
					paixu: '3',
					zhuang: '未审核',
					fabu: '未启用'
				}, {
					number: '100004',
					name: '室薪贷',
					lei: '个人信用',
					paixu: '4',
					zhuang: '审核不通过',
					fabu: '未启用'
				}, {
					number: '100005',
					name: '高薪贷',
					lei: '个人信用',
					paixu: '5',
					zhuang: '已下架',
					fabu: '已关闭'
				}],
			}
		}
	}
</script>

<style>
	.sh>div{
		margin-bottom: 3%;
	}
	.shen {
		width: 1102px;
	}

	header {
		height: 165px;
		background-color: #F2F2F2;
	}

	.el-breadcrumb {
		margin-left: 60px;
		font-size: 14px;
		line-height: 1;
	}

	.but {
		float: left;
		height: 80px;
		width: 1000px;
		margin-left: 30px;
		line-height: 80px;
		background-color: white;
	}

	.but .el-select {
		float: left;
		width: 115px;
		margin-left: 30px;
	}

	.but .el-button--primary {
		width: 80px;
		height: 30px;
		line-height: 5px;
		color: white;
		margin-left: -450px;
		background: #6C6C6C;
		border-color: #6C6C6C;
		border-radius: 10px 10px 10px 10px;
	}

	.shuju {
		padding-top: 20px;
		padding-bottom: 40px;
		background: #F3F3F3;
		border: 1px solid #E4E4E4;
	}

	.shuju>p {
		float: left;
		font-weight: 700;
		margin-left: 40px;
	}

	.qi input {
		margin-left: 20px;
	}

	.el-table .cell {
		text-align: center;
	}

	.cell .el-button--text {
		color: #676767;
	}

	.dialog-footer {
		padding-top: 15px;
		border-top: 1px solid #E4E4E4;
	}

	.dialog-footer .el-button--primary {
		border: none;
		background: #000000;
	}
</style>
