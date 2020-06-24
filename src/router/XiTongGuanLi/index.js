export default{
	//系统管理
	path:'/index/XiTongGuanLi',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//账户设置
			path: '/index/XiTongGuanLi/AccountSetting',
			component: () => import('../../components/chenliang/XiTongGuanLi/AccountSetting'),
		},
		{
			//登录日志
			path: '/index/XiTongGuanLi/LoginLog',
			component: () => import('../../components/chenliang/XiTongGuanLi/LoginLog'),
		},
		{
			//操作日志
			path: '/index/XiTongGuanLi/OperationLog',
			component: () => import('../../components/chenliang/XiTongGuanLi/OperationLog'),
		},
		{
			//重定向-账户设置
			path:'/index/XiTongGuanLi',
			redirect: '/index/XiTongGuanLi/AccountSetting'
		}
	]
}