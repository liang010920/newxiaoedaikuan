<template>
	<!-- 首页 -->
	<el-container>
		<el-main>
			<div class="body">
				<div style="height: 100px;">
					<h3>Dashboard</h3>
					<p class="bor">{{this.sday}}</p>
				</div>
				<div align="left">
					<ul class="shouye1">
						<li>
							<div align="center"><img src="../../../../public/img/sy1.png"></div>
							<div align="center">借款申请总数</div>
							<div align="center">200</div>
						</li>
						<li>
							<div align="center"><img src="../../../../public/img/sy1.png"></div>
							<div align="center">放款总数</div>
							<div align="center">￥5000.00</div>
						</li>
						<li>
							<div align="center"><img src="../../../../public/img/sy1.png"></div>
							<div align="center">还款总数</div>
							<div align="center">￥5000.00</div>
						</li>
						<li>
							<div align="center"><img src="../../../../public/img/sy1.png"></div>
							<div align="center">近7天放款总额</div>
							<div align="center">￥5000.00</div>
						</li>
					</ul>
				</div>
				<div class="tab">
					<el-table :data="tableData" style="width: 95%;background: #eaeaea;">
						<el-table-column prop="one" width="180" label="待处理事务">
						</el-table-column>
						<el-table-column prop="two" width="180">
						</el-table-column>
						<el-table-column prop="three" width="180">
						</el-table-column>
						<el-table-column prop="four">
						</el-table-column>
					</el-table>
				</div>
				<div class="ru">
					<p class="tit">
						运营快捷入口
					</p>
					<ul>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/AppTuiSongInfo">App推送信息</router-link></p>
						</li>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/AppGuanLi">App管理</router-link></p>
						</li>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/DuanXin">短信信息</router-link></p>
						</li>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/GuangGao">广告</router-link></p>
						</li>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/wenZhangGuanLi">文章管理</router-link></p>
						</li>
						<li><img src="../../../../public/img/sy1.png" alt="">
							<p><router-link to="/index/YunYing/AppTuiSongInfo">App推送信息</router-link></p>
						</li>
					</ul>
				</div>
				<div class="vis">
					<div class="one">
						<p>用户访问</p>
						<ul>
							<li><span>100</span>
								<br>今日访问</li>
							<li><span>400</span>
								<br>昨日访问</li>
							<li><span>1800</span>
								<br>本周访问</li>
							<li><span>15000</span>
								<br>本月访问</li>
						</ul>
					</div>
					<div class="two">
						<p>用户总览</p>
						<ul>
							<li><span>100</span>
								<br>今日访问</li>
							<li><span>400</span>
								<br>昨日访问</li>
							<li><span>1800</span>
								<br>本周访问</li>
							<li><span>15000</span>
								<br>本月访问</li>
						</ul>
					</div>
				</div>
				<div class="pic" style="margin-top: 13.125rem;">
					<p>借款统计</p>
					<template>
						<img src="../../../../public/img/sy2.png" alt="">
						<ve-line :data="chartData" :settings="chartSettings"></ve-line>
					</template>
				</div>
				<div class="pic">
					<p>放款统计</p>
					<template>
						<img src="../../../../public/img/sy2.png" alt="">
						<ve-line :data="chartData2" :settings="chartSettings2"></ve-line>
					</template>
				</div>
				<div class="more">
					<p>操作记录</p>
					<p>'admin'在[产品工厂]-[贷款产品配置]中进行了添加产品设置</p>
					<p>'admin'在[借前管理]-[贷款申请管理]中进行了添加产品设置</p>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
		data() {
			this.chartSettings = {
				stack: {
					'用户': ['访问用户', '下单用户']
				},
				area: true,
			}
			this.chartSettings2 = {
				stack: {
					'用户': ['访问用户', '下单用户']
				},
				area: true,
			}
			return {
				sday: '',

				chartData: {
					columns: ['日期', '本日', '本周', '本月'],
					rows: [{
							'日期': '07-01周六',
							'本日': 1393,
							'本周': 1093,
							'本月': 0.32
						},
						{
							'日期': '07-02周日',
							'本日': 3530,
							'本周': 3230,
							'本月': 0.26
						},
						{
							'日期': '07-03周一',
							'本日': 2923,
							'本周': 2623,
							'本月': 0.76
						},
						{
							'日期': '07-04周二',
							'本日': 1723,
							'本周': 1423,
							'本月': 0.49
						},
						{
							'日期': '07-05周三',
							'本日': 3792,
							'本周': 3492,
							'本月': 0.323
						},
						{
							'日期': '07-06周四',
							'本日': 4593,
							'本周': 4293,
							'本月': 0.78
						}
					]
				},
				chartData2: {
					columns: ['日期', '本日', '本周', '本月'],
					rows: [{
							'日期': '07-01周六',
							'本日': 1593,
							'本周': 1093,
							'本月': 0.32
						},
						{
							'日期': '07-02周日',
							'本日': 2530,
							'本周': 2530,
							'本月': 0.26
						},
						{
							'日期': '07-03周一',
							'本日': 3523,
							'本周': 3023,
							'本月': 0.76
						},
						{
							'日期': '07-04周二',
							'本日': 2023,
							'本周': 1423,
							'本月': 0.49
						},
						{
							'日期': '07-05周三',
							'本日': 1592,
							'本周': 3092,
							'本月': 0.323
						},
						{
							'日期': '07-06周四',
							'本日': 3093,
							'本周': 2093,
							'本月': 0.78
						}
					]
				},
				tableData: [{
					one: '待处理贷款申请',
					two: '(10)',
					three: '待处理贷款申请',
					four: '(10)'
				}, {
					one: '待处理贷款申请',
					two: '(10)',
					three: '待处理贷款申请',
					four: '(10)'
				}, {
					one: '待处理贷款申请',
					two: '(10)',
					three: '待处理贷款申请',
					four: '(10)'
				}]
			}
		},
		
		mounted(){
			this.timeId = setInterval(() => {
				this.sday = dayjs().format('YYYY-MM-DD HH:mm:ss');
			}, 1000);
		},

	}
