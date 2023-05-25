<template>
	<div class="choose-acc" :class="{ open: this.openPopup }">
		<div class="choose-acc__top" @click="this.openPopup=!this.openPopup">
			<div class="choose-acc__img" :style="{'background-image': 'url(' + require('../assets/img/'+options[activeItem].img) + ')'}"></div>

			<div class="choose-acc__text">{{ options[activeItem].title }}</div>
			<div class="choose-acc__arr">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</div>
		</div>

		<div class="choose-acc-popup">
			<div class="choose-acc-popup__search">
				<input
					type="text"
					placeholder="Search"
					v-model="searchQuery"
				>

				<svg class="icon ic-search" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-search"></use>
				</svg>
			</div>

			<div
				class="choose-acc-popup__item"
				v-for="(item, index) in SearcheOptions"
				:key="index"
				@click="changeOption(item.id)"
				:class="{ active: item.id == activeItem}"
			>
				<div class="choose-acc-popup__content">
					<div class="choose-acc-popup__img" :style="{'background-image': `url(${require('../assets/img/'+item.img)})`}"></div>

					<div class="choose-acc-popup__info">
						<div class="choose-acc-popup__title">{{ item.title }}</div>
						<div class="choose-acc-popup__mail">{{ item.mail }}</div>
					</div>
				</div>

				<div class="choose-acc-popup__check">
					<svg class="icon ic-tick" width="8" height="6">
						<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return{
			options: [
				{id:'0', img:'google_plus.svg', title:'Google', mail:'googleplus@gmail.com', status:true},
				{id:'1', img:'zara.png', title:'Zara', mail:'info@zara.com'},
				{id:'2', img:'google_plus.svg', title:'Google 2', mail:'googleplus@gmail.com'},
				{id:'3', img:'google_plus.svg', title:'Google 3', mail:'googleplus@gmail.com'},
			],
			openPopup: false,
			activeItem: 0,
			searchQuery: '',
		}
	},
	methods: {
		changeOption(id) {
			this.activeItem = id;
		}
	},
	computed: {
		SearcheOptions() {//Поиск
			return this.options.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		}
	},
}
</script>

<style scoped lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.choose-acc{
		position: relative;

		&__top{
			display: inline-flex;
			align-items: center;
			gap: 18px;
			cursor: pointer;
		}

		&__img{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 44px;
			height: 44px;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}

		&__text{
			@include font(none, none, 2rem, 1.2, #000);
		}

		&__arr{
			.icon{fill: rgba(0,0,0,0.2);}
		}

		&.open .choose-acc-popup{
			transform: scaleY(1);
			opacity: 1;
		}
	}

	.choose-acc-popup{
		width: 380px;
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

		&__search{
			padding: 15px 20px;
			position: relative;

			input[type="text"]{
				display: flex;
				align-items: center;
				height: 2rem;
				width: 100%;
				font-family: 'SF Pro Display', Arial, sans-serif;
				@include font(none, none, 1.3rem, 1, $color-text);
				padding: 0 20px 0 30px;
				border: none;
				outline: 0;
				margin: 0;
				background: transparent;
				box-shadow: none;
			}
		
			.ic-search{
				position: absolute;
				top: 50%;
				left: 20px;
				transform: translateY(-50%);
			}
		}

		&__item:not(:first-child){border-top: 1px solid #F5F5F9;}

		&__item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			padding: 15px 20px;
			transition: background 0.2s ease 0s;
			cursor: pointer;

			&:hover{background: #FBFBFC;}
		}

		&__content{
			display: inline-flex;
			align-items: center;
			gap: 10px;
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
		}

		&__title{
			@include font(none, 600, 1.4rem, 1.5, #000);
		}

		&__mail{
			@include font(none, none, 1.3rem, 1.5, #8A919F);
		}

		&__check{
			display: none;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: rgba(15,173,104,0.06);

			.icon{fill: $color-green;}
		}

		&__item.active &__check{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
		}
	}
</style>