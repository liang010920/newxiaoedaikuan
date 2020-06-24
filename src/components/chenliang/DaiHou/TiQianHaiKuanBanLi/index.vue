<!-- 贷后管理-提钱还款查看 -->
<template>
	<el-container>
		<el-main>
			<div>
				<div class="shouxin">
					<div class="floatL">
						提前还款
					</div>
					<div class="floatR2">
						<div class="width3">
							<div class="hei4"></div>
							<div class="white">初审</div>
							<span>1</span>
							<div class="white">复审</div>
							<span>2</span>
							<div class="white">终审</div>
							<span>3</span>
							<div class="white">放款</div>
							<span>4</span>
							<div class="white">还款</div>
							<span>5</span>
							<div>完成</div>
						</div>
						<span> | </span>
						<div class="kuan">
							<span>
								<i class="el-icon-printer"></i>
								打印
							</span>
							<span>
								<router-link to="/index/HaiKuanGuanLi" tag="span">
									<i class="el-icon-arrow-left"></i>返回
								</router-link>
							</span>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<div>
					<p class="kehu" style="margin-top:20px;">
						(客户【张某某】提前还款办理) <span class="floatR" style="color: #FF660F;">提交审批</span>
					</p>
				</div>
				<template>
					<el-table class="ju" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;">
						<!-- <el-table-column type="selection" width="55">
						</el-table-column> -->
						<el-table-column label="期限" width="90">
							<template slot-scope="scope">{{ scope.row.id }}</template>
						</el-table-column>
						<el-table-column prop="name" label="应还款日" width="85">
						</el-table-column>
						<el-table-column prop="date" label="实际还款日" width="75">
						</el-table-column>
						<el-table-column prop="phone" label="本金" width="120">
						</el-table-column>
						<el-table-column prop="edu" label="利息" width="65">
						</el-table-column>
						<el-table-column prop="huankuan" label="管理费" width="90">
						</el-table-column>
						<el-table-column prop="jiekuan" label="罚息" width="80">
						</el-table-column>
						<el-table-column prop="daikuan" label="变更费" width="70">
						</el-table-column>
						<el-table-column prop="shenpi" label="提前还款费" width="95">
						</el-table-column>
						<el-table-column prop="jianyi" label="还款总额" width="85">
						</el-table-column>
						<el-table-column prop="tipeo" label="状态" width="60">
						</el-table-column>
						<el-table-column prop="shifou" label="预期天数" width="80">
						</el-table-column>
						<el-table-column prop="chushen" label="罚息减免" width="80">
						</el-table-column>
						<el-table-column prop="fushen" label="备注" width="65">
						</el-table-column>
						<el-table-column prop="peo" label="财务备注" width="85">
						</el-table-column>
						<el-table-column prop="" label="操作" width="85">
							<template slot-scope="scope">
								<router-link to="/index/JianCha" tag="div">{{ scope.row.caozuo }}</router-link>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<div class="shuRu">
					<div class="main">
						<p class="main-p">
							<span><label>提前还款方式：</label><input type="text" value="全部提前还款"></span>
							<span><label> 还款期数 ：</label><input type="text" value="3"></span>
							<span></span>
						</p>
			
						<p class="main-p">
							<span><label>提前还款总额：</label><input type="text" value=""></span>
							<span><label>提前还款费：</label><input type="text" value="3"></span>
							<span><label>实际还款日期：</label><input type="text" value="3"></span>
						</p>
						<p class="main-p-three">
							<span>提前还款总额:</span>
							<span align="left">
								<el-radio v-model="radio" label="1">备选项</el-radio>
								<el-radio v-model="radio" label="2">备选项</el-radio>
								<label style="font-size: 13px;">收取金额: </label><input type="text" value=""> 元
							</span>
						</p>
						<p style="width: 40rem;margin-top: 1.625rem;">
							<span style="display: inline-block;margin-left: 2.8rem;font-size: 13px;">备注:</span>
							<span class="shuru2">
								<el-input type="textarea" :rows="2" placeholder="客户已于14号前还款" v-model="textarea">
								</el-input>
							</span>
						</p>
						<!-- <div>
							<el-row class="anniu">
								<el-button>确认提交</el-button>
								<el-button> 返回 </el-button>
							</el-row>
						</div> -->
					</div>
				</div>
				<div class="kong" style="margin-left: 0 !important;">
					<div class="width4" style="width: 100%;">
						<div class="tishi" align="left">借款信息</div>
						<div align="left" class="bai">
							<li align="center">贷款性质：</li>
							<li align="">
								<select>
									<option value="个人">个人</option>
									<option value="个人">个人</option>
									<option value="个人">个人</option>
								</select>
							</li>
							<li align="center">贷款类型:</li>
							<li align="">
								<select>
									<option value="信用">信用</option>
									<option value="信用">信用</option>
									<option value="信用">信用</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">贷款产品：</li>
							<li align="">
								<input type="text" value="工薪贷">
							</li>
							<li align="center">贷款用途:</li>
							<li align="">
								<label>
									<input type="checkbox" checked>日常生活消费
								</label>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">还款方式：</li>
							<li align="">
								<select>
									<option value="等额本息">等额本息</option>
									<option value="等额本息">等额本息</option>
									<option value="等额本息">等额本息</option>
								</select>
							</li>
							<li align="center">借款期限:</li>
							<li align="">
								<select>
									<option value="6个月">6个月</option>
									<option value="1个月">1个月</option>
									<option value="3个月">3个月</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">申请金额：</li>
							<li align="">
								<input type="text" value="500000">元
							</li>
							<li align="center">审批金额:</li>
							<li align="">
								<input type="text">元
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">综合利率：</li>
							<li align="">
								<input type="text">%
							</li>
							<li align="center">借款管理费:</li>
							<li align="">
								<input type="text">%
							</li>
						</div>
						<div class="tishi" align="left">个人信息</div>
						<div align="left" class="bai">
							<li align="center">本人姓名：</li>
							<li align="">
								<input type="text" value="张茉茉">
							</li>
							<li align="center">性别:</li>
							<li align="">
								<select>
									<option value="男">男</option>
									<option value="女">女</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">手机号码：</li>
							<li align="">
								<input type="text" value="16888888888">
							</li>
							<li align="center">年龄:</li>
							<li align="">
								<label>
									<input type="text" value="28">
								</label>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">身份证：</li>
							<li align="">
								<input type="text" value="456789544348765408">
							</li>
							<li align="center">学历:</li>
							<li align="">
								<select>
									<option value="本科">本科</option>
									<option value="专科">专科</option>
									<option value="大专">大专</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">婚姻状况：</li>
							<li align="">
								<select>
									<option value="未婚">未婚</option>
									<option value="已婚">已婚</option>
								</select>
							</li>
							<li align="center">邮箱:</li>
							<li align="">
								<input type="text" value="jackliu@360.com">
							</li>
						</div>
						<div class="tishi" align="left">居住信息</div>
						<div align="left" class="bai">
							<li align="center">居住情况：</li>
							<li align="">
								<select>
									<option value="租房">租房</option>
									<option value="购房">购房</option>
								</select>
							</li>
							<li align="center">现居住地:</li>
							<li align="">
								<select>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">详细地址：</li>
							<li align="">
								<input style="width: 500px;" type="text" value="详细地址详细地址详细地址详细地址详细地址详细地址详细地址">
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">现居住时长：</li>
							<li align="">
								<select>
									<option value="5年以上">5年以上</option>
									<option value="3年以上">3年以上</option>
									<option value="1年以上">1年以上</option>
								</select>
							</li>
							<li align="center">住宅电话:</li>
							<li align="">
								<label>
									<input type="text" value="0755=89654785">
								</label>
							</li>
						</div>
						<div class="tishi" align="left">联系人信息</div>
						<div align="left" class="bai">
							<li align="center">直系亲属姓名：</li>
							<li align="">
								<input type="text" value="邓某某">
							</li>
							<li align="center">关系:</li>
							<li align="">
								<select>
									<option value="父亲">父亲</option>
									<option value="母亲">母亲</option>
									<option value="儿子">儿子</option>
									<option value="女儿">女儿</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">移动电话：</li>
							<li align="">
								<input type="text" value="16888888888">
							</li>
						</div>
						<div class="tishi" align="left">职业信息</div>
						<div align="left" class="bai">
							<li align="center">参与工作时间：</li>
							<li align="">
								<input type="text" value="2011-11-15">
							</li>
							<li align="center">公司名称:</li>
							<li align="">
								<input type="text" value="中石化">
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">公司地址：</li>
							<li align="">
								<select>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
									<option value="广东省 深圳市 福田区">广东省 深圳市 福田区</option>
								</select>
							</li>
							<li align="center">详细地址:</li>
							<li align="">
								<label>
									<input type="text" value="详细地址">
								</label>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">公司性质：</li>
							<li align="">
								<select>
									<option value="民营企业">民营企业</option>
									<option value="民营企业">民营企业</option>
								</select>
							</li>
							<li align="center">所在行业:</li>
							<li align="">
								<select>
									<option value="互联网/IT">互联网/IT</option>
									<option value="医学">医学</option>
									<option value="焊工">焊工</option>
								</select>
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">每月收入：</li>
							<li align="">
								<input type="text" value="4500-6499">
							</li>
							<li align="center">入职时间:</li>
							<li align="">
								<input type="text" value="2014-11-15">
							</li>
						</div>
						<div align="left" class="bai">
							<li align="center">单位电话：</li>
							<li align="">
								<input type="text" value="16888888888">
							</li>
						</div>
					</div>
				</div>
				<template>
					<div class="yemian-di">
						Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
					</div>
				</template>
			</div>
		</el-main>
	</el-container>
	
