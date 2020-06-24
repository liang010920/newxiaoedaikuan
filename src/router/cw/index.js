export default {
	//财务管理
	path: '/cw',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children: [{
		//财务管理-本金放款台账
		path: '/cw/cwbenjinfktz',
		component: () => import('../../components/chenliang/CaiW/caiWu')
	},{
		//财务管理-本金收款台账
		path: '/cw/cwbenjinfktz2',
		component: () => import('../../components/chenliang/CaiW/caiWu')
	}, {
		//财务管理-本金放款台账-查看详情
		path: '/cw/cwchaKan',
		component: () => import('../../components/chenliang/CaiW/cwxiangQing')
	}, {
		//财务管理-本息收支对账日志
		path: '/cw/cwbenxi',
		component: () => import('../../components/chenliang/CaiW/cwBenXi')
	}, {
		//财务管理-服务费台账
		path: '/cw/cwfuwu',
		component: () => import('../../components/chenliang/CaiW/cwFuWuFei')
	}, {
		//财务管理-管理费台账
		path: '/cw/cwguanli',
		component: () => import('../../components/chenliang/CaiW/cwglFei/index.vue')
	}, {
		//财务管理-利息收款台账
		path: '/cw/cwlixi',
		component: () => import('../../components/chenliang/CaiW/cwLiXi/index.vue')
	}, {
		//财务管理-现金流录入
		path: '/cw/cwxianjin',
		component: () => import('../../components/chenliang/CaiW/cwXianJin/index.vue')
	}, {
		//财务管理-银行流水录入
		path: '/cw/cwyhls',
		component: () => import('../../components/chenliang/CaiW/cwyhLiuShui/index.vue')
	}, {
		//财务管理-银行流水录入-编辑
		path: '/cw/cwyhbian',
		component: () => import('../../components/chenliang/CaiW/cwyhBianJi/index.vue')
	}, {
		//财务管理-银行账户管理
		path: '/cw/cwyhgl',
		component: () => import('../../components/chenliang/CaiW/cwyhZhangHu/index.vue')
	}, {
		//财务管理-银行账户编辑
		path: '/cw/cwzhbian',
		component: () => import('../../components/chenliang/CaiW/cwzhBIanJi/index.vue')
	}]
}
