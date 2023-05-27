<template>
	<div class="app">
		<div class="wrapper">
			<sidebar/>

			<div class="wrapper__content">
				<header-page/>

				<main>
					<router-view></router-view>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import HeaderPage from "@/components/HeaderPage"

export default {
	components: {
		Sidebar, HeaderPage
	},
}
</script>

<style lang="scss">
	@import './assets/styles/reset.scss';
	@import './assets/styles/mixins.scss';
	@import './assets/styles/vars.scss';
	@import './assets/styles/fonts.scss';
	@import './assets/styles/main.scss';
	@import './assets/styles/icons.scss';
	@import './assets/styles/tabs-page.scss';
	@import './assets/styles/tag.scss';
	@import './assets/styles/page.scss';
</style>