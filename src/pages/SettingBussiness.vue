<template>
	<section class="settings">
		<setting-menu/>

		<div class="settings__wrap">
			<div class="settings__content" style="width: 900px;">
				<div class="settings__title">Business</div>
				<form class="form-site">
					<div class="form-site__ava-wrap">
						<div
							class="form-site__ava"
							:style="{'background-image': 'url(' + require('../assets/img/google_plus.svg') + ')'}"
						></div>
						<div class="btn-circle btn-circle_grey">
							<svg class="icon ic-photo" width="17" height="17">
								<use xlink:href="../assets/sprites/sprite.svg#ic-photo"></use>
							</svg>
						</div>
					</div>
					<div class="form-site__content">
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Business name</div>
							<input type="text" placeholder="E.g. Google">
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Primary line of business</div>
							<div class="select">
								<div class="select__field">None
									<div class="select__arr">
										<svg class="icon ic-arrow-down" width="11" height="6">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
										</svg>
									</div>
								</div>
								<div class="select__popup">
									<div class="select__item">
										<div class="select__text">Parameters</div>
									</div>
									<div class="select__item">
										<div class="select__text">Parameters</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Business number</div>
							<input type="text" placeholder="E.g. Google">
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Secondary line of business</div>
							<div class="select">
								<div class="select__field">None
									<div class="select__arr">
										<svg class="icon ic-arrow-down" width="11" height="6">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
										</svg>
									</div>
								</div>
								<div class="select__popup">
									<div class="select__item">
										<div class="select__text">Parameters</div>
									</div>
									<div class="select__item">
										<div class="select__text">Parameters</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Address</div>
							<input type="text" placeholder="E.g. Google">
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">&nbsp;</div>
							<div class="form-site-edit">
								<div class="form-site-edit__text">Working hours</div>
								<div class="form-site-edit__btn">
									<svg class="icon ic-edit" width="14" height="14">
										<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
									</svg>
								</div>
							</div>
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">Country</div>
							<input type="text" placeholder="E.g. Google">
						</div>
						<div class="form-site__item form-site__item_half">
							<div class="form-site__label">&nbsp;</div>
							<div class="form-site-edit">
								<div class="form-site-edit__text">Business signature</div>
								<div class="form-site-edit__btn">
									<svg class="icon ic-edit" width="14" height="14">
										<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import SettingMenu from '@/components/SettingMenu.vue'
export default {
  components: { SettingMenu },
	
}
</script>

<style scoped>

</style>