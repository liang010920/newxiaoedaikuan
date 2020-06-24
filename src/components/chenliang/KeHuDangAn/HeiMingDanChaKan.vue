<!-- 客户档案-黑名单-查看 -->
<template>
	<el-container>
		<el-main style="background: #F9F9F9;padding: 0 !important;">
			<div align="left">
				<div class="border9">
					<span class="userXiangQing">用户详情</span>
					<span class="loginRiZhi">登录日志</span>
					<router-link to="/index/HeiMingDan" tag="span">
						<span class="fanHui3"><i class="el-icon-arrow-left"></i> 返回</span>
					</router-link>
					<div class="clear"></div>
				</div>
				<div class="user2" align="left">
					<el-row width="10%">
						<el-col :span="6">
							<div class="userBC" align="center">
								<div class="usertou"><i class="el-icon-user"></i></div>
								<div>18000000000</div>
								<div style="margin: 15px 0;">信用等级：<span class="aablue">AA</span></div>
								<div>信用分：90</div>
							</div>
						</el-col>
						<el-col :span="3">
							<ul align="right" class="jieshao2">
								<li>用户ID</li>
								<li>姓名</li>
								<li>性别</li>
								<li>年龄</li>
								<li>籍贯</li>
								<li>个人年收入</li>
							</ul>
						</el-col>
						<el-col :span="6">
							<ul align="left" class="jieshao3">
								<li class="padding13">844746686</li>
								<li>陈梁</li>
								<li>男</li>
								<li class="padding13">19</li>
								<li>湖北省武汉市汉阳区</li>
								<li>100万</li>
							</ul>
						</el-col>
						<el-col :span="3">
							<ul align="right" class="jieshao2">
								<li>注册时间</li>
								<li>身份证号</li>
								<li>教育程度</li>
								<li>生日</li>
								<li>现居住地址</li>
								<li>用户来源</li>
							</ul>
						</el-col>
						<el-col :span="6">
							<ul align="left" class="jieshao3">
								<li class="padding13">2018-01-01 14:04:25</li>
								<li class="padding13">511888888888888</li>
								<li>专科</li>
								<li>1984年6月22日</li>
								<li>深圳市宝安区某某街道某某社区某某号</li>
								<li>微信</li>
							</ul>
						</el-col>
					</el-row>
				</div>
				<div class="info3">
					<div align="left">
						<i class="el-icon-s-flag"></i> 统计信息
						<div>
							<el-main class="info22">
								<el-table :data="tableData">
									<el-table-column prop="tongji1" label="贷款金额">
									</el-table-column>
									<el-table-column prop="tongji2" label="贷款笔数">
									</el-table-column>
									<el-table-column prop="tongji3" label="待还金额">
									</el-table-column>
									<el-table-column prop="tongji4" label="最高贷款金额">
									</el-table-column>
									<el-table-column prop="tongji5" label="逾期次数">
									</el-table-column>
									<el-table-column prop="tongji6" label="逾期金额">
									</el-table-column>
									<el-table-column prop="tongji7" label="按时还款率">
									</el-table-column>
									<el-table-column prop="tongji8" label="登录次数">
									</el-table-column>
								</el-table>
							</el-main>
						</div>
					</div>
				</div>
				<div class="info3">
					<div align="left">
						<i class="el-icon-s-flag"></i> 银行卡信息
						<div>
							<el-main class="info22">
								<el-table :data="tableData2">
									<el-table-column prop="yinhang1" label="账户类型">
									</el-table-column>
									<el-table-column prop="yinhang2" label="账户户名">
									</el-table-column>
									<el-table-column prop="yinhang3" label="银行开户行">
									</el-table-column>
									<el-table-column prop="yinhang4" label="银行开户的">
									</el-table-column>
									<el-table-column prop="yinhang5" label="支行名称">
									</el-table-column>
									<el-table-column prop="yinhang6" label="银行账号">
									</el-table-column>
									<el-table-column prop="yinhang7" label="确认银行账号">
									</el-table-column>
									<el-table-column label="使用状态">
										<template>
											<el-switch v-model="value" active-color="#000" inactive-color="#ccc">
											</el-switch>
										</template>
									</el-table-column>
								</el-table>
							</el-main>
						</div>
					</div>
				</div>
				<div class="info3">
					<div align="left">
						<i class="el-icon-s-flag"></i> 贷款记录
						<div>
							<el-main class="info22">
								<el-table :data="tableData3">
									<el-table-column prop="daikuan1" label="借款编号">
									</el-table-column>
									<el-table-column prop="daikuan2" label="申请日期">
									</el-table-column>
									<el-table-column prop="daikuan3" label="用户账号">
									</el-table-column>
									<el-table-column prop="daikuan4" label="申请额度">
									</el-table-column>
									<el-table-column prop="daikuan5" label="借款产品">
									</el-table-column>
									<el-table-column prop="daikuan6" label="期限" width="60">
									</el-table-column>
									<el-table-column prop="daikuan7" label="审批金额">
									</el-table-column>
									<el-table-column prop="daikuan8" label="借款来源" width="70">
									</el-table-column>
									<el-table-column prop="daikuan9" label="借款状态" width="70">
									</el-table-column>
									<el-table-column prop="" label="操作" width="80">
										<template slot-scope="scope">
											<router-link to="/index/HaiKuanGuanLi" tag="span">
												{{scope.row.daikuan10}}
											</router-link>
										</template>
									</el-table-column>
								</el-table>
							</el-main>
						</div>
					</div>
				</div>
				<div align="center" style="margin: 25px 0;">
					Copyright © 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			const item = [{
				tongji1: '￥200000.00',
				tongji2: '10',
				tongji3: '￥25000.00',
				tongji4: '￥80000.00',
				tongji5: '0',
				tongji6: '0.00',
				tongji7: '100%',
				tongji8: '10',
			}];
			const item2 = [{
					yinhang1: '收款银行',
					yinhang2: '小瀦',
					yinhang3: '招商银行',
					yinhang4: '广东省深圳市南山区',
					yinhang5: '科苑路支行',
					yinhang6: '6225555555555555',
					yinhang7: '6225555555555555',
				},
				{
					yinhang1: '还款银行',
					yinhang2: '小瀦',
					yinhang3: '中国银行',
					yinhang4: '广东省深圳市南山区',
					yinhang5: '科苑路支行',
					yinhang6: '6225555555555555',
					yinhang7: '6225555555555555',
				},
				{
					yinhang1: '收款银行',
					yinhang2: '小瀦',
					yinhang3: '广东华兴银行',
					yinhang4: '广东省深圳市南山区',
					yinhang5: '科苑路支行',
					yinhang6: '6225555555555555',
					yinhang7: '6225555555555555',
				},
				{
					yinhang1: '还款银行',
					yinhang2: '小瀦',
					yinhang3: '包商银行',
					yinhang4: '广东省深圳市南山区',
					yinhang5: '科苑路支行',
					yinhang6: '6225555555555555',
					yinhang7: '6225555555555555',
				},
				{
					yinhang1: '收款银行',
					yinhang2: '小瀦',
					yinhang3: '招商银行',
					yinhang4: '广东省深圳市南山区',
					yinhang5: '科苑路支行',
					yinhang6: '6225555555555555',
					yinhang7: '6225555555555555',
				},
			];
			const item3 = {
					daikuan1: '201807196398345',
					daikuan2: '2018-07-19 14:48:38',
					daikuan3: '18000000000',
					daikuan4: '￥50000.00',
					daikuan5: '薪悦贷',
					daikuan6: '12',
					daikuan7: '￥50000.00',
					daikuan8: '微信订单',
					daikuan9: '还款中',
					daikuan10: '查看详情',
				};
				return {
				tableData: item,
				tableData2: item2,
				tableData3: Array(20).fill(item3),
				value:true
			}
		}
	};
