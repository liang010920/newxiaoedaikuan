<template>
	<div id="app">
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Header></Header>
			<MenuName></MenuName>	
		</div>
	</div>
</template>

<script>
	import Sidebar from '../../components/lzh/Sidebar'
	import Header from '../../components/lzh/Header'
	import MenuName from '../../components/lzh/MenuName'
	export default {
		name:'Menu',
		components:{
			Sidebar,
			Header,
			MenuName
		}
	}
</script>