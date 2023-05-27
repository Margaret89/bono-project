<template>
	<div class="choose-input">
		<div class="choose-input__field">
			<input type="text" name="people" placeholder="Invite people">

			<div class="choose-input__btn" @click="this.openPopup=!this.openPopup">
				<svg class="icon ic-plus" width="10" height="10">
					<use xlink:href="../../assets/sprites/sprite.svg#ic-plus"></use>
				</svg>
			</div>
		</div>

		<div class="choose-input__popup" :class="{ active: this.openPopup }">
			<div
				class="choose-input__item"
				v-for="(option, index) in options"
				:key="index"
				@click="resListOptions(index, stepNumber)"
			>
				 <div class="choose-input__img" :style="{'background-image': 'url(' + require('../../assets/img/'+option.img) + ')'}"></div>
				 <div class="choose-input__info">
					<div class="choose-input__name">{{ option.name }}</div>
					<div class="choose-input__mail">{{ option.mail }}</div>
				</div>
			</div>
		</div>

		<div class="choose-input-res">
			<div
				class="choose-input-res__item"
				v-for="(item, index) in resultOptions"
				:key="index"
				
			>
				<div
					class="choose-input-res__img"
					:style="{'background-image': 'url(' + require('../../assets/img/'+item.img) + ')'}"
				></div>
				<div class="choose-input-res__text">{{ item.name }}</div>

				<div
					class="choose-input-res__btn"
					@click="delItem(index)"
				>
					<svg class="icon ic-minus" width="7" height="1">
						<use xlink:href="../../assets/sprites/sprite.svg#ic-minus"></use>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'choose-input',
	data() {
		return{
			openPopup: false,
			resultOptions: [],
			stepUp: false,
		}
	},
	props: {
		options: {
			type: Array,
			default: () => []
		},
		stepNumber: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		//Save result item
		resListOptions(index, stepNumber) {
			let availableOption = false;
			let idOption = this.options[index].id;

			for (let index = 0; index < this.resultOptions.length; index++) {
				if(idOption == this.resultOptions[index].id){
					availableOption = true
				}
			}

			if(availableOption === false){
				this.resultOptions.push(this.options[index]);
			}

			// if(this.resultOptions.length > 0 && this.stepUp === false){
			// 	// this.stepNumber++;
			// 	this.stepNumber = 3;

			// 	console.log('this.stepNumber = ', this.stepNumber);
			// 	console.log('this.stepNumber = ', typeof this.stepNumber);
			// 	this.stepUp = true;
			// }
		},

		//Delete result item
		delItem(index) {
			this.resultOptions.splice(index, 1); 
			
			if(this.resultOptions.length == 0){
				this.stepNumber--;
			}
		},
	}
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.choose-input{
		position: relative;

		input[type="text"]{
			display: inline-flex;
			align-items: center;
			height: 4.4rem;
			width: 100%;
			font-family: $font-site;
			@include font(none, 500, 1.3rem, 1, $color-text);
			padding: 0 40px 0 20px;
			border: 1px solid #E8E9EC;
			border-radius: 2.2rem;
			outline: 0;
			margin: 0;
			background: transparent;
			box-shadow: none;
			transition: border 0.2s ease 0s;
		}

		input[type="text"]:focus{border-color: #000;}

		input[type="text"]::placeholder{
			color: #8A919F;
			opacity: 1;
		}

		&__field{position: relative;}

		&__btn{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			background: #F5F5F9;
			@include font(none, none, 1.8rem, 1, #000);
			position: absolute;
			top: 50%;
			right: 8px;
			transform: translateY(-50%);
			cursor: pointer;
			transition: background 0.2s ease 0s;

			.icon{
				fill: #000;
				transition: fill 0.2s ease 0s;
			}

			&:hover{
				background: #000;
				.icon{fill: #fff;}
			}
		}

		&__popup{
			display: none;
			width: 100%;
			background: #fff;
			border: 1px solid #F5F5F9;
			border-radius: 15px;
			box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.05);
			padding: 6px 0;
			position: absolute;
			top: calc(100% + 8px);
			left: 0;

			&.active{display: block;}
		}

		&__item{
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 16px 22px;
			cursor: pointer;
			transition: background 0.2s ease 0s;

			&:hover{background: #F5F5F9;}
		}

		&__item:not(:last-child){border-bottom: 1px solid #F5F5F9;}

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

		&__name{
			@include font(none, 500, 1.4rem, 1.2, #000);
		}

		&__mail{
			@include font(none, none, 1.3rem, 1.2, #8A919F);
		}
	}

	.choose-input-res{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 15px;

		&__item{
			display: inline-flex;
			align-items: center;
			border-radius: 1.7rem;
			background: #F5F5F9;
			padding: 5px 8px;
		}

		&__img{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 24px;
			height: 24px;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			margin-right: 7px;
		}

		&__text{
			@include font(none, none, 1.3rem, 1.2, #000);
		}

		&__btn{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			border: 1px solid #000;
			margin-left: 20px;
			cursor: pointer;
			transition: border 0.2s ease 0s;

			.icon{
				fill: #000;
				transition: fill 0.2s ease 0s;
			}

			&:hover{
				border-color: #8A919F;
				.icon{fill: #8A919F;}
			}
		}
	}
</style>