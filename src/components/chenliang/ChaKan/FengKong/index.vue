<!-- 贷前管理-查看-风控报告 -->
<template>
	<div style="background: #F9F9F9;">
		<div class="width6">
			<div>
				<div class="bgColor3" align="left">支付宝</div>
				<div class="hong">用户未认证</div>
			</div>
			<div>
				<div class="bgColor3" align="left">京东</div>
				<div class="jd bai" align="left">
					<div>
						<li align="right">会员昵称：</li>
						<li>小小星</li>
						<li align="right">会员等级：</li>
						<li>京东钻石会员</li>
					</div>
					<div>
						<li align="right">白条信用：</li>
						<li>50000</li>
					</div>
				</div>
			</div>
			<div>
				<div class="bgColor3" align="left">淘宝</div>
				<div class="hong">用户未认证</div>
			</div>
			<div>
				<div class="bgColor3" align="left">社保</div>
				<div class="hong">用户未认证</div>
			</div>
			<div>
				<div class="bgColor3" align="left">公积金</div>
				<div class="lian bai">查看公积金信息</div>
			</div>
			<div>
				<div class="bgColor3" align="left">网银流水</div>
				<div class="lian bai">查看银行流水信息</div>
			</div>
			<div>
				<div class="bgColor3" align="left">人脸识别</div>
				<div class="hong black">通过</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'FengKong'
	}
</script>

<style>
	.bai{
		background: #fff;
	}
	.black{
		color: black !important;
	}
	.lian{
		text-decoration: underline;
		padding: 10px;
	}
	.width6{
		width: 83%;
	}
	.width6>div{
		border: 1px solid #E4E4E4;
		margin-bottom: 10px;
	}
	.bgColor3{
		background: #f2f2f2;
		padding: 10px 15px;
		font-weight: bold;
	}
	.hong{
		color:#CC660B;
		background: #fff;
		padding: 10px 0;
	}
	.jd div li{
		list-style-type: none;
		display: inline-block;
		color:#000;
		width:22%;
		padding: 10px;
		border-right: 1px solid #E4E4E4;
		
	}
	.jd div li:last-child{
		border: 0;
	}
	.jd div{
		border-bottom: 1px solid #E4E4E4;
	}
</style>
