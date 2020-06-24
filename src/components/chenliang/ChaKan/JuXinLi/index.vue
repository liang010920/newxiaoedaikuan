<!-- 贷前管理-查看-聚立信 -->
<template>
	<div>
		<div class="bgColor4" align="left">聚立信</div>
		<div class="bgColor5" align="left">
			<div>
				<span class="color">用户申请检测</span>
				<span class="jlx">聚信立</span>
			</div>
			<div class="border2"></div>
			<div class="yonghu">
				<div>
					<div>姓名：罗洋<span> 不在金融机构和名单 不在法院黑名单</span></div>
					<div>身份证号：342401199703211875</div>
					<div>男|20|安徽省.六安地区.六安市</div>
				</div>
				<div>
					<div>手机号：13852208<span> 不在金融机构和名单 </span>安徽移动 <span>实名认证</span></div>
					<div>注册时间：2015-06-18 16:14:04</div>
					<div>用户姓名与运营提供的姓名[**洋]匹配成功</div>
				</div>
				<div>
					<div>运营商未提供身份证号码</div>
					<div>注册时间：无法判断该号码的电商使用情况(无电商数据)</div>
					<div></div>
				</div>
			</div>
			<div class="bgColor6" align="left"></div>
			<div>
				<span class="color">用户申请检测</span>
			</div>
			<div class="yonghu2">
				<div class="info">用户查询信息</div>
				<div>查询过该用户的相关企业数量(姓名+身份证+电话号码)：3</div>
				<div>查询过该用户的相关企业类型(姓名+身份证+电话号码)：线上消费分期</div>
				<div>身份证组合过的其他姓名：无</div>
				<div>身份证组合过的其他电话：无</div>
				<div>电话号码组合过的其他姓名：无</div>
				<div>电话号码组合过的其他身份证：无</div>
				<div>电话号码注册过的相关企业数量：0</div>
				<div>电话号码注册过的相关企业类型：无</div>
				<div>电话号码出现过的百度贴吧：无</div>
				<div class="info">用户黑名单信息</div>
				<div>用户号码联系黑中介分数(分数范围0-100，参考分为10，分数越低关系越紧密)：40</div>
				<div>直接联系人中黑名单人数：1</div>
				<div>间接联系人中黑名单人数：19</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'JuXinLi'
	}
</script>

<style>
	.yonghu2{
		border: 1px solid #E4E4E4;
		font-size: 14px;
		margin-top: 20px;
	}
	.yonghu2 div{
		border-bottom: 1px solid #E4E4E4;
		padding: 5px;
	}
	.yonghu2 div:last-child{
		border-bottom: 0;
	}
	.info{
		padding: 10px 0;
		font-size: 22px;
	}
	.bgColor6{
		background: #F1F3FA;
		padding: 10px;
		margin: 20px 0;
	}
	.yonghu{
		border: 1px solid #E4E4E4;
		font-size: 14px;
	}
	.yonghu div{
		border-bottom: 1px solid #E4E4E4;
	}
	.yonghu div div{
		border-right: 1px solid #E4E4E4;
		vertical-align: top;
		border-bottom: 0;
		display: inline-block;
		width:33%;
	}
	.yonghu div div:last-child{
		border-right: 0;
	}
	.yonghu div div span{
		color: #209020;
	}
	.color{
		color:#45B6AF;
	}
	.jlx{
		background: #45B6AF;
		color: #fff;
		padding: 7px;
		margin-left: 10px;
	}
	.bgColor4{
		background: #F2F2F2;
		font-weight: bold;
		padding: 10px;
	}
	.bgColor5{
		background: #FFFFFF;
		padding: 10px;
	}
	.border2{
		border-bottom: 1px solid #E4E4E4;
		margin: 20px 0;
	}
</style>
