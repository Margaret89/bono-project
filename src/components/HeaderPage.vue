<template>
	<header class="header">
		<choose-acc/>

		<div class="header__content">
			<my-button class="btn_green">
				<svg class="icon ic-briefcase" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
				</svg>Start shift
			</my-button>

			<div class="header-auth">
				<div class="header-auth__img" :style="{'background-image': `url(${require('../assets/img/woman.png')})`}"></div>

				<div class="header-auth__info">
					<div class="header-auth__name">Jhon Doe</div>
					<div class="header-auth__mail">Jhon@bono.com</div>
				</div>
				<div class="header-auth__arr">
					<svg class="icon ic-arrow-down" width="11" height="6">
						<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
					</svg>
				</div>
				<div class="header-auth__popup">
					<div class="header-auth__item">Edit profile</div>
					<div class="header-auth__item">My shifts</div>
					<div class="header-auth__item">Settings</div>
					<div class="header-auth__exit">
						<svg class="icon ic-logout" width="16" height="16">
							<use xlink:href="../assets/sprites/sprite.svg#ic-logout"></use>
						</svg>Logout
					</div>
				</div>
			</div>

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

export default {
	components: {
		ChooseAcc,
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

	

	.header-auth{
		display: inline-flex;
		align-items: center;
		position: relative;

		&__img{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			margin-right: 5px;
		}

		&__name{
			@include font(none, 500, 1.5rem, 1.2, #000);
		}

		&__mail{
			@include font(none, none, 1.4rem, 1.2, #8A919F);
		}

		&__arr{
			margin-left: 15px;
			.icon{fill: rgba(0,0,0,0.2);}
		}

		&__popup{
			display: none;
			width: 184px;
			border-radius: 22px;
			border: 1px solid #F5F5F9;
			background: #fff;
			overflow: hidden;
			box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
			margin-top: 16px;
			position: absolute;
			top: 100%;
			left: 0;
		}

		&__item{
			padding: 12px 20px 13px;
			@include font(none, none, 1.3rem, none, $color-text);
			transition: background 0.2s ease 0s;
			cursor: pointer;

			&:hover{background: #FBFBFC;}
		}

		&__item:not(:last-child){border-bottom: 1px solid #F5F5F9;}

		&__exit{
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 12px;
			padding: 16px 20px;
			background: rgba(255,77,90,0.03);
			@include font(none, 500, 1.3rem, none, $color-red);
			transition: background 0.2s ease 0s;
			cursor: pointer;

			.icon{fill: $color-red;}
			&:hover{background: rgba(255,77,90,0.15);}
		}

		&.open &__popup{display: inline-block;}
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