</template>

<script>
	export default {
		/* components: {
			HaiKuanLvRu
		}, */
		name: 'DaiKuanJieXiangCha',
		data() {
			const item = [{
					id: '1',
					name: '2018-12-15',
					date: '',
					phone: '100.00',
					edu: '152.0',
					huankuan: '0.00',
					jiekuan: '0.00',
					daikuan: '0.00',
					shenpi: '0.00',
					jianyi: '1152.00',
					tipeo: '',
					shifou: '0',
					chushen: '0.00',
					fushen: '',
					peo: '',
					caozuo: ''
				},
				{
					id: '1',
					name: '2018-12-15',
					date: '',
					phone: '100.00',
					edu: '152.0',
					huankuan: '0.00',
					jiekuan: '0.00',
					daikuan: '0.00',
					shenpi: '0.00',
					jianyi: '1152.00',
					tipeo: '',
					shifou: '0',
					chushen: '0.00',
					fushen: '',
					peo: '',
					caozuo: ''
				},
				{
					id: '1',
					name: '2018-12-15',
					date: '',
					phone: '100.00',
					edu: '152.0',
					huankuan: '0.00',
					jiekuan: '0.00',
					daikuan: '0.00',
					shenpi: '0.00',
					jianyi: '1152.00',
					tipeo: '',
					shifou: '0',
					chushen: '0.00',
					fushen: '',
					peo: '',
					caozuo: ''
				},
			];
			return {
				valuezz: null,
				iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
				// tableData: Array(20).fill(item) //一个item数据显示20条数据
				tableData: item,
				// gridData: item2,
				dialogTableVisible: false,
				textarea: '',
				currentPage4: 5,
				form: {
					name: '',
					data1: '',
					data2: '',

				},
			}
		}
	}
