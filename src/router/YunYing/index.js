export default{
	//运营管理
	path: '/index',
	component: () => import('../../views/daikuanzuo/index.vue'),
	children:[
		{
			//App推送信息
			path: '/index/YunYing/AppTuiSongInfo',
			component: () => import('../../components/chenliang/YunYing/AppTuiSongInfo')
		},
		{
			//App管理
			path: '/index/YunYing/AppGuanLi',
			component: () => import('../../components/chenliang/YunYing/AppGuanLi')
		},
		{
			//短信信息
			path: '/index/YunYing/DuanXin',
			component: () => import('../../components/chenliang/YunYing/DuanXin')
		},
		{
			//广告
			path: '/index/YunYing/GuangGao',
			component: () => import('../../components/chenliang/YunYing/GuangGao')
		},
		{
			//广告添加
			path: '/index/YunYing/GuangGao/GuangGaoAdd',
			component: () => import('../../components/chenliang/YunYing/GuangGao/GuangGaoAdd')
		},
		{
			path: '/index/YunYing/XiTongXiaoXi',//系统消息
			component: () => import('../../components/chenliang/YunYing/xiTongXiaoXi'),
		},
		{
			path: '/index/YunYing/zhanNeiXiaoXi',//站内消息
			component: () => import('../../components/chenliang/YunYing/zhanNeiXiaoXi'),
		},
		{
			path: '/index/YunYing/wenZhangGuanLi',//文章管理
			component: () => import('../../components/chenliang/YunYing/wenZhangGuanLi'),
		},
		{
			path: '/index/YunYing/wenZhangGuanLi/FaBuBangZu',//文章管理-发布帮助
			component: () => import('../../components/chenliang/YunYing/FaBuBangZhu'),
		},
		{
			path: '/index/YunYing/wenZhangGuanLi/FaBuBangZu/FenLeiGuanLi',//文章管理-发布帮助-分类管理
			component: () => import('../../components/chenliang/YunYing/FenLeiGuanLi'),
		},
		{
			path: '/index/YunYing/YongHuYiJian',//用户意见
			component: () => import('../../components/chenliang/YunYing/YongHuYiJian'),
		},
		{
			//重定向App推送信息
			path: '/index',
			redirect:'/index/YunYing/AppTuiSongInfo'
		},
	]
}