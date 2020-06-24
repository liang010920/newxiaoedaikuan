export default {
	path: '/index',
	component: () => import('../../views/daikuanzuo/index.vue'), //视图左侧
	children:[
		{
			//贷前管理
			path: '/index/DaiKuan',
			component: () => import('../../components/chenliang/DaiKuan'),
			children:[
				{
					path:'/index/DaiKuan/WeiShouLi',
					name:'WeiShouLi',
					component: () => import('../../components/chenliang/DaiKuan/WeiShouLi')//贷前贷款未受理
				},
				{
					path:'/index/DaiKuan/YiTongGuo',
					name:'YiTongGuo',
					component: () => import('../../components/chenliang/DaiKuan/YiTongGuo')//贷前贷款已通过
				},
				{
					path:'/index/DaiKuan/YiZhongZhi',
					name:'YiZhongZhi',
					component: () => import('../../components/chenliang/DaiKuan/YiZhongZhi')//贷前贷款已终止
				},
				{
					path:'/index/DaiKuan',
					redirect: '/index/DaiKuan/WeiShouLi'//重定向贷前未受理
				}
			]
		},
		{
			path: '/index/ZhunRu',
			component: () => import('../../components/chenliang/ZhunRu'),
			//贷前准入授信
			children:[
				{
					path:'/index/ZhunRu/DaiChuShen',
					name:'DaiChuShen',
					component: () => import('../../components/chenliang/ZhunRu/DaiChuShen')//贷前准入待初审
				},
				{
					path:'/index/ZhunRu/ZhunYiTongGuo',
					name:'ZhunYiTongGuo',
					component: () => import('../../components/chenliang/ZhunRu/ZhunYiTongGuo')//贷前准入已通过
				},
				{
					path:'/index/ZhunRu/ZhunYiZhongZhi',
					name:'ZhunYiZhongZhi',
					component: () => import('../../components/chenliang/ZhunRu/ZhunYiZhongZhi')//贷前准入已终止
				},
				{
					path:'/index/ZhunRu',
					redirect: '/index/ZhunRu/DaiChuShen'//重定向贷前准入待初审
				}
			]
		},
		{
			path:'/index/ChaKan',
			component: () => import('../../components/chenliang/ChaKan'),//贷前表格查看
			children:[
				{
					path:'/index/ChaKan/KeHu',
					name:'KeHu',
					component: () => import('../../components/chenliang/ChaKan/KeHu')//贷前查看客户
				},
				{
					path:'/index/ChaKan/YunYingShang',
					name:'YunYingShang',
					component: () => import('../../components/chenliang/ChaKan/YunYingShang')//贷前查看啊运营商
				},
				{
					path:'/index/ChaKan/JieKuan',
					name:'JieKuan',
					component: () => import('../../components/chenliang/ChaKan/JieKuan')//贷前查看借款
				},
				{
					path:'/index/ChaKan/FengKong',
					name:'FengKong',
					component: () => import('../../components/chenliang/ChaKan/FengKong')//贷前查看风控
				},
				{
					path:'/index/ChaKan/JuXinLi',
					name:'JuXinLi',
					component: () => import('../../components/chenliang/ChaKan/JuXinLi')//贷前查看聚信立
				},
				{
					path:'/index/ChaKan',
					redirect: '/index/ChaKan/KeHu'//重定向查看客户
				}
			]
		},
		// 贷后管理
		{
			path: '/index/Cha',
			name: 'Cha',
			component: () => import('../../components/chenliang/DaiHou/DaiHouJianCha/ChaKan')//贷后查看
		},
		{
			path: '/index/JianCha',
			name: 'JianCha',
			component: () => import('../../components/chenliang/DaiHou/DaiHouJianCha')//贷后检查
		},
		{
			path: '/index/JianCha/Add',
			name: 'JianCha',
			component: () => import('../../components/chenliang/DaiHou/DaiHouJianCha/Add')//贷后检查
		},
		{
			path: '/index/YuJing',
			name: 'YuJing',
			component: () => import('../../components/chenliang/DaiHou/YuJing')//贷后预警
		},
		{
			path: '/index/DaiKuanJieXiang',
			name: 'DaiKuanJieXiang',
			component: () => import('../../components/chenliang/DaiHou/DaiKuanJieXiang')//贷后贷款结项
		},
		{
			path: '/index/HaiKuanGuanLi',
			name: 'HaiKuanGuanLi',
			component: () => import('../../components/chenliang/DaiHou/HaiKuanGuanLi')//贷后还款管理
		},
		{
			path: '/index/YuJingCha',
			name: 'YuJingCha',
			component: () => import('../../components/chenliang/DaiHou/YuJingCha')//贷后预警查看
		},
		{
			path: '/index/YuJingNew',
			name: 'YuJingNew',
			component: () => import('../../components/chenliang/DaiHou/YuJingNew')//贷后预警修改
		},
		{
			path: '/index/YuJingAdd',
			name: 'YuJingNew',
			component: () => import('../../components/chenliang/DaiHou/YuJing/Add')//贷后预警添加
		},
		{
			path: '/index/HaiKuanGuanLiCha',
			name: 'HaiKuanGuanLiCha',
			component: () => import('../../components/chenliang/DaiHou/HaiKuanGuanLiCha')//贷后还款管理查看
		},
		{
			path: '/index/HaiKuanGuanLiLvRu',
			name: 'HaiKuanGuanLiLvRu',
			component: () => import('../../components/chenliang/DaiHou/HaiKuanGuanLiLvRu')//贷后还款管理录入
		},
		{
			path: '/index/HaiKuanQueRen',
			name: 'HaiKuanQueRen',
			component: () => import('../../components/chenliang/DaiHou/HaiKuanQueRen')//贷后还款确认
		},
		{
			path: '/index/LiLvBianGeng',
			name: 'LiLvBianGeng',
			component: () => import('../../components/chenliang/DaiHou/LiLvBianGeng')//贷后利率变更
		},
		{
			path: '/index/LiLvBianGengCha',
			name: 'LiLvBianGengCha',
			component: () => import('../../components/chenliang/DaiHou/LiLvBianGengCha')//贷后利率变更查看
		},
		{
			path: '/index/LiLvBianGengNew',
			name: 'LiLvBianGengNew',
			component: () => import('../../components/chenliang/DaiHou/LiLvBianGengNew')//贷后利率变更新增
		},
		{
			path: '/index/TiQianHaiKuan',
			name: 'TiQianHaiKuan',
			component: () => import('../../components/chenliang/DaiHou/TiQianHaiKuan')//提前还款
		},
		{
			path: '/index/TiQianHaiKuanCha',
			name: 'TiQianHaiKuanCha',
			component: () => import('../../components/chenliang/DaiHou/TiQianHaiKuanCha')//贷后提前还款查看
		},
		{
			path: '/index/DaiKuanJieXiangCha',
			name: 'DaiKuanJieXiangCha',
			component: () => import('../../components/chenliang/DaiHou/DaiKuanJieXiangCha')//贷后贷款结项查看
		},
		{
			path: '/index/DaiKuanJieXiangBanLi',
			name: 'DaiKuanJieXiangBanLi',
			component: () => import('../../components/chenliang/DaiHou/DaiKuanJieXiangBanLi')//贷后结项办理
		},
		{
			path: '/index/TiQianHaiKuanCha',
			name: 'TiQianHaiKuanCha',
			component: () => import('../../components/chenliang/DaiHou/TiQianHaiKuanCha')//贷后提前还款查看
		},
		{
			path: '/index/TiQianHaiKuanBanLi',
			name: 'TiQianHaiKuanBanLi',
			component: () => import('../../components/chenliang/DaiHou/TiQianHaiKuanBanLi')//贷后提前还款办理
		},
		{
			//客户档案管理
			path: '/index/HeiMingDan',
			name: 'HeiMingDan',
			component: () => import('../../components/chenliang/KeHuDangAn/HeiMingDan')//客户档案黑名单
		},
		{
			//客户档案管理-黑名单-查看
			path: '/index/HeiMingDan/ChaKan',
			name: 'HeiMingDan',
			component: () => import('../../components/chenliang/KeHuDangAn/HeiMingDanChaKan')//客户档案黑名单-查看
		},
		{
			path: '/index/YiZhunRuKeHu',
			name: 'YiZhunRuKeHu',
			component: () => import('../../components/chenliang/KeHuDangAn/YiZhunRuKeHu')//客户档案已准入客户管理
		},
		{
			path: '/index/HuiYuanPaiHang',
			name: 'HuiYuanPaiHang',
			component: () => import('../../components/chenliang/KeHuDangAn/HuiYuanPaiHang')//客户档案会员排行
		},
		{
			path: '/index/JieKuanShaiXuan',
			name: 'JieKuanShaiXuan',
			component: () => import('../../components/chenliang/KeHuDangAn/JieKuanShaiXuan')//客户档案借款筛选
		},
		{
			path: '/index/KeHuBiaoQian',
			name: 'KeHuBiaoQian',
			component: () => import('../../components/chenliang/KeHuDangAn/KeHuBiaoQian')//客户档案客户标签
		},
		{
			path: '/index/ShouYe',
			name: 'ShouYe',
			component: () => import('../../components/chenliang/ShouYe')//客户档案客户标签
		},
		{
			path:'/index',
			redirect: '/index/ShouYe'//重定向贷前
		}
	]
}