</script>

<style>
	.kong {
		margin-top: 20px;
		margin-left: 139px;
	}

	.yemian-di {
		background-color: #F9F9F9;
		text-align: center;
		height: 100px;
		padding-top: 70px;
	}

	* {
		margin: 0rem;
		padding: 0rem;
	}

	.main[data-v-6c878c9c] {
		padding-top: 1.25rem;
		/* padding-left: 5rem; */
	}

	.el-rate {
		height: 20px;
		line-height: 1;
		margin-left: 264px;
		/* font-size: 1.5625rem; */
	}

	.el-icon-star-off {
		color: #E4E4E4;
		font-size: 3.125rem;
	}

	.el-icon-star-off:hover {
		color: black;
	}

	.block[data-v-6c878c9c] {
		height: 4.125rem;
		margin-right: 746px;
	}

	.ul-shu {

		margin-left: 60px;
	}

	.ul-shu li {
		display: inline-block;
		margin-left: 24px;
	}

	.ul-shu2 {
		font-size: 13px;
		margin-left: 54px;
	}

	.ul-shu2 li {
		display: inline-block;
		margin-left: 24px;
	}

	.pin {
		padding-bottom: 50px;
		margin-left: 31px;
	}

	.width4 {
		position: relative;
	}

	.width4 div li select {
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width: 200px;
	}

	.width4 div li input[type=text] {
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width: 188px;
		font-size: 14px;
	}

	.width4>div {
		border-bottom: 1px solid #E4E4E4;
	}

	.width4 div li {
		padding: 10px;
		border-right: 1px solid #E4E4E4;
		list-style-type: none;
		display: inline-block;
	}

	.width4 div li:last-child {
		width: 280px;
		border-right: 0;
	}

	.width4 div li:first-child {
		padding: 14px;
		width: 120px;
	}

	.width4 div li:nth-of-type(2) {
		width: 280px;
	}

	.width4 div li:nth-of-type(3) {
		padding: 14px;
		width: 120px;
	}

	.el-menu.el-menu--horizontal {
		border: 0px !important;
	}

	.width4 {
		width: 83%;
		border: 1px solid #e4e4e4;
	}

	.tishi {
		font-weight: bold;
		background: #F2F2F2;
		padding: 10px;
	}

	.clear {
		clear: both;
	}

	.kuan>span {
		border: 1px solid #999;
		padding: 7px 10px;
		margin-left: 10px;
	}

	.floatR2>* {
		display: inline-block;
	}

	.floatR2>span {
		margin: 0 20px;
		font-size: 22px;
	}

	.hei {
		background: #000;
		width: 123px;
		height: 38px;
		position: absolute !important;
		top: 0;
		left: 0;

	}

	.width3 {
		position: relative;
		font-size: 13px;
		padding: 10px;
		background: #F2F2F2;
	}

	.width3 div {
		position: relative;
		z-index: 10;
	}

	.width3 span {
		position: relative;
		z-index: 10;
	}

	.white {
		color: #fff;
	}

	.width3 span {
		padding: 2px 7px;
		margin: 0 10px;
		border-radius: 50%;
		background: #fff;

	}

	.width3 div {
		display: inline-block;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.shouxin>div {
		display: inline-block;
	}

	.floatL {
		float: left;
	}

	.floatR2 {
		float: right;
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

	.anniu .el-button {
		background-color: black;
		color: white;
		margin-left: 94px;
		margin-top: 13px;
	}

	.main {
		margin-left: 5rem;
	}

	.main-p {
		width: 50rem;
		margin-top: 1.625rem;
		display: flex;
	}

	.shuru2 {
		margin-left: -37px;
	}

	.main-p-three {
		margin-top: 1.625rem;
		width: 50rem;
		display: flex;
	}

	.main-p-three input {
		text-align: center;
		height: 1.58rem;
		font-size: 0.8rem;
		/* flex: 3; */
	}

	.main-p-three span:first-of-type {
		font-size: 0.8rem;
		flex: 1;
	}

	.main-p-three span:last-of-type {
		flex: 8;
	}

	.main-p span {
		/* text-align: center; */
		margin-right: 0.625rem;
		display: inline-block;
		flex: 2;
		font-size: 0.8rem;
	}

	.main-p input {
		text-align: center;
		height: 1.58rem;
		font-size: 0.8rem;
		/* flex: 3; */
	}

	.main-p-two {
		width: 21.875rem;
		margin-top: 0.625rem;
		display: flex;
	}

	.main-p-two span {
		flex: 1;
		display: inline-block;
		font-size: 0.8rem;
	}

	.main-p-two span:first-of-type {
		margin-right: 0.625rem;
		display: inline-block;
		flex: 2;
		font-size: 0.8rem;
	}

	.ul {
		margin-top: 16px;
		margin-left: 89px;
		font-size: 13px;
	}

	.ul li {
		display: inline-block;
		margin-left: 28px;
	}

	.el-textarea {
		margin-left: 120px;
		margin-top: -26px;
	}

	.el-form-item__label {
		text-align: right;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #606266;
		line-height: 40px;
		padding: 0 12px 0 0;
		box-sizing: border-box;
		margin-left: 23px;
	}

	.ul1 {
		margin-right: 304px;
		/* width: 100%; */
		width: 1000px;
		border: solid;
	}

	.ul1 li {
		display: inline-block;


		margin-right: 165px;
	}

	.ul1 select {
		width: 115px;
		height: 28px;
	}

	.shuRu {
		border: dashed 1px #606266;
		height: 300px;
		width: 1310px;
		padding-top: 28px;
		margin-top: 30px;
	}

	.kehu {
		margin-bottom: 35px;
		font-weight: bold;
		text-align: center;
	}

	.shenPi {

		position: absolute;
		font-weight: bold;
		right: 100px;
		font-size: 26px;
		color: #FF6805;
		margin-top: -16px;
	}

	.zi {
		float:left;
		left: 219px;
	}

	.tou {
		display: inline-block;
		margin-top: 35px;
		margin-bottom: 65px;
	}

	.biao {
		display: inline-block;
		margin-top: 6px;
		position: absolute;
	}

	.buZou {
		display: inline-block;
		color: white;
		background-color: black;
		margin-left: 565px;
		border: solid;
		width: 547px;
		height: 35px;
		line-height: 35px;
		margin-right: 18px;
	}

	.buZou span {
		margin-left: 20px;
	}

	.num {
		border-radius: 14px;
		border: solid 1px white;
		background-color: white;
		padding-left: 5px;
		padding-right: 6px;
		color: black;
	}

	.num2 {
		border-radius: 14px;
		border: solid 1px white;
		background-color: black;
		padding-left: 5px;
		padding-right: 6px;
		color: black;
	}

	/* .num:nth-of-type(5){
		background-color: black;
		color: white;
	} */
</style>
