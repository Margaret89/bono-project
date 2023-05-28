<template>
	<section class="profile-card-wrap">
		<div class="profile-card-wrap__content">
			<span class="btn btn_white-fill btn_middle">
				<svg class="icon ic-arr-left" width="10" height="8">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
				</svg>Back
			</span>

			<div class="profile-card">
				<div class="profile-card__top">
					<div class="profile-card__img" :style="{'background-image': `url(${require('../assets/img/woman-ava.png')})`}"></div>

					<my-button-circle class="btn-circle_grey">
						<svg class="icon ic-edit" width="12" height="12">
							<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
						</svg>
					</my-button-circle>
				</div>

				<div class="profile-card__content">
					<div class="profile-card__main">
						<div class="profile-card__head">
							<div class="profile-card__title">Amanda Smith</div>
							<div class="profile-card__tag">Owner</div>
						</div>

						<div class="profile-card-city">
							<div class="profile-card-city__flag"><img src="../assets/img/usa-flag.jpg" alt=""></div>
							<div class="profile-card-city__text">Los Angeles, United States</div>
						</div>
						
						<span class="btn btn_border-dark">
							<svg class="icon ic-chat" width="15" height="15">
								<use xlink:href="../assets/sprites/sprite.svg#ic-chat"></use>
							</svg>Message
						</span>
					</div>

					<div class="profile-card-info">
						<div class="profile-card-info__col">
							<div class="profile-card-info__title">Info</div>

							<div class="profile-card-info__item">
								<div class="profile-card-info__label">Phone</div>
								<div class="profile-card-info__val">+1 806 1239 3284</div>
							</div>

							<div class="profile-card-info__item">
								<div class="profile-card-info__label">Email</div>
								<div class="profile-card-info__val">schuppe.jany@hotmail.com</div>
							</div>

							<div class="profile-card-info__item">
								<div class="profile-card-info__label">Languages</div>
								<div class="profile-card-info__val">English, Hebrew</div>
							</div>
						</div>

						<div class="profile-card-info__col">
							<div class="profile-card-info__title">About</div>
							<div class="profile-card-info__desc">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and search for 'loremipsum'will uncover many web sites still in their infancy um as their.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import MyButtonCircle from '@/components/UI/MyButtonCircle.vue'
export default {
  components: { MyButtonCircle },
}
</script>

<style scoped>

</style>