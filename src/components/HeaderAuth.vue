<template>
	<div class="header-auth" :class="{ open: this.openPopup }">
		<div class="header-auth__top" @click="this.openPopup=!this.openPopup">
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
</template>

<script>
export default {
	data() {
		return{
			openPopup: false,
		}
	},
}
</script>

<style scoped lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.header-auth{
		position: relative;

		&__top{
			display: inline-flex;
			align-items: center;
			cursor: pointer;
		}

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
			display: inline-block;
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
			transform: scaleY(0);
			transform-origin: 0 0;
			opacity: 0;
			transition: all 0.2s ease 0s;
			overflow: hidden;
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

		&.open &__popup{
			transform: scaleY(1);
			opacity: 1;
		}
	}

</style>