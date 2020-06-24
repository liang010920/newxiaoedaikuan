export default{
	//系统权限
	path:'/index/QuanXian',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//部门管理
			path: '/index/QuanXian/BuMen',
			component: () => import('../../components/chenliang/QuanXian/BuMen'),
		},
		{
			//角色管理
			path: '/index/QuanXian/JueSe',
			component: () => import('../../components/chenliang/QuanXian/JueSe'),
		},
		{
			//角色管理-权限设置
			path: '/index/QuanXian/JueSe/QuanXianSheZhi',
			component: () => import('../../components/chenliang/QuanXian/QuanXianSheZhi'),
		},
		{
			//员工管理
			path: '/index/QuanXian/YuanGong',
			component: () => import('../../components/chenliang/QuanXian/YuanGong'),
		},
		{
			//员工管理-添加
			path: '/index/QuanXian/YuanGong/YuanGongAdd',
			component: () => import('../../components/chenliang/QuanXian/YuanGong/tianjia.vue'),
		},
		{
			//客服管理
			path: '/index/QuanXian/KeFu',
			component: () => import('../../components/chenliang/QuanXian/KeFu'),
		},
		{
			//客户管理-记录
			path: '/index/QuanXian/KeFu/JiLu',
			component: () => import('../../components/chenliang/QuanXian/KeFu/jilu.vue'),
		},
		{
			//数据库备份
			path: '/index/QuanXian/ShuJuKu',
			component: () => import('../../components/chenliang/QuanXian/ShuJuKu'),
		},
		{
			//重定向-部门管理
			path:'/index/QuanXian',
			redirect: '/index/QuanXian/BuMen'
		}
	]
}