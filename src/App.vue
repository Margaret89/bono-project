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
	@import './assets/styles/table-site.scss';
	@import './assets/styles/modal.scss';
	@import './assets/styles/profile-info.scss';
	@import './assets/styles/form-site.scss';
	@import './assets/styles/main-page.scss';
	@import './assets/styles/view.scss';
	@import './assets/styles/select-check.scss';
	@import './assets/styles/filter.scss';
	@import './assets/styles/tooltip.scss';
	@import './assets/styles/rating.scss';
	@import './assets/styles/popup-actions.scss';
	@import './assets/styles/player.scss';
	@import './assets/styles/history-modal.scss';
	@import './assets/styles/cards.scss';
	@import './assets/styles/profile-card.scss';
	@import './assets/styles/notice.scss';
	@import './assets/styles/modal-main.scss';
	@import './assets/styles/add-block.scss';
	@import './assets/styles/color-edit.scss';
	@import './assets/styles/credit-history.scss';
	@import './assets/styles/file-upload.scss';
	@import './assets/styles/left-menu.scss';
	@import './assets/styles/settings.scss';
</style>