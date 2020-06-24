export default{
	//系统分析
	path:'/index/XiTongFenXi',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//用户统计
			path: '/index/XiTongFenXi/YongHuTongJi',
			component: () => import('../../components/chenliang/XiTongFenXi/YongHuTongJi'),
		},
		{
			//贷款统计
			path: '/index/XiTongFenXi/DaiKuanTongJi',
			component: () => import('../../components/chenliang/XiTongFenXi/DaiKuanTongJi'),
		},
		{
			//渠道分析
			path: '/index/XiTongFenXi/QuDaoFenXi',
			component: () => import('../../components/chenliang/XiTongFenXi/QuDaoFenXi'),
		},
		{
			//贷款产品分析
			path: '/index/XiTongFenXi/DaiKuanChanPin',
			component: () => import('../../components/chenliang/XiTongFenXi/DaiKuanChanPin'),
		},
		{
			//新增贷款用户
			path: '/index/XiTongFenXi/AddDaiKuanYongHu',
			component: () => import('../../components/chenliang/XiTongFenXi/AddDaiKuanYongHu'),
		},
		{
			//放款笔数
			path: '/index/XiTongFenXi/FangKuanBiShu',
			component: () => import('../../components/chenliang/XiTongFenXi/FangKuanBiShu'),
		},
		{
			//放款金额
			path: '/index/XiTongFenXi/FangKuanJinE',
			component: () => import('../../components/chenliang/XiTongFenXi/FangKuanJinE'),
		},
		{
			//平均放款金额
			path: '/index/XiTongFenXi/PingJunFangKuan',
			component: () => import('../../components/chenliang/XiTongFenXi/PingJunFangKuan'),
		},
		{
			//逾期情况
			path: '/index/XiTongFenXi/YuQiQingKuang',
			component: () => import('../../components/chenliang/XiTongFenXi/YuQiQingKuang'),
		},
		{
			//重定向-账户设置
			path:'/index/XiTongFenXi',
			redirect: '/index/XiTongFenXi/YongHuTongJi'
		}
	]
}