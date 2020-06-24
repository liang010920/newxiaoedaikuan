export default{
	//系统分析
	path:'/index/XiTongSheZhi',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//平台信息设置
			path: '/index/XiTongSheZhi/PingTaiInfo',
			component: () => import('../../components/chenliang/XiTongSheZhi/PingTaiInfo'),
		},
		{
			//会员等级设置
			path: '/index/XiTongSheZhi/HuiYuanDengJi',
			component: () => import('../../components/chenliang/XiTongSheZhi/HuiYuanDengJi'),
		},
		{
			//会员等级设置-添加
			path: '/index/XiTongSheZhi/HuiYuanDengJi/AddHuiYuanDengJi',
			component: () => import('../../components/chenliang/XiTongSheZhi/AddHuiYuanDengJi'),
		},
		{
			//信息提示设置
			path: '/index/XiTongSheZhi/InfoTiShi',
			component: () => import('../../components/chenliang/XiTongSheZhi/InfoTiShi'),
		},
		{
			//信息提示设置-编辑内容
			path: '/index/XiTongSheZhi/InfoTiShi/InfoTiShiBianJi',
			component: () => import('../../components/chenliang/XiTongSheZhi/InfoTiShiBianJi'),
		},
		{
			//银行数据设置
			path: '/index/XiTongSheZhi/YinHangShuJu',
			component: () => import('../../components/chenliang/XiTongSheZhi/YinHangShuJu'),
		},
		{
			//银行数据设置-添加
			path: '/index/XiTongSheZhi/YinHangShuJu/AddYinHangShuJu',
			component: () => import('../../components/chenliang/XiTongSheZhi/AddYinHangShuJu'),
		},
		{
			//贷款类别
			path: '/index/XiTongSheZhi/DaiKuanLeiBie',
			component: () => import('../../components/chenliang/XiTongSheZhi/DaiKuanLeiBie'),
		},
		{
			//贷款类别-添加
			path: '/index/XiTongSheZhi/DaiKuanLeiBie/AddDaiKuanLeiBie',
			component: () => import('../../components/chenliang/XiTongSheZhi/AddDaiKuanLeiBie'),
		},
		{
			//银行类别
			path: '/index/XiTongSheZhi/HangYeLeiBie',
			component: () => import('../../components/chenliang/XiTongSheZhi/HangYeLeiBie'),
		},
		{
			//地区数据
			path: '/index/XiTongSheZhi/AddressShuJu',
			component: () => import('../../components/chenliang/XiTongSheZhi/AddressShuJu'),
		},
		{
			//管理服务费
			path: '/index/XiTongSheZhi/GuanLiFuWuFei',
			component: () => import('../../components/chenliang/XiTongSheZhi/GuanLiFuWuFei'),
		},
		{
			//贷款利率
			path: '/index/XiTongSheZhi/DaiKuanLiLv',
			component: () => import('../../components/chenliang/XiTongSheZhi/DaiKuanLiLv'),
		},
		{
			//重定向-账户设置
			path:'/index/XiTongFenXi',
			redirect: '/index/XiTongFenXi/PingTaiInfo'
		}
	]
}