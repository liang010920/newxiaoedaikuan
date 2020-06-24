export default {
	//左侧-----产品
	path: '/cp',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children: [{
			// 贷款产品管理
			path: '/cp/ChanpinGuanLi',
			component: () => import('../../components/chenliang/ChanPin/ChanpinGuanLi')
			
		},
		{
			//贷款产品管理 新增页面
			path: '/cp/cpxin',
			component: () => import('../../components/chenliang/ChanPin/cpXinZeng')
		},
		{
			//贷款产品管理 新增页面2
			path: '/cp/cpxin2',
			component: () => import('../../components/chenliang/ChanPin/cpXinZeng2')
		},
		{
			//贷款产品管理 新增页面3
			path: '/cp/cpxin3',
			component: () => import('../../components/chenliang/ChanPin/cpXinZeng3')
		},
		{
			//贷款产品管理 编辑页面
			path: '/cp/GuanLiBianJi',
			component: () => import('../../components/chenliang/ChanPin/GuanLiBianJi')
		},
		{
			//贷款材料管理
			path: '/cp/cpcailiao',
			component: () => import('../../components/chenliang/ChanPin/cpCaiLiao')
		},
		{
			//贷款新增材料管理
			path: '/cp/NewCailiao',
			component: () => import('../../components/chenliang/ChanPin/NewCaiLiao')
		},
		{
			//贷款管理参数配置
			path: '/cp/cpcanshu',
			component: () => import('../../components/chenliang/ChanPin/cpCanShu')
		},
		{
			//贷款产品审核
			path: '/cp/cpShenhe',
			component: () => import('../../components/chenliang/ChanPin/shenHe')
		},
		{
			//贷款产品审核-查看
			path: '/cp/ShenHeChaKan',
			component: () => import('../../components/chenliang/ChanPin/ShenHeChaKan')
		},
		{
			//贷款产品合同
			path: '/cp/cphetong',
			component: () => import('../../components/chenliang/ChanPin/heTong')
		},
		{
			//贷款新增产品合同
			path: '/cp/NewHeTong',
			component: () => import('../../components/chenliang/ChanPin/NewHeTong')
		}
	]


}
