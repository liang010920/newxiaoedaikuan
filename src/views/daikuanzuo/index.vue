<template>
	<div>
		<ul class="top">
			<li class="width">
				<img src="../../../public/images/logo.png" width="20" align="center">
				<span class="font">xx小额贷款系统</span>
			</li>
			<li class="width2">
				<span class="font floatL">菜单名称</span>
				<div class="floatR color22">
					<i class="el-icon-user-solid"></i> {{this.$route.query.loginUser}} <span>|</span>
					<el-badge :value="50" class="item xitongxiaoxi" title="系统消息">
						<i class="el-icon-message-solid"></i>
					</el-badge><span>|</span>
					<span type="text" @click="dialogVisible = true">
						<span title="退出程序"><i class="el-icon-switch-button"></i></span>
					</span>
					<el-dialog title="退出小额贷款" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
						<span>是否退出小额贷款系统？</span>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="tui">确 定</el-button>
						</span>
					</el-dialog>
				</div>
			</li>
		</ul>
		<div class="clear"></div>
		<el-container style="height: 582px;">
			<el-aside width="200px">
				<div class="fenlei">
					<span>
						全部分类
						<span class="el-icon-s-fold icon1"></span>
					</span>
				</div>
				<el-menu align="center" :default-openeds="['1','2','3','4','5','6','7','8','9','10','11','12','13']">
					<!-- <el-menu :default-openeds="['8']"> -->
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-s-fold"></i>
							<router-link to="/index/ShouYe" tag="a" style="color: #000000;">首页面板</router-link>
						</template>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-s-fold"></i>产品工厂</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">
								<router-link to="/cp/cphetong" tag="div">合同模板管理</router-link>
							</el-menu-item>
							<el-menu-item index="2-2">
								<router-link to="/cp/cpcailiao" tag="div">贷款材料管理</router-link>
							</el-menu-item>
							<el-menu-item index="2-3">
								<router-link to="/cp/cpcanshu" tag="div">产品参数配置</router-link>
							</el-menu-item>
							<el-menu-item index="2-4">
								<router-link to="/cp/ChanpinGuanLi" tag="div">贷款产品管理</router-link>
							</el-menu-item>
							<el-menu-item index="2-5">
								<router-link to="/cp/cpShenhe" tag="div">贷款产品审核</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-s-fold"></i>
							<router-link to="" style="color:#000000;">贷前管理</router-link>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">
								<router-link to="/index/ZhunRu" tag="div">准入授信管理</router-link>
							</el-menu-item>
							<el-menu-item index="3-2">
								<router-link to="/index/DaiKuan" tag="div">贷款申请管理</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-s-fold"></i>
							<router-link to="" tag="span">贷中管理</router-link>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">
								<router-link to="/index/DaiZhong/ShouXin" tag="span">产品授信</router-link>
							</el-menu-item>
							<el-menu-item index="4-2">
								<router-link to="/index/DaiZhong/HeTong" tag="span">合同管理</router-link>
							</el-menu-item>
							<el-menu-item index="4-3">
								<router-link to="/index/DaiZhong/FangKuanShenPi" tag="span">放款审批</router-link>
							</el-menu-item>
							<el-menu-item index="4-4">
								<router-link to="/index/DaiZhong/FangKuanChuLi" tag="span">放款处理</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-s-fold"></i>贷后管理</template>
						<el-menu-item-group>
							<el-menu-item index="5-1">
								<router-link tag="div" to="/index/JianCha">贷后检查管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-2">
								<router-link tag="div" to="/index/YuJing">贷后预警管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-3">
								<router-link tag="div" to="/index/DaiKuanJieXiang">贷后结项管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-4">
								<router-link tag="div" to="/index/HaiKuanGuanLi">还款管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-5">
								<router-link tag="div" to="/index/LiLvBianGeng">利率变更管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-6">
								<router-link tag="div" to="/index/HaiKuanQueRen">还款确认管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-7">
								<router-link tag="div" to="/index/TiQianHaiKuan">提前还款</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-s-fold"></i>催收管理</template>
						<el-menu-item-group>
							<el-menu-item index="6-1">
								<router-link to="/cs/csdaoqi" tag="span">即将到期</router-link>
							</el-menu-item>
							<el-menu-item index="6-2">
								<router-link to="/cs/csyuqi" tag="span">已逾期</router-link>
							</el-menu-item>
							<el-menu-item index="6-3">
								<router-link to="/cs/csjilu" tag="span">催收记录</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-s-fold"></i>财务管理</template>
						<el-menu-item-group>
							<el-menu-item index="7-1">
								<router-link to="/cw/cwyhgl" tag="span">银行账户管理</router-link>
							</el-menu-item>
							<el-menu-item index="7-2">
								<router-link to="/cw/cwyhls" tag="span">银行流水录入</router-link>
							</el-menu-item>
							<el-menu-item index="7-3">
								<router-link to="/cw/cwxianjin" tag="span">现金流录入</router-link>
							</el-menu-item>
							<el-menu-item index="7-4">
								<router-link to="/cw/cwbenjinfktz" tag="span">本金放款台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-5">
								<router-link to="/cw/cwbenjinfktz2" tag="span">本金收款台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-6">
								<router-link to="/cw/cwlixi" tag="span">利息收款台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-7">
								<router-link to="/cw/cwguanli" tag="span">管理费台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-8">
								<router-link to="/cw/cwfuwu" tag="span">服务费台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-9">
								<router-link to="/cw/cwbenxi" tag="span">本息收支对账台账</router-link>
							</el-menu-item>
							<el-menu-item index="7-10">
								<router-link to="/cw/cwbenxi" tag="span">费用收支对账台账</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title"><i class="el-icon-s-fold"></i>运营管理</template>
						<el-menu-item-group>
							<el-menu-item index="8-1">
								<router-link tag="div" to="/index/YunYing/XiTongXiaoXi">系统消息</router-link>
							</el-menu-item>
							<el-menu-item index="8-2">
								<router-link tag="div" to="/index/YunYing/DuanXin">短信消息</router-link>
							</el-menu-item>
							<el-menu-item index="8-3">
								<router-link tag="div" to="/index/YunYing/zhanNeiXiaoXi">站内信消息</router-link>
								</el-menu-item>
							<el-menu-item index="8-4">
								<router-link tag="div" to="/index/YunYing/AppTuiSongInfo">App推送消息</router-link>
							</el-menu-item>
							<el-menu-item index="8-5">
								<router-link tag="div" to="/index/YunYing/GuangGao">广告管理</router-link>
							</el-menu-item>
							<el-menu-item index="8-6">
								<router-link tag="div" to="/index/YunYing/wenZhangGuanLi">文章管理</router-link>
							</el-menu-item>
							<el-menu-item index="8-7">
								<router-link tag="div" to="/index/YunYing/YongHuYiJian">用户意见反馈</router-link>
							</el-menu-item>
							<el-menu-item index="8-8">
								<router-link tag="div" to="/index/YunYing/AppGuanLi">app应用管理</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="9">
						<template slot="title"><i class="el-icon-s-fold"></i>客户档案管理</template>
						<el-menu-item-group>
							<el-menu-item index="9-1">
								<router-link tag="div" to="/index/YiZhunRuKeHu">已准入客户管理</router-link>
							</el-menu-item>
							<el-menu-item index="9-2">
								<router-link tag="div" to="/index/HeiMingDan">黑名单客户</router-link>
							</el-menu-item>
							<el-menu-item index="9-3">
								<router-link tag="div" to="/index/KeHuBiaoQian">客户标签</router-link>
							</el-menu-item>
							<el-menu-item index="9-4">
								<router-link tag="div" to="/index/JieKuanShaiXuan">借款能力筛选</router-link>
							</el-menu-item>
							<el-menu-item index="9-5">
								<router-link tag="div" to="/index/HuiYuanPaiHang">会员排行</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="10">
						<template slot="title"><i class="el-icon-s-fold"></i>系统权限</template>
						<el-menu-item-group>
							<el-menu-item index="10-1">
								<router-link tag="div" to="/index/QuanXian/BuMen">部门管理</router-link>
							</el-menu-item>
							<el-menu-item index="10-2">
								<router-link tag="div" to="/index/QuanXian/JueSe">角色管理</router-link>
							</el-menu-item>
							<el-menu-item index="10-3">
								<router-link tag="div" to="/index/QuanXian/YuanGong">员工管理</router-link>
							</el-menu-item>
							<el-menu-item index="10-4">
								<router-link tag="div" to="/index/QuanXian/KeFu">客服管理</router-link>
							</el-menu-item>
							<el-menu-item index="10-5">
								<router-link tag="div" to="/index/QuanXian/ShuJuKu">数据库管理</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="11">
						<template slot="title"><i class="el-icon-s-fold"></i>系统管理</template>
						<el-menu-item-group>
							<el-menu-item index="11-1">
								<div @click="tiao77">账户设置</div>
								<!-- <router-link tag="div" to="/index/XiTongGuanLi/AccountSetting">账户设置</router-link> -->
							</el-menu-item>
							<el-menu-item index="11-2">
								<router-link tag="div" to="/index/XiTongGuanLi/LoginLog">登录日志</router-link>
							</el-menu-item>
							<el-menu-item index="11-3">
								<router-link tag="div" to="/index/XiTongGuanLi/OperationLog">操作日志</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="12">
						<template slot="title"><i class="el-icon-s-fold"></i>系统分析</template>
						<el-menu-item-group>
							<el-menu-item index="12-1">
								<router-link tag="div" to="/index/XiTongFenXi/YongHuTongJi">用户统计</router-link>
							</el-menu-item>
							<el-menu-item index="12-2">
								<router-link tag="div" to="/index/XiTongFenXi/DaiKuanTongJi">贷款统计</router-link>
							</el-menu-item>
							<el-menu-item index="12-3">
								<router-link tag="div" to="/index/XiTongFenXi/QuDaoFenXi">渠道分析</router-link>
							</el-menu-item>
							<el-menu-item index="12-4">
								<router-link tag="div" to="/index/XiTongFenXi/DaiKuanChanPin">贷款产品分析</router-link>
							</el-menu-item>
							<el-menu-item index="12-5">
								<router-link tag="div" to="/index/XiTongFenXi/AddDaiKuanYongHu">新增贷款用户</router-link>
							</el-menu-item>
							<el-menu-item index="12-6">
								<router-link tag="div" to="/index/XiTongFenXi/FangKuanBiShu">放款笔数</router-link>
							</el-menu-item>
							<el-menu-item index="12-7">
								<router-link tag="div" to="/index/XiTongFenXi/FangKuanJinE">放款金额</router-link>
							</el-menu-item>
							<el-menu-item index="12-8">
								<router-link tag="div" to="/index/XiTongFenXi/PingJunFangKuan">平均放款金额</router-link>
							</el-menu-item>
							<el-menu-item index="12-9">
								<router-link tag="div" to="/index/XiTongFenXi/YuQiQingKuang">逾期概况</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="13">
						<template slot="title"><i class="el-icon-s-fold"></i>系统设置</template>
						<el-menu-item-group>
							<el-menu-item index="13-1">
								<router-link tag="div" to="/index/XiTongSheZhi/PingTaiInfo">平台信息设置</router-link>
							</el-menu-item>
							<el-menu-item index="13-2">
								<router-link tag="div" to="/index/XiTongSheZhi/HuiYuanDengJi">会员等级设置</router-link>
							</el-menu-item>
							<el-menu-item index="13-3">
								<router-link tag="div" to="/index/XiTongSheZhi/InfoTiShi">消息提醒设置</router-link>
							</el-menu-item>
							<el-menu-item index="13-4">
								<router-link tag="div" to="/index/XiTongSheZhi/YinHangShuJu">银行数据字典</router-link>
							</el-menu-item>
							<el-menu-item index="13-5">
								<router-link tag="div" to="/index/XiTongSheZhi/DaiKuanLeiBie">贷款类别字典</router-link>
							</el-menu-item>
							<el-menu-item index="13-6">
								<router-link tag="div" to="/index/XiTongSheZhi/HangYeLeiBie">行业类别字典</router-link>
							</el-menu-item>
							<el-menu-item index="13-7">
								<router-link tag="div" to="/index/XiTongSheZhi/AddressShuJu">地区数据字典</router-link>
							</el-menu-item>
							<el-menu-item index="13-8">
								<router-link tag="div" to="/index/XiTongSheZhi/GuanLiFuWuFei">管理服务费采参数</router-link>
							</el-menu-item>
							<el-menu-item index="13-9">
								<router-link tag="div" to="/index/XiTongSheZhi/DaiKuanLiLv">贷款利率参数</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<template>
				<router-view></router-view>
			</template>
		</el-container>
	</div>
