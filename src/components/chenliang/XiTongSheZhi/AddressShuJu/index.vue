<!-- 系统设置-地区类别 -->
<template>
	<el-container>
		<el-main style="background:#f9f9f9;padding: 0 !important;">
			<div class="jiekuan">
				<i class="el-icon-s-home"></i>首页/设置/通用参数配置/行业数据字典
				<span>
					<button class="floatR add2"><i class="el-icon-refresh"></i>刷新</button>
				</span>
			</div>
			<div class="lieBiao99" align="left">
				<span style="padding: 20px;">地区数据字典</span>
				<router-link to="/index/XiTongSheZhi/DaiKuanLeiBie/AddDaiKuanLeiBie" tag="span">
					<button class="floatR add2">恢复默认设置</button>
				</router-link>
				<div class="clear"></div>
			</div>
			<!-- 省市级联 -->
			<div class="bianju2">
				<ul class="jilian" align="left">
					<li>省/自治区/直辖市</li>
					<li>地级市</li>
					<li>市辖区/县/县级市</li>
				</ul>
				<van-picker show-toolbar title="标题" :columns="columns" />
			</div>
			<div align="center" style="margin: 35px;">
				Copyright &copy; 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				columns: [{
						text: '广东',
						children: [
							{text: '广州',
							children: [{
								text: '罗湖区'
							}, {
								text: '福田区'
							},{
								text: '南山区'
							}, {
								text: '盐田区'
							},{
								text: '宝安区'
							}, {
								text: '龙岗区'
							}]},
							{
								text: '深圳',
								children: [{
									text: '罗湖区'
								}, {
									text: '福田区'
								},{
									text: '南山区'
								}, {
									text: '盐田区'
								},{
									text: '宝安区'
								}, {
									text: '龙岗区'
								}],
							},
							{text: '珠海'},
							{text: '广州'},
							{text: '汕头'},
							{text: '韶关'},
							{text: '佛山'},
							{text: '江门'},
							{text: '湛江'},
							{text: '茂名'},
							{text: '肇庆'},
							{text: '梅州'},
							{text: '汕尾'},
							{text: '河源'},
							{text: '阳江'},
							{text: '清远'},
							{text: '东莞'},
						],
					},
					{text: '北京'},
					{text: '湖南'},
					{text: '湖北'},
					{text: '辽宁'},
					{text: '黑龙江'},
					{text: '河南'},
					{text: '河北'},
					{text: '上海'},
					{text: '福建'},
					{text: '吉林'},
					{text: '江苏'},
					{text: '安徽'},
				],
			};
		},
	};
</script>

<style>
	.add777 {
		border: 1px dashed #999;
		width: 200px;
		padding: 10px;
	}

	.bianju2 {
		padding: 20px;
		background: #fff;
	}

	.jilian {
		background: #F9FAFC;
		padding: 20px;
		border-bottom: 2px solid #E4E4E4;
	}

	.jilian>li {
		margin-right: 26%;
		color: #999;
		display: inline-block;
	}
	.jilian>li:first-child{
		margin-left: 10%;
	}
	.jilian>li:last-child{
		margin-right: 0 !important;
	}

	.lieBiao99 {
		background: #f3f3f3;
		padding: 10px 0;
		border-top: 1px solid #E4E4E4;
		margin-top: 20px;
	}

	.add2 {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}
</style>
