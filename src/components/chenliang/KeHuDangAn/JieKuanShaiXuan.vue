<!-- 客户档案管理-借款筛选 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan">
				<i class="el-icon-s-home"></i>首页/客户档案管理/借款能力筛选
				<div class="clear"></div>
			</div>
			<div>
				<div class="shaixuan">
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">最近借款 ： </li>
						<li>不限 </li>
						<li>1周内 </li>
						<li>2周内 </li>
						<li>1个月内</li>
						<li>2个月前</li>
						<li>3个月前</li>
						<li>3个月前</li>
						<li>6个月前</li>
						<li style="font-weight: bold;">自定义</li>
					</ul>
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">借款次数 ： </li>
						<li>不限 </li>
						<li>1次+ </li>
						<li>2次+ </li>
						<li>3次+</li>
						<li>4次+</li>
						<li>10次+</li>
						<li>20次+</li>
						<li>30次+</li>
						<li style="font-weight: bold;">自定义</li>
					</ul>
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">借款金额 ： </li>
						<li>不限 </li>
						<li>0-5000 </li>
						<li>5001-10000 </li>
						<li>1-3万</li>
						<li>3-5万</li>
						<li>5-10万</li>
						<li>10-30万</li>
						<li>30-100万</li>
						<li style="font-weight: bold;">自定义</li>
					</ul>
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">贷款用途 ： </li>
						<li>不限 </li>
						<li>日常生活 </li>
						<li>提高生活质量 </li>
						<li>购物</li>
						<li>教育支出</li>
						<li>医疗</li>
						<li>保险</li>
						<li>资金周转</li>
						<li style="font-weight: bold;">其他</li>
					</ul>
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">信用等级 ： </li>
						<li>不限 </li>
						<li>AA </li>
						<li>A </li>
						<li>B</li>
						<li>C</li>
						<li>D</li>
						<li>E</li>
						<li>HR</li>
					</ul>
					<ul class="shaixuan-ul">
						<li style="font-weight: bold;">用户标签 ： </li>
						<li>不限 </li>
						<li>标签名称 </li>
						<li>标签名称 </li>
						<li>标签名称</li>
						<li>标签名称</li>
						<li>标签名称</li>
						<li>标签名称</li>
						<li>标签名称</li>
						<li>标签名称</li>
					</ul>
				</div>
				<el-container>
					<el-main>
						<div class="lieBiao">
							<span class="floatL font2">数据列表</span>
							<div class="lieBiao-kuang">
								<!-- <input type="text" placeholder="撤销黑名单"> -->
								<select @click="dialogFormVisible1 = true">
									<option value="贷款类型">群发短信</option>
								</select>
								<select @click="dialogFormVisible = true">
									<option value="贷款类型">群发站内信</option>
								</select>
								<select>
									<option value="贷款类型">设置标签</option>
								</select>
								<select>
									<option value="贷款类型">到处数据</option>
								</select>
								<select disabled="disabled">
									<option value="贷款类型">显示条数</option>
								</select>
								<select disabled="disabled">
									<option value="贷款类型">排序方式</option>
								</select>
							</div>
							<div class="clear"></div>
						</div>
						<el-table :data="tableData">
						</el-table>
						<template>
							<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
								<el-table-column type="selection" width="55">
								</el-table-column>
								<el-table-column label="用户ID" width="120">
									<template slot-scope="scope">{{ scope.row.id }}</template>
								</el-table-column>
								<el-table-column prop="name" label="用户手机号" width="125">
								</el-table-column>
								<el-table-column prop="date" label="用户姓名" width="125">
								</el-table-column>
								<el-table-column prop="phone" label="会员等级" width="120">
								</el-table-column>
								<el-table-column prop="edu" label="贷款金额" width="100">
								</el-table-column>
								<el-table-column prop="huankuan" label="贷款笔数" width="110">
								</el-table-column>
								<el-table-column prop="jiekuan" label="剩余贷还" width="120">
								</el-table-column>
								<el-table-column prop="daikuan" label="账户启用状态" width="110">
									<el-switch v-model="value" active-color="black" inactive-color="#ff4949">
									</el-switch>
								</el-table-column>
								<el-table-column prop="caozuo" label="操作" width="135">
									<template slot-scope="scope">
										<div><router-link to="/index/HeiMingDan/ChaKan">{{ scope.row.caozuo }}</router-link></div>
									</template>
									<!-- <el-button type="text" @click="dialogFormVisible1 = true">查看</el-button> -->
								</el-table-column>
							</el-table>
							<el-dialog title="群发短信" :visible.sync="dialogFormVisible1">
								<el-form :model="form">
									<p style="margin-left: 50px;">
										<span style="color: red;margin-right: 5px;">*</span>发送对象 : <span style="margin-left: 15px;">共<span style="color: red;">20</span>个用户</span>
									</p>
									<div style="margin-top: 15px;margin-left: 50px;">
										<span style="color: red;margin-right: 5px;">*</span>短信内容: <input type="text" class="form-input"><br />
										<p class="jianJie">
											发送时系统会自动在结果追加【51放款】，请勿重复添加，
											内容上限不能超过<span style="color: red;">500</span>字，
											当前已输入<span style="color: red;">3</span>字，
											将作为<span style="color: red;">1</span>条发送
										</p>
									</div>
									<p style="margin-left: 50px;">
										<span style="color: red;margin-right: 5px;">*</span>发送统计 : <span style="margin-left: 15px;">发送条数：<span style="color: red;">20</span>条，可用短信条数：<span style="color: red;">10000</span>条</span>
									</p>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="dialogFormVisible1 = false">取 消</el-button>
									<el-button type="primary" @click="dialogFormVisible1 = false" style="background-color: black;">确定</el-button>
								</div>
							</el-dialog>
							<el-dialog title="群发站内信" :visible.sync="dialogFormVisible">
								<el-form :model="form">
									<p style="margin-left: 50px;">
										<span style="color: red;margin-right: 5px;">*</span>发送对象 : <span style="margin-left: 15px;">共<span style="color: red;">20</span>个用户</span>
									</p>
									<p style="margin-left: 51px;margin-top: 15px;">
										<span style="color: red;margin-right: 5px;">*</span>标题 : <input type="text" style="margin-left: 15px;">
									</p>
									<div style="margin-top: 15px;margin-left: 50px;">
										<span style="color: red;margin-right: 5px;">*</span>内容: <input type="text" class="form-input"><br />
										<p class="jianJie">
											站内信标题不能超过20个字，内容不能超过100个字
										</p>
									</div>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="dialogFormVisible1 = false">取 消</el-button>
									<el-button type="primary" @click="dialogFormVisible1 = false" style="background-color: black;">确定</el-button>
								</div>
							</el-dialog>
						</template>
						<template>
							<div class="block margin2">
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40,50]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="50">
								</el-pagination>
							</div>
						</template>
						<template>
							<div class="yemian-di">
								Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
							</div>
						</template>
					</el-main>
				</el-container>
			</div>
		</el-main>
	</el-container>
	
