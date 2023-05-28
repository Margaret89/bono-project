<template>
	<div class="select" :class="{ open: this.openPopup }">
		<div class="select__main" @click="this.openPopup=!this.openPopup" v-if="value">
			{{ value }}
			<div class="select__arr">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</div>
		</div>
		<div class="select__main" @click="this.openPopup=!this.openPopup" v-if="value">
			{{ value }}
			<div class="select__arr">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</div>
		</div>

		<div class="select__list">
			<div
				class="select__option"
				v-for="(item, index) in selectList"
				:key="index"
				:class="{ active: this.activeItem }"
				@click="changeOption(index)"
			>
				{{ item.text }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-select',
	props: {
		value: String,
		selectList: Array,
	},
	data() {
		return {
			openPopup: false,
			activeItem: false,
		}
	},
	methods: {
		changeOption(index) {
			this.$emit('update:value', this.selectList[index].text)
		}
	}
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.select{
		position: relative;

		&__main{
			display: inline-flex;
			align-items: center;
			gap: 38px;
			height: 4.4rem;
			border-radius: 2.2rem;
			border: 1px solid #F5F5F9;
			padding: 5px 20px;
			cursor: pointer;
			transition: background 0.2s ease 0s;

			.icon{
				fill: #000;
				flex-shrink: 0;
			}

			&:hover{background: #F5F5F9;}
		}

		&__arr{
			transition: transform 0.2s ease 0s;

			.icon{fill: rgba(0,0,0,0.2);}
		}

		&__list{
			display: none;
			width: 180px;
			padding: 10px 15px;
			max-height: 230px;
			border: 1px solid #F5F5F9;
			border-radius: 15px;
			background: #fff;
			padding: 15px 23px;
			position: absolute;
			top: calc(100% + 3px);
			left: 0;
			overflow-y: auto;
			z-index: 10;
		}

		&__option:not(:last-child){margin-bottom: 18px;}

		&__option{
			@include font(none, none, 1.3rem, 1.6, $color-text);
			transition: all 0.2s ease 0s;
			cursor: pointer;

			&.active,
			&:hover{
				color: #8a919f;
			}
		}

		&.open &__btn{background: #F5F5F9;}
		&.open &__arr{transform: rotate(180deg);}
		&.open &__list{display: inline-block;}
	}
</style>