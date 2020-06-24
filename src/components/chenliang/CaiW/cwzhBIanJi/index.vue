<!-- 财务管理，编辑页面 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9;">
			<div style="padding: 20px; background: #fff;">
				<div class="floatL">
					<h4>录入银行流水</h4>
				</div>
				<div class="floatR2" style="float: right; border: 1px solid #E4E4E4;padding: 3px 7px;">
						<span>
							<router-link to="/cw/cwyhls" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<div class="zhbj" style="margin-top: 20px;padding-top: 15px; background: #fff;">
				<p><span>账户名称：</span>
					<input placeholder="请输入对公账户名称" style="height: 34px; width: 50%;" type="text" />
				</p>
				<p><span>账号：</span>
					<input placeholder="请输入银行账号" style="height: 34px; width: 50%;" type="text" />
				</p>
				<p><span>开户银行：</span>
					<select>
						<option value="放款方式">请选择银行</option>
						<option value="放款方式1">请输入摘要1</option>
					</select>
				</p>
				<p><span>开户行名称：</span>
					<input placeholder="请输入开户行名称" style="height: 34px; width: 50%;" type="text" />
				</p>
				<p><span>币种：</span>
					<select>
						<option value="放款方式">人民币</option>
						<option value="放款方式1">请输入摘要1</option>
					</select>
				</p>
				<p><span>开户银行：</span>
					<select>
						<option value="放款方式">基本账户</option>
						<option value="放款方式1">请输入摘要1</option>
					</select>
				</p>
				<p><span>是否启用：</span>
					<el-switch v-model="value1"></el-switch>
				</p>
				<button>提交</button>
				<button>返回</button>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cwzhbian',
		data() {
			return {
				value1: true
			};
		}
	}
</script>

<style scoped>
	.hei4{
		background: #000;
		width: 323px;
		height:38px;
		position: absolute !important;
		top:0;
		left:0;
	}
	.zhbj {
		float: left;
		width: 1102px;
	}

	.zhbj p {
		margin-top: 20px;
	}

	.zhbj p span {
		width: 150px;
		display: inline-block;
	}

	.zhbj select {
		width: 50%;
		height: 34px;
	}

	.zhbj button {
		width: 150px;
		height: 37px;
		margin-top: 50px;
		margin-left: 150px;
		border-radius: 5px 5px;
	}

	.zhbj button:nth-of-type(1) {
		color: white;
		background: black;
	}

	.zhbj button:nth-of-type(2) {
		color: white;
		background: #9A9A9A;
	}
</style>
