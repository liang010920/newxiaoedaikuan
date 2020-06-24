<template>
	<div id="app">
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Header></Header>
			<keep-alive>
				<ChuLi></ChuLi>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Sidebar from '../../components/lzh/Sidebar'
	import Header from '../../components/lzh/Header'
	import ChuLi from '../../components/lzh/FangKuanChuLi'
	export default {
		name: 'FangKuanChuLi',
		components: {
			Sidebar,
			Header,
			ChuLi
		}
	}
</script>