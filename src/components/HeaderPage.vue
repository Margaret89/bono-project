<template>
	<header class="header">
		<choose-acc/>

		<div class="header__content">
			<my-button class="btn_green">
				<svg class="icon ic-briefcase" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
				</svg>Start shift
			</my-button>

			<header-auth/>

			<div class="header-action">
				<div class="header-action__item">
					<svg class="icon ic-msg" width="21" height="20">
						<use xlink:href="../assets/sprites/sprite.svg#ic-msg"></use>
					</svg>
				</div>

				<div class="header-action__item">
					<svg class="icon ic-notice" width="18" height="21">
						<use xlink:href="../assets/sprites/sprite.svg#ic-notice"></use>
					</svg>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import ChooseAcc from "@/components/ChooseAcc"
import HeaderAuth from "@/components/HeaderAuth"

export default {
	components: {
		ChooseAcc,
		HeaderAuth,
	},
}
</script>

<style scoped lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-shrink: 0;
		gap: 30px;
		height: 90px;
		border-bottom: 1px solid #EFEFF4;
		padding: 5px 30px;

		&__content{
			display: flex;
			align-items: center;
			gap: 25px;
		}
	}

	.header-action{
		display: flex;
		align-items: center;
		gap: 38px;
		margin-left: 20px;

		&__item{
			flex-shrink: 0;
			cursor: pointer;

			.icon{
				fill: #000;
				transition: opacity 0.2s ease 0s;
			}
		}

		&__item:hover .icon{opacity: 0.5;}
	}

	.timer-btn{
		display: inline-flex;
		align-items: center;
		gap: 7px;
		height: 4.4rem;
		border-radius: 2.2rem;
		border: 1px solid #EFEFF4;
		@include font(none, 500, 1.3rem, none, #000);
		padding: 0 20px;

		.icon{
			fill: #000;
			flex-shrink: 0;
		}

		&__end{
			font-weight: 500;
			color: $color-red;
			margin-left: 18px;
		}
	}
</style>