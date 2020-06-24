<template>
	<div id="app">
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Header></Header>
			<keep-alive>
				<ShenPi></ShenPi>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Sidebar from '../../components/lzh/Sidebar'
	import Header from '../../components/lzh/Header'
	import ShenPi from '../../components/lzh/FangKuanShenPi'
	export default {
		name: 'FangKuanShenPi',
		components: {
			Sidebar,
			Header,
			ShenPi
		}
	}
</script>