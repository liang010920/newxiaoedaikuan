<!-- 系统分析-用户统计 -->
<template>
	<el-container>
		<el-main style="background:#F9F9F9;padding: 0 !important;">
			<div class="jiekuan" style="background: #F9F9F9;">
				<i class="el-icon-s-home"></i>首页/数据分析/运营分析/用户统计
				<span class="shuaxin2"><i class="el-icon-refresh"></i> 刷新</span>
			</div>
			<div class="lieBiao77" align="left">
				<span class="font77">新增注册用户</span>
				<span class="floatR yonghutongji">
					<span>导出数据</span>
					<el-badge :value="1" class="item" type="warning">
						<select name="" id="">
							<option value="">按月统计</option>
						</select>
					</el-badge>
					<el-form ref="form" style="margin-left:15px;" :model="form" label-width="80px">
						<el-form-item style="margin:0 !important;">
							<el-col :span="11">
								<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>
					</el-form>
				</span>
				<div class="clear"></div>
			</div>
			<div class="tongji1">
				<img src="../../../../../public/images/tongji1.png" alt="">
				<el-row>
					<el-col :span="11">
						<div align="right">
							<span class="yhborder"></span>
						</div>
					</el-col>
					<el-col :span="11">
						<div align="left" style="margin-top: 6px;">
							<span>新用户增长</span>
							<div>11852人</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="lieBiao77" align="left">
				<span class="font77">绑卡与实名认证用户数</span>
				<span class="floatR yonghutongji">
					<span>导出数据</span>
					<el-badge :value="1" class="item" type="warning">
						<select name="" id="">
							<option value="">按月统计</option>
						</select>
					</el-badge>
					<el-form ref="form" style="margin-left:15px;" :model="form" label-width="80px">
						<el-form-item style="margin:0 !important;">
							<el-col :span="11">
								<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>
					</el-form>
				</span>
				<div class="clear"></div>
			</div>
			<div class="tongji1">
				<img src="../../../../../public/images/tongji2.png" alt="">
				<el-row>
					<el-col :span="11">
						<div align="right">
							<el-row>
								<el-col :span="11">
									<div align="right">
										<span class="yhborder2"></span>
									</div>
								</el-col>
								<el-col :span="11">
									<div align="left" style="margin-top: 6px;">
										<span>实名认证用户数</span>
										<div>11852人</div>
									</div>
								</el-col>
							</el-row>
						</div>
					</el-col>
					<el-col :span="11">
						<div align="left">
							<el-row>
								<el-col :span="11">
									<div align="right">
										<span class="yhborder3"></span>
									</div>
								</el-col>
								<el-col :span="11">
									<div align="left" style="margin-top: 6px;">
										<span>绑卡用户数</span>
										<div>1852人</div>
									</div>
								</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="lieBiao77" align="left">
				<span class="font77">新增借款用户数</span>
				<span class="floatR yonghutongji">
					<span>导出数据</span>
					<el-badge :value="1" class="item" type="warning">
						<select name="" id="">
							<option value="">按月统计</option>
						</select>
					</el-badge>
					<el-form ref="form" style="margin-left:15px;" :model="form" label-width="80px">
						<el-form-item style="margin:0 !important;">
							<el-col :span="11">
								<el-date-picker class="riqi" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>
					</el-form>
				</span>
				<div class="clear"></div>
			</div>
			<div class="tongji1">
				<img src="../../../../../public/images/tongji3.png" alt="">
				<el-row>
					<el-col :span="11">
						<div align="right">
							<span class="yhborder"></span>
						</div>
					</el-col>
					<el-col :span="11">
						<div align="left" style="margin-top: 6px;">
							<span>借款成功的触发用户数</span>
							<div>11852人</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<template>
				<div style="margin:3%;">
					Copyright &copy; 2018 深圳市xxxx金融科技有限公司，All Rights Reserved
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					data1: '',

				},
			}
		},
	}
</script>

<style>
	.yhborder{
		margin-right: 10px;
		padding: 0 20px ;
		border-bottom: 2px solid #1ABC9C;
	}
	.yhborder2{
		margin-right: 10px;
		padding: 0 20px ;
		border-bottom: 2px solid #39f;
	}
	.yhborder3{
		margin-right: 10px;
		padding: 0 20px ;
		border-bottom: 2px solid #FF7978;
	}
	.tongji1{
		padding: 10px 0;
		background: #fff;
		border-bottom: 1px solid #E4E4E4;
		margin-bottom: 50px;
	}
	.lieBiao77 {
		background: #f3f3f3;
		padding: 10px 0;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
		
	}
	.yonghutongji *{
		display: inline-block;
		vertical-align: top;
	}
	.yonghutongji select{
		border: 1px solid #E4E4E4;
		padding:7px;
		margin-left:15px;
	}
	.yonghutongji>span{
		border: 1px solid #E4E4E4;
		padding: 5px 7px;
		background: #fff;
	}
	.font77 {
		line-height: 37px;
		margin-left: 10px;
		font-size: 12px;
	}

	.shuaxin2 {
		float: right;
		border: 1px solid #E4E4E4;
		background: #fff;
		padding: 3px 7px;
	}
</style>
