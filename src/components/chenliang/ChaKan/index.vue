<!-- 贷前管理-表-查看-二级 -->
<template>
	<el-main style="background: #F9F9F9;">
		<div class="shouxin">
			<div class="floatL">
				准入授信管理
			</div>
			<div class="floatR2">
				<div class="width3">
					<div class="hei"></div>
					<div class="white">初审</div>
					<span>1</span>
					<div class="white">复审</div>
					<span>2</span>
					<div>终审</div>
					<span>3</span>
					<div>放款</div>
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
						<router-link to="/index/DaiKuan/WeiShouLi" tag="span">
							<i class="el-icon-arrow-left"></i>返回
						</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div>
			<el-menu class="el-menu-demo" style="background: #F9F9F9;" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">
					<router-link to="/index/ChaKan/KeHu">客户资料</router-link>
				</el-menu-item>
				<el-menu-item index="2">
					<router-link to="/index/ChaKan/YunYingShang">运营商信息</router-link>
				</el-menu-item>
				<el-menu-item index="3">
					<router-link to="/index/ChaKan/FengKong">风控报告</router-link>
				</el-menu-item>
				<el-menu-item index="4">
					<router-link to="/index/ChaKan/JuXinLi">聚信立</router-link>
				</el-menu-item>
				<el-menu-item index="5">
					<router-link to="/index/ChaKan/JieKuan">历史借款</router-link>
				</el-menu-item>
			</el-menu>
		</div>
		<template>
			<router-view></router-view>
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
	.hei{
		background: #000;
		width: 123px;
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
