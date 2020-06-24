<!-- 系统权限-客户管理-查看记录 -->
<template>
	<el-container>
		<el-main>
			<div align="left">
				<i class="el-icon-s-home"></i>首页/权限/客服管理/查看记录
				<span class="f5"><i class="el-icon-arrow-left"></i>
					<router-link tag="span" to="/index/QuanXian/KeFu"> 返回</router-link>
				</span>
			</div>
			<div class="clear"></div>
			<div align="left" class="bgColor7">
				当前客服：小熊
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<template>
				<div>
					<el-row type="flex" class="row-bg jiedai">
						<el-col :span="6">
							<div class="grid-content ">历史接待次数</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content ">历史接待人数</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">今日接待次数</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">今日接待人数</div>
						</el-col>
					</el-row>
					<el-row type="flex" class="row-bg jiedai2">
						<el-col :span="6">
							<div class="grid-content ">100</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content ">100</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">100</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">100</div>
						</el-col>
					</el-row>
				</div>
			</template>
			<template>
				<div align="left">
					<el-row style="margin-top: 10px;">
						<el-col :span="12">
							<div class="bg-purple">
								<el-button type="info">今天</el-button>
								<el-button type="info">最近一周</el-button>
								<el-button type="info">最近一月</el-button>
								<el-button type="info">全部</el-button>
							</div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content bg-purple-light"></div>
						</el-col>
					</el-row>
					<div class="border">
						<el-row>
							<el-col :span="12">
								<div class="bg-purple">
									<ul class="userInfo">
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
										<li>
											<span><img src="../../../../../public/images/xiaoxiong.png" align="center"></span>
											<div class="xiong">小熊</div>
											<div>开始时间：2018-08-10 11:40:03 结束时间：2018-08-10 11:50:55</div>
										</li>
									</ul>
									<div class="bottom" align="right">
										<img src="../../../../../public/images/left.png">
										<i class="el-icon-caret-left font6"></i>
										<i class="el-icon-caret-right font6"></i>
										<img src="../../../../../public/images/right.png">
									</div>
								</div>
							</el-col>
							<el-col :span="12">
								<div class="bg-purple-light" align="center">
									<div class="shichang">2018-08-10 10:47:43</div>
									<ul class="liaotian">
										<li>
											<div>小优 2018-08-10 10:47:42</div>
											<div>您好！小熊很高兴为您服务~活动期间咨询人数较多，请您耐心等候！</div>
										</li>
										<li>
											<div>小优 2018-08-10 10:47:42</div>
											<div>您好！请问有什么可以帮到您。</div>
										</li>
										<li>
											<div>大梨 2018-08-10 10:47:42</div>
											<div>什么时候可以发货。</div>
										</li>
										<li>
											<div>小优 2018-08-10 10:47:42</div>
											<div>您好！麻烦将你的订单编号提供给小优，小优帮您核实一下</div>
										</li>
										<li>
											<div>小优 2018-08-10 10:47:42</div>
											<div>您好！小熊很高兴为您服务~活动期间咨询人数较多，请您耐心等候！</div>
										</li>
										<li>
											<div>小优 2018-08-10 10:47:42</div>
											<div>您好！请问有什么可以帮到您。</div>
										</li>
										<li>
											<div>大梨 2018-08-10 10:47:42</div>
											<div>什么时候可以发货。</div>
										</li>
										<li>
											<div>大梨 2018-08-10 10:47:42</div>
											<div>您好！麻烦将你的订单编号提供给小优，小优帮您核实一下</div>
										</li>
									</ul>
									<div class="bottom2" align="left">
										<el-row type="flex" class="row-bg" style="height: 56px;">
											<el-col :span="6">
												<div class="bg-purple">
													<button class="dao2">
														<i class="el-icon-upload2"></i>导出
													</button>
												</div>
											</el-col>
											<el-col :span="6">
												<div class="bg-purple-light">
													<el-form ref="form" :model="form" label-width="80px">
														<el-form-item>
															<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;margin: 10px;"></el-time-picker>
														</el-form-item>
													</el-form>
												</div>
											</el-col>
											<el-col :span="6">
												<div class="bg-purple"></div>
											</el-col>
											<el-col :span="6">
												<div class="bg-purple bian2">
													<img src="../../../../../public/images/left.png">
													<i class="el-icon-caret-left font6"></i>
													<i class="el-icon-caret-right font6"></i>
													<img src="../../../../../public/images/right.png">
												</div>
											</el-col>
										</el-row>
									</div>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</template>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'JiLu',
		data() {
			return {
				form: {
					name: '',
					data1: '',
					data2: '',

				},
			}
		},
	}