</script>

<style scoped>
	.shouye1>li {
		display: inline-block;
		background: #fff;
		border: 1px solid #E4E4E4;
		padding: 20px 66px;
		margin: 20px;
	}

	.shouye1>li>img {}

	h3 {
		color: black;
		float: left;
		margin-left: 50px;
		display: inline;
	}

	.dasXia li {
		margin-left: 86px;
		width: 186px;
		padding: 0px 8px;
		line-height: 100px;
		border: 1px solid #dedede;
		height: 100px;
		display: inline-block;
		background: white;
	}

	.dasXia li img {
		padding-top: 34px;
		margin-right: 17px;
	}


	.dasXia li .span1 {
		font-size: 18px;
		color: #979797;
		vertical-align: top;
	}

	.dasXia li .span2 {
		margin-left: 81px;
		width: 75px;
		margin-top: -95px;
		height: 30px;
		display: block;
	}

	.pic img {
		width: 1091px;
	}

	.tab {
		margin: 1.25rem 0;
	}

	.body {
		background-color: #f7f7f7;
		width: 100%;
		float: left;
		line-height: 3.125rem;
	}

	.bor {
		color: black;
		border: 1px solid #ccc;
		width: 21.625rem;
		text-align: center;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
		background-color: white;
		float: right;
		margin-top: 0.8125rem;
		margin-right: 4.625rem;
	}

	.ru {
		width: 95%;
		border: 1px solid #eaeaea;
		background-color: white;
		margin: 1.25rem 0;
	}

	.tit {
		width: 97%;
		height: 2.55rem;
		text-align: left;
		border-bottom: 1px solid #eaeaea;
		padding-left: 40px;
		background-color: #f3f3f3;
		text-indent: 0.625rem;
		line-height: 2.55rem;
		color: black;
		font-weight: bold;
	}

	.ru ul li {
		display: inline-block;
		margin: 2.125rem;
		margin-left: 57px;
	}

	.ru ul li p {
		margin-top: -1.25rem;
	}

	.vis {
		width: 95%;
	}

	.vis div {
		background-color: white;
	}

	.vis div:first-child {
		float: left;
		width: 48%;
		border: 1px solid #eaeaea;
	}

	.vis div:last-child {
		float: right;
		width: 48%;
		border: 1px solid #eaeaea;
	}

	.vis div p {
		background-color: #F3F3F3;
		height: 2.55rem;
		line-height: 2.55rem;
		text-align: left;
		padding-left: 40px;
		border-bottom: 1px solid #eaeaea;
		text-indent: 0.625rem;
		color: black;
		font-weight: bold;
	}

	.vis ul {
		text-align: center;
	}

	.vis ul li {
		display: inline-block;
		margin: 0 1.875rem;
	}

	.vis ul li span {
		font-size: 1.5625rem;
		display: inline-block;
		margin-top: 1.25rem;
	}

	.pic {
		width: 95%;
		clear: both;
		border: 1px solid #eaeaea;
		margin: 1.25rem 0;
		background-color: white;
	}

	.pic p {
		background-color: #F3F3F3;
		border-bottom: 1px solid #eaeaea;
		height: 2.55rem;
		line-height: 2.55rem;
		text-indent: 0.625rem;
		text-align: left;
		padding-left: 40px;
		color: black;
		font-weight: bold;
	}

	.more {
		width: 95%;
		height: 10.75rem;
		background-color: white;
		border: 1px solid #eaeaea;
	}

	.more p:first-child {
		background-color: #F3F3F3;
		text-indent: 0.625rem;
		font-weight: bold;
	}

	.more p {
		background-color: white;
		text-align: left;
		padding-left: 40px;
		border-bottom: 1px solid #eaeaea;
		height: 2.55rem;
		line-height: 2.55rem;
		text-indent: 2.5rem;
		color: black;
	}
</style>