</template>

<script>
	// import WeiShouLi from '../../components/WeiShouLi/index.vue'
	export default {
		name: 'daikuan',
		// components: {
		// 	WeiShouLi
		// },
		data() {
			return {
				dialogVisible: false
			};
		},
		methods: {
			handleClose() {
				this.$confirm('确认关闭？')
			},
			tui(){
				this.dialogVisible= false;
				this.$router.push({path:'/Login'});
			},
			tiao77(){
				this.$router.push('/index/XiTongGuanLi/AccountSetting');
			}
		}
	}
</script>

<style>
	.xitongxiaoxi{
		margin-top: 0 !important;
		margin-right: 13px !important;
	}
	.color22 .el-badge__content{
		background:#000;
		color: #fff;
	}
	.cell:hover {
		cursor: pointer;
	}

	.margin2 {
		margin: 50px 0;
	}

	.ju * {
		text-align: center !important;
	}

	.dao {
		background: #fff;
		padding: 3px;
		border: 1px solid #ccc;
		font-size: 14px;
	}

	.lieBiao {
		background: #f3f3f3;
		padding: 10px 0;
	}

	.el-button {
		padding: 8px 20px !important;
	}

	.bgColor2 * {
		display: inline-block;
		vertical-align: top;
		margin-bottom: 0;
	}

	.el-input__inner {
		padding: 10px !important;
		width: 100px !important;
		text-align: center;
		padding-left: 18px !important;
		height: 34px;
	}

	.el-input__prefix {
		padding-left: 5px !important;
		top: -2px;
	}

	.el-form-item__content {
		margin-left: 0 !important;
	}

	.floatR {
		float: right;
		margin-right: 20px;
	}

	.top li {
		display: inline-block;
	}

	* {
		margin: 0;
		padding: 0;
	}

	ul li {
		list-style-type: none;
	}

	body {
		margin: 0;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.fenlei {
		padding: 19px 0;
		border-bottom: 1px solid;
	}
	.fenlei>span{
		margin-left: 10px;
	}
	.color22 {
		color: #999999;
	}

	.color22>span {
		margin: 0 15px;
	}

	.icon1 {
		float: right;
		margin-right: 10px;
	}

	.width {
		width: 200px;
		background: #f2f2f2;
		float: left;
		padding: 10px 0;
	}

	.width2 {
		width: 85%;
		float: left;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
	}

	.clear {
		clear: both;
	}

	.font {
		font-weight: bold;
		margin-left: 15px;
	}

	.floatL {
		float: left;
	}

	.liuCheng {
		border-bottom: 1px solid #999;
	}

	.liuCheng li {
		display: inline-block;
		color: #999;

		margin: 0 10px;
		font-size: 16px;
		width: 150px;
		text-align: center;
	}

	.liuCheng li:hover {
		cursor: pointer;
		border-bottom: 2px solid #000;
	}

	.bgColor {
		background: #f9f9f9;
	}

	.jiekuan {
		text-align: left;
		padding: 20px;
	}

	.bgColor2 {
		background: #fff;
		color: #000;
		padding: 15px;
		margin: 0 20px;

	}

	.bgColor2 input {
		padding: 6px 10px;
		width: 115px;
		margin: 0 10px;
		color: #000 !important;
	}

	.bgColor2 select {
		padding: 6px 10px 9px;
		;
		width: 105px;
		margin: 0 10px;
		color: #000 !important;
	}

	.cha {
		background: #6b6b6b;
		color: #fff;

	}

	.font2 {
		font-weight: bold;
		margin-left: 10px;
	}
</style>