</script>

<style>
	.info22{
		padding: 0 !important;
		border: 1px solid #e4e4e4;
		margin-top: 20px;
	}
	.info22 .cell{
		font-size: 12px !important;
	}

	.info22 th {
		border-right: 1px solid #E4E4E4 !important;
	}

	.info22 td {
		border-right: 1px solid #E4E4E4 !important;
	}

	.cell {
		text-align: center;
	}

	.info3 {
		padding: 25px 15px;
		border-bottom: 1px solid #E4E4E4;
		border-top: 1px solid #E4E4E4;
		background: #fff;

	}

	.padding13 {
		padding-bottom: 13px !important;
	}

	.jieshao3 {
		background: #fff;
		font-size: 14px;
		border-right: 1px solid #E4E4E4;
	}

	.jieshao3>li {
		padding: 10px;
		border-bottom: 1px solid #E4E4E4;
	}

	.jieshao3>li:last-child {
		border-bottom: 0px solid #E4E4E4;
	}

	.jieshao2 {
		background: #F9FAFC;
		font-size: 14px;
		border-right: 1px solid #E4E4E4;
	}

	.jieshao2>li {
		padding: 10px;
		border-bottom: 1px solid #E4E4E4;
	}

	.jieshao2>li:last-child {
		border-bottom: 0px solid #E4E4E4;
	}

	.aablue {
		background: #3399FF;
		border-radius: 50%;
		padding: 5px;
		color: #fff;
	}

	.usertou {
		background: #ebebeb;
		border-radius: 50%;
		padding: 15px;
		font-size: 52px;
		width: 26%;
		color: #fff;
		margin: 15px 0;
	}

	.userBC {
		border-right: 1px solid #E4E4E4;
		background: #F9FAFC;
		padding: 15px;
	}

	.user2 {
		margin: 25px 0;
		border-bottom: 1px solid #E4E4E4;
		border-top: 1px solid #E4E4E4;
	}

	.clear {
		clear: both;
	}

	.border9 {
		border-bottom: 1px solid #E4E4E4;
		background: #fff;
		padding: 15px;
	}

	.userXiangQing {
		background: #666;
		padding: 5px 10px;
		color: #fff;
	}

	.loginRiZhi {
		padding: 5px 10px;
		border: 1px solid #E4E4E4;
		margin-left: 15px;
	}

	.fanHui3 {
		float: right;
		padding: 3px 7px;
		border: 1px solid #E4E4E4;
	}
</style>
