<!-- 贷后管理-利率变更修改 -->
<template>
	<el-container>
		<el-main>
			<div class="jiekuan">
				贷后预警信息
				<span class="fanhui" style="float: right;border: 1px solid #e4e4e4; padding: 2px 7px;">
					<router-link to="/index/YuJing" tag="span">
						<i class="el-icon-arrow-left"></i> 返回
					</router-link>
				</span>
				<div class="clear"></div>
			</div>
			<div class="main">
				<el-row>
					<el-col :span="4">
						<div align="right">贷款编号：</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<select name="" id="" style="text-align: center;height: 1.58rem;font-size: 0.8rem;flex: 3;" disabled="disabled">
								<option>100001</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" style="padding: 1px;"></div>
					</el-col>
					<el-col :span="20">
						<div align="left" class="bian22">
							<span>贷款人姓名:张某某</span>
							<span>贷款期限:24期</span>
							<span>贷款金额:48000</span>
							<span>贷款余额:36500</span>
							<!-- <li>还款方式:等额本息</li> -->
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right" style="padding: 1px;"></div>
					</el-col>
					<el-col :span="20">
						<div align="left" class="bian22">
							<span>还款方式:等额本息</span>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">借款利率：</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text" value="13.0"> %
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">调整后利率：</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<input type="text" value="13.0"> %
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">变更类型：</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<select name="" id="" style="text-align: center;height: 1.58rem;font-size: 0.8rem;flex: 3;" disabled="disabled">
								<option>请选择</option>
							</select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div align="right">变更描述：</div>
					</el-col>
					<el-col :span="20">
						<div align="left">
							<textarea name="" id="" cols="40" rows="10"></textarea>
						</div>
					</el-col>
				</el-row>
			
				<p class="main-p" style="margin-top: 3rem;margin-left: 100px; ">
					<span></span>
					<span></span>
					<input type="button" value="提交" style="padding:3px 7px;color: white;background-color:black;border: none;">
					<span></span>
					<router-link tag="div" align="center" to="/index/LiLvBianGeng">
						<input type="button" value="返回" style="padding:3px 7px;color: white;background-color:#666;border: none;">
					</router-link>
					<span></span>
				</p>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'YuJingCha',
		data() {
			return {
				value: true,
				form: {
					desc: ''
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.bian22>span{
		margin-right: 10px;
	}
	.zi {

		margin-left: 118px;
		margin-top: -6px;
	}

	.main>div{
		margin-bottom: 15px;
	}
	

	.main-p {
		width: 21.875rem;
		margin-top: 0.625rem;
		display: flex;
	}

	.main-p-two {
		width: 21.875rem;
		margin-top: 1.25rem;
		display: flex;
	}

	.main-p-two span:first-of-type {
		margin-right: 0.625rem;
		display: inline-block;
		flex: 2;
		font-size: 0.8rem;
	}

	.main-p-two span:last-of-type {
		font-size: 0.8rem;
		flex: 4;
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
		flex: 3;
	}

	.main-p span:last-of-type {
		text-align: center;
		display: inline-block;
		flex: 1;
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

	.el-form-item__label {
		text-align: right;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #606266;
		line-height: 40px;
		padding: 0 12px 0 0;
		box-sizing: border-box;
		margin-left: 27px;
	}
</style>
