<!-- 系统消息 -->
<template>
	<el-container>
		<el-main>
			<div class="all">
				<!-- 面包屑导航 -->
				<el-breadcrumb class="title" style="line-height: 60px;" separator="/">
					<el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">运营管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>消息管理</el-breadcrumb-item>
					<el-breadcrumb-item>系统消息</el-breadcrumb-item>
				</el-breadcrumb>
				<!-- 信息下拉 -->
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
				<!-- 消息弹框 -->
				<el-dialog title="发布消息" :visible.sync="fabu" width="500px" class="tan">
					<el-form :model="form">
						<el-form-item label="消息标题" required :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="消息内容" required :label-width="formLabelWidth">
							<el-input type="textarea" rows="10" size="500" v-model="textarea" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="fabu = false">取 消</el-button>
						<el-button type="primary" @click="fabu = false">确 定</el-button>
					</div>
				</el-dialog>
				<div class="list">
					<div class="lieBiao">
						<span class="floatL font2"><i class="el-icon-s-fold"></i>数据列表</span>
						<span class="floatR" style="border: 0;">
							<span class="dao2" @click="dialogTableVisible2 = true">发送信息</span>
							<el-dialog title="发送信息" :visible.sync="dialogTableVisible2">
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
												<span class="red">*</span>短信信息：
											</div>
										</el-col>
										<el-col :span="16">
											<div align="left">
												<textarea rows="5" cols="46"></textarea>
											</div>
										</el-col>
									</el-row>
								</div>
								<span slot="footer" class="dialog-footer">
									<el-button @click="dialogTableVisible2 = false">取 消</el-button>
									<el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
								</span>
							</el-dialog>
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
						<el-table-column prop="play" label="操作">
							<template slot-scope="scope">
								<p class="play">
									<a @click="dialogTableVisible = true">{{scope.row.select}}</a>
									<el-button type="text" @click="dele">删除</el-button>
									<!-- <a>{{scope.row.delete}}</a> -->
								</p>
							</template>
						</el-table-column>
					</el-table>
					<!-- 查看消息弹框 -->
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
						<div class="block">
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
		name: 'xiTongXiaoXi',
		data() {
			return {
				input1: '',
				select1: '',
				select2: '',
				value1: true,
				dialogTableVisible: false,
				dialogTableVisible2: false,
				fabu: false,
				textarea: '',
				formLabelWidth: '100px',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				// 表格信息添加
				tableData: [{
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}, {
					id: '10001',
					title: '春节有礼，免息券任性送',
					time: '2018-08-02 15:47:44',
					men: 'admin',
					select: '查看',
					delete: '删除'
				}]
			}
		},methods:{
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
	.qunfa>div{
		margin-bottom: 15px;
	}
	.red{
		color: red;
	}
	.info2 {
		margin: 15px 0 15px 25px;
		font-size: 14px;
	}
	
	.border4 {
		border-bottom: 1px solid #E4E4E4;
		margin: 15px 0 15px 25px;
	}
	
	.duanxin {
		margin-top: 15px;
		border: 1px solid #E4E4E4;
		padding: 15px 0 15px 15px;
	}
	
	.bottom3 {
		margin-top: 35px;
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
		margin-left: 10px;
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
	.all {
		float: left;
		width:98%;
		line-height: 3.125rem;
		background-color: #F9F9F9;
		height: 100%;
		padding-left: 20px;
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

	.block {
		margin-top: 50px;
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
