<template>
	<div id="app">
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Header></Header>
			<keep-alive>
				<GuanLi></GuanLi>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/lzh/Header'
	import Sidebar from '../../components/lzh/Sidebar'
	import GuanLi from '../../components/lzh/HeTongGuanLi'
	export default {
		name:'HeTongGuanLi',
		components:{
			Header,
			Sidebar,
			GuanLi
		}
	}
</script>