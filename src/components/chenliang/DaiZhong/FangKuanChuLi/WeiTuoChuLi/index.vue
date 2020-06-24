<!-- 贷中管理-放款处理-委托处理 -->
<template>
	<el-main style="background: #F9F9F9;">
		<div class="shouxin">
			<div class="floatL">
				委托处理
			</div>
			<div class="floatR2">
				<div class="width3">
					<div class="hei3"></div>
					<div class="white">初审</div>
					<span>1</span>
					<div class="white">复审</div>
					<span>2</span>
					<div class="white">终审</div>
					<span>3</span>
					<div class="white">放款</div>
					<span>4</span>
					<div>还款</div>
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
						<router-link to="/index/DaiZhong/FangKuanChuLi" tag="span">
							<i class="el-icon-arrow-left"></i>返回
						</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<template>
			<div class="kong" style="margin-top:10px;">
				<div class="width4">
					<div class="tishi" align="left">借款信息</div>
					<div align="left" class="bai">
						<li align="center">贷款性质：</li>
						<li align="">
							郭某某 <span style="margin-left: 15px;"><router-link to="/index/YiZhunRuKeHu" tag="a">客户资料档案</router-link></span>
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
		</template>
	</el-main>
</template>

<script>
	export default {
		name: 'ChaKan',
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>

<style>
	.bai{
		background: #fff;
	}
	.kong{
		position: relative;
	}
	.guding{
		border: 1px solid #E4E4E4;
		border-radius: 10px;
		position: absolute;
		right:-170px;
		top: 0;
		background: #fff;
		color: #999;
		padding: 10px;
		padding-bottom: 50px;
	}
	.guding ul{
		padding: 20px 15px;
	}
	.guding ul li{
		list-style-type: none;
		padding: 10px 0 !important;
		display: block;
		border-right: 0 !important;
		width: 100% !important;
		border-bottom: 1px solid #E4E4E4;
	}
	.width4{
		position: relative;
	}
	.width4 div li select{
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width:200px;
	}
	.width4 div li input[type=text]{
		border: 1px solid #E4E4E4;
		padding: 5px;
		background: #F9FAFC;
		width:188px;
		font-size: 14px;
	}
	.width4>div{
		border-bottom: 1px solid #E4E4E4;
	}
	.width4 div li{
		padding: 10px;
		border-right:1px solid #E4E4E4;
		list-style-type: none;
		display: inline-block;
	}
	.width4 div li:last-child{
		width: 280px;
		border-right: 0;
	}
	.width4 div li:first-child{
		padding: 14px;
		width: 120px;
	}
	.width4 div li:nth-of-type(2){
		width: 280px;
	}
	.width4 div li:nth-of-type(3){
		padding: 14px;
		width: 120px;
	}
	.el-menu.el-menu--horizontal{
		border: 0px !important;
	}
	.width4{
		width: 83%;
		border: 1px solid #e4e4e4;
	}
	.tishi{
		font-weight: bold;
		background: #F2F2F2;
		padding: 10px;
	}
	.clear{
		clear: both;
	}
	.kuan>span{
		border: 1px solid #999;
		padding: 7px 10px;
		margin-left: 10px;
	}
	.floatR2>*{
		display: inline-block;
	}
	.floatR2>span{
		margin: 0 20px;
		font-size: 22px;
	}
	.hei3{
		background: #000;
		width: 263px;
		height:38px;
		position: absolute !important;
		top:0;
		left:0;
		
	}
	.width3{
		position: relative;
		font-size: 13px;
		padding: 10px;
		background: #F2F2F2;
	}
	.width3 div{
		position: relative;
		z-index: 10;
	}
	.width3 span{
		position: relative;
		z-index: 10;
	}
	.white{
		color: #fff;
	}
	.width3 span{
		padding: 2px 7px;
		margin: 0 10px;
		border-radius: 50%;
		background: #fff;
		
	}
	.width3 div{
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
	.shouxin>div{
		display: inline-block;
	}
	.floatL{
		float: left;
	}
	.floatR2{
		float: right;
	}
</style>
