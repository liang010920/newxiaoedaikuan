export default{
	//贷中管理
	path:'/index/DaiZhong',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//贷中管理-授信
			path: '/index/DaiZhong/ShouXin',
			component: () => import('../../components/chenliang/DaiZhong/ShouXin'),
			children:[
				{
					//贷中管理-授信-未受理
					path: '/index/DaiZhong/ShouXin/ShouXinWeiShouLi',
					component: () => import('../../components/chenliang/DaiZhong/ShouXin/WeiShouLi'),
				},
				{
					//重定向-授信
					path:'/index/DaiZhong/ShouXin',
					redirect: '/index/DaiZhong/ShouXin/ShouXinWeiShouLi'
				}
				
			]
		},
		{
			//贷中管理-放款处理
			path: '/index/DaiZhong/FangKuanChuLi',
			component: () => import('../../components/chenliang/DaiZhong/FangKuanChuLi'),
			children:[
				{
					//贷中管理-放款处理-已放款
					path: '/index/DaiZhong/FangKuanChuLi/YiFangKuan',
					component: () => import('../../components/chenliang/DaiZhong/FangKuanChuLi/YiFangKuan'),
				},
				{
					//重定向贷中管理-放款处理
					path:'/index/DaiZhong/FangKuanChuLi',
					redirect: '/index/DaiZhong/FangKuanChuLi/YiFangKuan'
				}
				
			]
		},
		{
			//贷中管理-放款审批
			path: '/index/DaiZhong/FangKuanShenPi',
			component: () => import('../../components/chenliang/DaiZhong/FangKuanShenPi'),
		},
		{
			//贷中管理-放款审批-审批放款
			path: '/index/DaiZhong/FangKuanShenPi/ShenPiFangKuan',
			component: () => import('../../components/chenliang/DaiZhong/FangKuanShenPi/ShenPiFangKuan'),
		},
		{
			//贷中管理-合同
			path: '/index/DaiZhong/HeTong',
			component: () => import('../../components/chenliang/DaiZhong/HeTong'),
		},
		{
			//贷中管理-合同管理-合同管理
			path: '/index/DaiZhong/HeTongGuanLi2',
			component: () => import('../../components/chenliang/DaiZhong/HeTong/HeTongGuanLi'),
		},
		{
			//贷中管理-放款登记
			path: '/index/DaiZhong/FangKuanChuLi/FangKuanDengJi',
			component: () => import('../../components/chenliang/DaiZhong/FangKuanChuLi/FangKuanDengJi'),
		},
		{
			//贷中管理-放款登记
			path: '/index/DaiZhong/FangKuanChuLi/WeiTuoChuLi',
			component: () => import('../../components/chenliang/DaiZhong/FangKuanChuLi/WeiTuoChuLi'),
		},
		{
			//重定向贷中管理-授信
			path:'/index/DaiZhong',
			redirect: '/index/DaiZhong/ShouXin'
		}
	]
}