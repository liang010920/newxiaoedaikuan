<!-- 站内消息 -->
<template>
	<el-container>
		<el-main>
			<div class="all">
				<!-- 头部 -->
				<el-breadcrumb class="title" style="line-height: 60px;" separator="/">
					<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">运营管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>消息管理</el-breadcrumb-item>
					<el-breadcrumb-item>站内信消息</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="input">
					<div class="demo-input-size">
						<span class="guangGao">广告名称：<el-input style="width: 10rem;" size="small" placeholder="广告名称" v-model="input1"></el-input></span>
						<span class="guangGao">
							广告位置：<el-select v-model="select1" style="width: 10rem;" size="small" placeholder="全部">
								<el-option label="全部" value="1"></el-option>
								<el-option label="个人" value="2"></el-option>
								<el-option label="平台" value="3"></el-option>
							</el-select>
						</span>
						<span class="guangGao">
							到期时间：<el-select v-model="select2" style="width: 10rem;" size="small" placeholder="全部">
								<el-option label="全部" value="1"></el-option>
								<el-option label="个人" value="2"></el-option>
								<el-option label="平台" value="3"></el-option>
							</el-select>
						</span>
						<span style="position: relative;z-index: 1;">
							<el-button style="margin-left: 1.25rem;" size="small" type="primary">查询</el-button>
						</span>
					</div>
				</div>
				<div class="list">
					<div class="lieBiao" style="background: #f3f3f3; border: 1px solid #E4E4E4;">
						<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
						<span class="floatR" style="border: 0;">
							<span class="dao2" @click="dialogTableVisible2 = true">发送信息</span>
							<el-dialog title="发送站内信" :visible.sync="dialogTableVisible2">
								<div class="qunfa">
									<el-row>
										<el-col :span="8">
											<div align="right">
												<span class="red">*</span>发送对象：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left">
												<input style="width: 75%;padding: 0 10px;" type="text" placeholder="输入用户手机号码,多个号码请用逗号隔开">
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right">
												<span class="red">*</span>标题：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left">
												<input style="width: 75%;padding: 0 10px;" type="text">
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right">
												<span class="red">*</span>短信信息：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left">
												<textarea rows="2" cols="46"></textarea>
											</div>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="8">
											<div align="right" style="padding:1px;">
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left">
												站内信标题不能超过20个字，内容不能超过100个字。
											</div>
										</el-col>
									</el-row>
								</div>
								<span slot="footer" class="dialog-footer">
									<el-button @click="dialogTableVisible2 = false">取 消</el-button>
									<el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
								</span>
							</el-dialog>
							<router-link to="/index/JieKuanShaiXuan" tag="span"><el-button style="padding: 0 !important;color: #000000;" type="text"><span
							class="dao2">群发信息</span></el-button></router-link>
					
							<select class="xiala">
								<option value="显示条数">显示条数</option>
								<option value="5">5</option>
								<option value="3">3</option>
								<option value="1">1</option>
							</select>
							<select class="xiala">
								<option value="排序方式">排序方式</option>
								<option value="顺序">顺序</option>
								<option value="倒序">倒序</option>
							</select>
						</span>
						<div class="clear"></div>
					</div>
					<!-- 表格 -->
					<el-table :data="tableData" border style="width: 100%;">
						<el-table-column type="selection"></el-table-column>
						<el-table-column prop="id" label="编号"></el-table-column>
						<el-table-column prop="title" label="消息标题" width="200px"></el-table-column>
						<el-table-column prop="time" label="发布时间"></el-table-column>
						<el-table-column prop="men" label="发布人员"></el-table-column>
						<el-table-column prop="jieShou" label="接收对象"></el-table-column>
						<el-table-column prop="play" label="操作">
							<template slot-scope="scope">
								<p class="play">
									<a @click="dialogTableVisible = true">{{scope.row.select}}</a>
									<!-- <a>{{scope.row.delete}}</a> -->
									<el-button type="text" @click="dele">删除</el-button>
								</p>
							</template>
						</el-table-column>
					</el-table>
					<!-- 消息弹框 -->
					<el-dialog title="查看消息" :visible.sync="dialogTableVisible" width="500px" class="tan">
						<p align="center">抵押贷产品专区上线公告</p>
						<p align="center" style="font-size: 0.75rem;color: #CCCCCC;">2018-12-02 15:47:44</p>
						<hr>
						<p class="text">为迎合广大用户的借贷需求,xxx积极开拓高质量的资产端,以丰富平台的借贷类型,
							平台将于2018年12月28日正式上线"xxx"产品,加速贸易流通,服务实体经济。<br>
							<strong>xxx</strong>是一款服务出口企业加速在生产的融资产品,产品基于出口企业实际出口贸易
							的应收账款进行融资,结合中国出口信用保险公司承保的"出口信用险"作为贸易履约保障,旨在增强企业
							资产流动性,切实帮助实体企业解决贸易过程中的资金短缺问题。产品引入第三方保证认为借款提供连带
							责任保证担保,为投资的资金报价护航</p>
						<p align="right">xx运营团队</p>
						<p align="right">2018年5月3日</p>
					</el-dialog>
					<!-- 分页 -->
					<div class="fenye">
						<div class="block" style="margin-top: 1.25rem;">
							<el-pagination background layout="total,prev, pager, next, jumper" :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name:'zhanNeiXiaoXi',
		data() {
			return {
				input1: '',
				select1: '',
				select2: '',
				value1: true,
				dialogTableVisible: false,
				dialogTableVisible2:false,
				fabu:false,
				textarea:'',
				formLabelWidth: '100px',
				form: {
					name1: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				// 表格添加数据
				tableData: [{
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					jieShou:'200人',
					select: '查看',
					delete: '删除'
				}]
			}
		},
		methods:{
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

<style scoped>
	.all {
		float: left;
		width: 100%;
		line-height: 3.125rem;
		background-color: #F9F9F9;
		height: 100%;
	}

	.title {
		font-size: 0.875rem;
		background: none;
	}

	.input {
		width: 95%;
		height: 3.125rem;
		background-color: white;
		border: 1px solid #E4E4E4;
	}

	.title {
		font-size: 0.875rem;
		background: none;
	}

	.tit {
		position: relative;
		z-index: 1;
		text-indent: 1.25rem;
		color: black;
		font-weight: bold;
		border-bottom: 1px solid #E4E4E4;
		height: 3.125rem;
		line-height: 3.125rem;
	}

	.rig {
		float: right;
		margin-right: 2rem;
	}

	.tan {
		line-height: 2.5rem;
	}

	.input {
		width: 95%;
		height: 3.125rem;
		background-color: white;
		border: 1px solid #E4E4E4;
	}

	.guangGao {
		margin-left: 1.25rem;
	}

	.list {
		margin-top: 1.25rem;
		width: 95%;
		border: 1px solid #E4E4E4;
	}

	.play a {
		margin: 0 0.5rem;
		color: black;
		font-weight: bold;
	}

	.fenye {
		background-color: white;
		border: 1px solid #E4E4E4;
	}

	.text {
		width: 25rem;
		margin: auto;
		margin-top: 0.625rem;
		line-height: 1.5625rem;
		color: #747474;
	}
</style>
