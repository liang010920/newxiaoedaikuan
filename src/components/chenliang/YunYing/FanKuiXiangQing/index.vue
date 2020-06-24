<!-- 运营管理-用户反馈-反馈详情 -->
<template>
	<div class="xiangqing">
		<div align="left">
			<i class="el-icon-s-home"></i> 首页/运营管理/用户反馈
			<router-link to="/index/YunYing/YongHuYiJian" tag="span">
				<span class="fanhui2">
					<i class="el-icon-back"></i> 返回
				</span>
			</router-link>
		</div>
		<div align="left" class="neirong5">
			<div align="left" class="fkxq">
				反馈详情
			</div>
			<div class="xiangqing3">
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							编号
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							100001
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							反馈问题类型
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							功能异常
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							反馈人
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							小熊
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							反馈时间
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							2018-03-22 11:05
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							问题描述
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							为什么借款申请审核不通过，是什么原因？
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							问题图片
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left" class="tupian">
							<span><img src="../../../../../public/images/2.png" alt=""></span>
							<span><img src="../../../../../public/images/2.png" alt=""></span>
							<span><img src="../../../../../public/images/2.png" alt=""></span>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							处理状态
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							未处理
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div align="left" class="neirong5">
			<div class="xiangqing3">
				<el-row>
					<el-col :span="3">
						<div align="right" class="border7">
							处理备注
						</div>
					</el-col>
					<el-col :span="21">
						<div align="left">
							<input type="text">
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div style="margin-top: 30px;" align="center">Copyright &copy; 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.</div>
	</div>
</template>

<script>
</script>

<style>
	.tupian>span {
		padding: 0 20px;
		margin-right: 10px;
	}

	.border6 {
		margin-top: 30px;
		border-bottom: 1px solid #E4E4E4;
	}

	.xiangqing {
		background: #F9F9F9;
		padding: 10px 10%;
	}

	.fanhui2 {
		float: right;
		padding: 3px 7px;
		border: 1px solid #e4e4e4;
	}

	.neirong5 {
		background: #fff;
		margin-top: 20px;
		border: 1px solid #e4e4e4;
		color: #999;
	}

	.fkxq {
		background: #F3F3F3;
		padding: 10px 20px;
		font-size: 14px;
	}

	.xiangqing2 {
		/* padding: 20px; */
	}

	.xiangqing3 {
		border: 1px solid #e4e4e4;
	}

	.xiangqing3>div {
		/* padding: 15px; */
		border-bottom: 1px solid #e4e4e4;
	}

	.xiangqing>div .border7 {
		border-right: 1px solid #e4e4e4;
	}

	.xiangqing3>div>div>div {
		padding: 20px;
		font-size: 14px;
	}

	.xiangqing3>div>div:first-child>div {
		background: #F9FAFC;
	}
</style>
