import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Hello from '../components/Hello.vue'
import index from './DaiKuanZuo/index.js'
import QuanXian from './QuanXian'
import DaiZhong from './DaiZhong/index.js'
import Login from './Login/index.js'
import Register from './Register'
import BangZhuXiangQing from './BangZhuXiangQing'
import FanKuiXiangQing from './FanKuiXiangQing'
import YunYing from './YunYing/index.js'
import XiTongGuanLi from './XiTongGuanLi/index.js'
import XiTongFenXi from './XiTongFenXi/index.js'
import XiTongSheZhi from './XiTongSheZhi/index.js'

import PWJCp from './cp/index.js'
import PWJCW from './cw/index.js'
import PWJCS from './cs/index.js'

Vue.use(VueRouter)

//   const routes = [
//   // {
//   //   path: '/',
//   //   name: 'Hello',
//   //   component: Hello
//   // },
//   {
//     path: '/index',
//     name: 'index',
//     component: index
//   },
// ]

export default new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		index,
		QuanXian,
		DaiZhong,
		Login,
		Register,
		YunYing,
		PWJCp,
		PWJCW,
		PWJCS,
		BangZhuXiangQing,
		FanKuiXiangQing,
		XiTongGuanLi,
		XiTongFenXi,
		XiTongSheZhi,
		{
			path: '/*',
			redirect: '/Login'
		},
	]
})

// export default router
