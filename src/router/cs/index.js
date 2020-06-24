export default {
	//催收
	path: '/cs',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children: [{
		//催收管理-催收记录
		path: '/cs/csjilu',
		component: () => import('../../components/chenliang/CuiShou/csJiLu')
	}, {
		//催收管理-催收记录-查看
		path: '/cs/csjiluchakan',
		component: () => import('../../components/chenliang/CuiShou/csJiLuChaKan')
	}, {
		//催收管理-即将到期
		path: '/cs/csdaoqi',
		component: () => import('../../components/chenliang/CuiShou/csJiJiang')
	}, {
		//催收管理-已逾期
		path: '/cs/csyuqi',
		component: () => import('../../components/chenliang/CuiShou/csYiYuQi')
	}, {
		//催收管理-逾期查看
		path: '/cs/csyqChaKan',
		component: () => import('../../components/chenliang/CuiShou/csYuQiChaKan')
	}, {
		//已逾期-催收办理
		path: '/cs/csbanli',
		component: () => import('../../components/chenliang/CuiShou/csBanLi')
	}]
}
