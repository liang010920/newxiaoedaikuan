<template>
	<el-container>
		<template>
			<el-main>
				<div class="jiekuan">
					贷后预警信息
					<span class="fanhui">
						<router-link to="/index/DaiHouGuanLi/YuJing" tag="span">
							<i class="el-icon-arrow-left"></i> 返回
						</router-link>
					</span>
					<div class="clear"></div>
				</div>
				<div class="jianxi"></div>
				<div class="yujinginfo">
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">预警名称：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<input type="text">
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">贷款类型：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<input type="text">
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">贷款产品：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<input type="text">
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">贷款五级分类：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<select>
									<option value="选择贷款五级分类">选择贷款五级分类</option>
									<option value="选择贷款五级分类">选择贷款五级分类</option>
									<option value="选择贷款五级分类">选择贷款五级分类</option>
								</select>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">预警阶段：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<el-badge :value="1" class="item">
									<input type="text">
								</el-badge>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content hanggao" align="right">提前预警天数：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<input type="text">天
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content" align="right">预警周期：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<label><input type="radio" name="week">一次</label>
								<label><input type="radio" name="week">每天一次</label>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content" align="right">预警发送时间：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<label><input type="radio" name="fasongdate">10:00</label>
								<label><input type="radio" name="fasongdate">14:00</label>
								<label><input type="radio" name="fasongdate">18:00</label>
								<label><input type="radio" name="fasongdate">22:00</label>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content" align="right">预警发送时间：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<label><input type="radio" name="fangshi">短信</label>
								<label><input type="radio" name="fangshi">邮件</label>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="zhan"></div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<input type="text">
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="grid-content" align="right">是否启用：</div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
								</el-switch>
							</div>
						</el-col>
					</el-row>
					<el-row width="100%">
						<el-col :span="3">
							<div class="zhan"></div>
						</el-col>
						<el-col :span="21">
							<div class="grid-content" align="left">
								<router-link to="/index/DaiHouGuanLi/YuJing" tag="span">
									<el-button type="info">
										<i class="el-icon-arrow-left"></i> 返回
									</el-button>
								</router-link>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-main>
		</template>
	</el-container>
</template>

<script>
	export default {
		name: 'Select',
		data() {
			return {
				value: true,
			}
		},
	}
</script>

<style>
	.yujinginfo div div div label {
		margin: 15px;
	}

	.yujinginfo div div div select {
		color: #ccc;
		border: 1px solid #e4e4e4;
		padding: 10px 85px 10px 10px;
		border-radius: 2px;
	}

	.hanggao {
		line-height: 40px;
	}

	.yujinginfo div div div input[type=text] {
		border: 1px solid #e4e4e4;
		background: #F9FAFC;
		border-radius: 2px;
		padding: 10px 15px;
	}

	.yujinginfo>div {
		margin: 15px 0;
	}

	.zhan {
		padding: 1px;
	}

	.fanhui {
		float: right;
		border: 1px solid #E4E4E4;
		padding: 4px 15px;
	}

	.clear {
		clear: both;
	}

	.jianxi {
		background: #f9f9f9;
		padding: 5px 0;
	}

	.item {
		margin-right: 40px;
	}
</style>