</template>

<script>
	export default {
		name: 'Cha',
		data() {
			const item = [{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},
				{
					id: '884766',
					name: '1300000000000',
					date: '小熊',
					phone: '黄金会员',
					edu: '2000',
					huankuan: '10',
					jiekuan: '1000.00',
					daikuan: '',
					jianyi: '',
					caozuo:'查看'
				},

			];
			const item2 = [{
					date: '2018-07-06 16:58:11',
					zhuangtai: '复审',
					renyuan: '李某某',
					jieguo: '审核通过',
					fankui: '申请材料属实，资料齐全',
					edu: '【额度审批】审批金额50000元，期限36期，综合利率1.0%'
				},
				{
					date: '2018-07-06 16:58:11',
					zhuangtai: '初审',
					renyuan: '张某某',
					jieguo: '审核通过',
					fankui: '申请材料属实，资料齐全',
				}
			];
			return {
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				gridData: item2,
				dialogTableVisible2:false,
				dialogTableVisible: false,
				dialogFormVisible: false,
				dialogFormVisible1: false,
				currentPage4: 5,
				value: true,
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
				formLabelWidth: '120px'

			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
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
	.from-kuang1{
		
	}
	.jianJie {
		
		width: 355px;
		height: 68px;
		margin-left: 83px;
		font-size: small;
		margin-top: 10px;
	}

	.shaixuan {
		margin-left: 30px;
		margin-bottom: 38px;
		margin-top: 8px;
	}

	.shaixuan ul li {
		display: inline-block;
		width: 101px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	.shaixuan ul li:hover {
		background-color: #E4E4E4;
	}

	.form-input {
		width: 398px;
		padding-left: 5px;
		padding-bottom: 85px;
		margin-left: 15px;
		padding-top: 4px;
	}

	.el-pagination {
		white-space: nowrap;
		padding: 2px 5px;
		color: #303133;
		font-weight: 700;
		/* text-align: center; */
		margin-left: 536px;
	}

	.form-ul1 li {
		margin-bottom: 35px;
	}

	.form-ul1 input {
		width: 129px;
		height: 24px;
		padding-left: 6px;
		font-size: 13px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul1 select {
		font-size: 13px;
		width: 140px;
		height: 24px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul1 span {
		font-family: fantasy;
	}

	.form-ul1 {
		margin-left: 54px;
	}

	.form-ul2 {
		float: right;
		margin-top: -266px;
		margin-right: 169px;
	}

	.form-ul2 li {
		margin-bottom: 35px;
	}

	.form-ul2 input {
		width: 129px;
		height: 24px;
		padding-left: 6px;
		font-size: 13px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul2 select {
		font-size: 13px;
		width: 140px;
		height: 24px;
		color: #93A1A1;
		margin-top: 10px;
	}

	.form-ul2 span {
		font-family: fantasy;
	}

	.lieBiao-kuang {
		float: right;
		margin-right: 68px;

	}

	.lieBiao-kuang select {
		height: 27px;
		margin-left: 9px;
	}

	.lieBiao-kuang input {
		height: 23px;

	}

	.yemian-di {
		background-color: #F9F9F9;
		text-align: center;
		height: 51px;
		padding-top: 33px;
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

	.dao {
		background: #fff;
		padding: 3px;
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
