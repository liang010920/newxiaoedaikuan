<!-- 系统设置-行业类别 -->
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
					<li>一级行业</li>
					<li>二级行业</li>
					<li>三级行业</li>
				</ul>
				<ul class="hang" align="left">
					<li>
						<div>IT/互联网</div>
						<div>金融业</div>
						<div>广东</div>
						<div>建筑</div>
						<div>商业服务</div>
						<div>服装/贸易</div>
						<div class="yincang" :class="{xianshi2:add8}"><input type="text" placeholder="请输入"></div>
						<div class="add777" @click="add8=!add8">新增</div>
					</li>
					<li>
						<div>互联网电子商务</div>
						<div>深圳</div>
						<div>IT服务</div>
						<div>计算机硬件</div>
						<div>通信/电信运营增值服务</div>
						<div class="yincang" :class="{xianshi2:add9}"><input type="text" placeholder="请输入"></div>
						<div class="add777" @click="add9=!add9">新增</div>
					</li>
					<li>
						<div class="yincang" :class="{xianshi2:add10}"><input type="text" placeholder="请输入"></div>
						<div class="add777" @click="add10=!add10">新增</div>
					</li>
				</ul>
			</div>
			<div align="center" style="margin: 35px;">
				Copyright &copy; 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		data(){
			return{
				add8:false,
				add9:false,
				add10:false
			}
		}
	}
</script>

<style>
	.yincang{
		display: none;
	}
	.xianshi2{
		display: block;
	}
	.yincang>input{
		width: 89%;
		padding: 10px;
	}
	.hang{
		padding: 20px;
		background: #fff;
	}
	.hang>li{
		padding: 20px;
		vertical-align: top;
		display: inline-block;
		border-right: 1px solid #E4E4E4;
		text-align: center;
	}
	.hang>li>div{
		margin: 15px 0;
	}
	.add777{
		cursor: pointer;
		border: 1px dashed #999;
		width:200px;
		padding: 10px;
	}
	.bianju2{
		padding: 20px;
		background: #fff;
	}
	.jilian{
		background: #F9FAFC;
		padding: 20px;
		border-bottom: 2px solid #E4E4E4;
	}
	.jilian>li{
		margin-right: 19%;
		color:#999;
		display: inline-block;
	}
	.jilian>li:first-child{
		margin-left: 9%;
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
