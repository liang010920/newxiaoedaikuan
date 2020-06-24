<!-- 放款台账-查看详情 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9;">
			<div style="padding: 20px; background: #fff;">
				<div class="floatL">
					<h4>对账单信息</h4>
				</div>
				<div class="floatR2" style="float: right; border: 1px solid #E4E4E4;padding: 3px 7px;">
						<span>
							<router-link to="/cw/cwbenjinfktz" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<div class="ckxq" style="margin-top: 20px;padding-top: 15px; background: #fff;">
				<div class="fkxx">
					<i class="el-icon-collection-tag">本金放款信息</i>
					<ul class="fkleft">
						<li>借款编号</li>
						<li>借款人</li>
						<li>借款项目</li>
						<li>借款期限</li>
						<li>放款金额</li>
						<li>放款时间</li>
						<li>放款方式</li>
					</ul>
					<ul class="fkright">
						<li>201801196398345</li>
						<li>张飞</li>
						<li>薪悦贷</li>
						<li>3个月 先息后本</li>
						<li>￥100,000.00</li>
						<li>2018-01-18 14:25:05</li>
						<li>银行委托</li>
					</ul>
				</div>
				<div class="dzxx">
					<i class="el-icon-collection-tag">对账信息</i>
					<ul class="fkleft1">
						<li>对账状态</li>
						<li>凭证</li>
						<li>处理备注</li>
					</ul>
					<ul class="fkright1">
						<li>未对账</li>
						<li><input type="button" value="上传凭证">&nbsp;<span class="dzspan">请上传凭证图片，支持png/jpg/bmp格式，文件大小限制在1M以内</span></li>
						<li><input type="text" style="height: 15px;"></li>
					</ul>
					<div class="bton">
						<input type="button" value="对账处理">
						<input type="button" value="异常处理">
					</div>

				</div>
			</div>

		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cwchaKan'
	}
</script>

<style scoped>
	.ckxq {
		width: 68.875rem;
	}

	.fkxx i {
		margin-left: 50px;
		float: left;
	}

	.dzxx i {
		margin-left: 55px;
		float: left;
	}

	.fkxx {
		height: 100px;
	}

	.fkxx .fkleft {
		list-style: none;
		background: #F9FAFC;
		float: left;
		width: 250px;
		margin-top: 30px;
		height: 223px;
		margin-left: -112px;
	}

	.fkleft li {
		border: 1px solid #E4E4E4;
		height: 30px;
		line-height: 30px;
		text-align: right;
		padding-right: 30px;
	}

	.fkxx .fkright {
		list-style: none;
		float: left;
		width: 800px;
		margin-top: 30px;
		height: 223px;
	}

	.fkright li {
		border: 1px solid #E4E4E4;
		height: 30px;
		line-height: 30px;
		text-align: left;
		padding-left: 30px;
	}

	.dzxx .fkleft1 {
		list-style: none;
		background: #F9FAFC;
		float: left;
		width: 250px;
		margin-top: 30px;
		height: 113px;
		margin-left: -85px;
	}

	.fkleft1 li {
		border: 1px solid #E4E4E4;
		height: 35px;
		line-height: 35px;
		text-align: right;
		padding-right: 30px;
	}

	.dzxx .fkright1 {
		list-style: none;
		float: left;
		width: 800px;
		margin-top: 30px;
		height: 113px;
	}

	.fkright1 li {
		border: 1px solid #E4E4E4;
		height: 35px;
		line-height: 35px;
		text-align: left;
		padding-left: 30px;
	}

	.dzspan {
		color: #9A9A9A;
	}

	.bton {
		margin-top: 170px;
	}

	.bton input {
		width: 105px;
		height: 35px;
		margin-left: 50px;
		border-radius: 5px 5px 5px 5px;
	}

	.bton input:nth-of-type(1) {
		color: white;
		background: black;
	}

	.bton input:nth-of-type(2) {
		color: white;
		background: #676767;
	}

	.cell .el-button--text {
		color: #676767;
	}
</style>
