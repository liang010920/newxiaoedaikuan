<template>
	<div id="app">
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Header></Header>
			<keep-alive>
				<ShouXin></ShouXin>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Sidebar from '../../components/lzh/Sidebar'
	import Header from '../../components/lzh/Header'
	import ShouXin from '../../components/lzh/ChanPinShouXin'
	export default {
		name: 'ChanPinShouXin',
		components: {
			Sidebar,
			Header,
			ShouXin
		}
	}
</script>