</script>

<style>
	.bian2{
		line-height: 44px !important;
		margin-left: -8px;
	}
	.bian2{
		margin-top: 16px;
	}
	.dao2{
		background: #fff;
		padding: 5px 15px;
		border: 1px solid #ccc;
		font-size: 14px;
		margin: 13px;
	}
	.liaotian {
		margin: 0 20px;
		margin-bottom: 51px;
	}

	.font6 {
		font-size: 25px;
		color: #ccc;
		margin: 0 10px;
	}

	.bottom2 {
		border-top: 1px solid #E4E4E4;
		background: #F9FAFC;
	}
	.bottom {
		border-top: 1px solid #E4E4E4;
		background: #F9FAFC;
		padding: 15px 10px;
	}

	.liaotian>li {
		text-align: left;
		margin-top: 20px;
		font-size: 12px;
	}

	.liaotian>li>div:first-child {
		margin-bottom: 15px;
		color: #AFAFB0;
	}

	.liaotian>li>div:last-child {
		color: #6D6D6D;
	}

	.kuandu {
		padding: 10px;
		width: 50%;
		text-align: center;
	}

	.grid-content {
		padding: 10px 20px;
	}

	.shichang {
		background: #f2f2f2;
		color: #999;
		width: 50%;
		border-radius: 16px;
		padding: 4px;
		text-align: center;
		margin: 10px 0;
	}

	.border>.el-row>div:first-child {
		border-right: 1px solid #e4e4e4;
	}

	.border {
		border: 1px solid #e4e4e4;
	}

	.userInfo {
		margin-bottom: 15px;
	}

	.userInfo>li {
		border-bottom: 1px solid #E4E4E4;
		padding: 15px;
	}

	.userInfo>li>span {
		float: left;
		margin-right: 20px;
	}

	.xiong {
		color: #666;
		font-size: 14px;
		margin-bottom: 10px;
	}

	.userInfo>li>div:last-child {
		color: #999;
		font-size: 12px;
	}

	.el-button+.el-button {
		margin-left: 1px;
	}

	.jiedai {
		background: #F9FAFC;
		border: 1px solid #e4e4e4;
		margin-top: 20px;
	}

	.jiedai>div {
		padding: 10px;
		border-right: 1px solid #E4E4E4;
	}

	.jiedai2 {
		border: 1px solid #e4e4e4;
	}

	.jiedai2>div {
		padding: 10px;
		border-right: 1px solid #E4E4E4;
	}

	.fuwu {
		margin-top: 20px;
		padding: 20px 10px;
		border-top: 1px solid #E4E4E4;
		border-bottom: 1px solid #E4E4E4;
	}

	.fuwu>ul>li {
		text-align: left;
		list-style-type: none;
		display: inline-block;
		width: 25%;
		font-size: 18px;
	}

	.fuwu>ul>li>span {
		float: left;
		margin-right: 10px;
	}

	.fuwu>ul>li>div:first-child {
		color: #999;
	}

	.fuwu>ul>li>div:last-child {
		color: #666;
	}

	.addBuMen {
		font-size: 16px;
	}

	.addBuMen td {
		vertical-align: top;
	}

	.addBuMen>tr>td>span {
		color: red;
	}

	.addBuMen>tr>td>label {
		margin-right: 15px;
	}

	.addBuMen textarea {
		width: 80%;
		height: 150px;
		padding: 5px 10px;
	}

	.addBuMen input[type=text] {
		padding: 5px 10px;
		width: 80%;
	}

	.el-dialog__header {
		background: #f2f2f2;
	}

	.bianju {
		margin-right: 25px;
	}

	.cell {
		text-align: center;
	}

	.tianjia {
		border: 1px solid #e4e4e4;
		float: right;
		background: #fff;
		padding: 2px 30px;
	}

	.clear {
		clear: both;
	}

	.f5 {
		border: 1px solid #e4e4e4;
		padding: 5px 15px;
		float: right;
	}

	.bgColor7 {
		margin-top: 40px;
		background: #F3F3F3;
		padding: 14px;
	}
</style>
