<template>
	<div class="switch">
		<input type="checkbox" :id=idswitch :value="modelValue" @change="updateCheck">
		<label class="switch__content" :for=idswitch>
			<div class="switch__marker"></div>
		</label>
		<div class="switch__text"><slot></slot></div>
	</div>
</template>

<script>
export default {
	name: 'my-switch',
	props: {
		modelValue: Boolean,
		idswitch: [String, Number],
	},
	methods:{
		updateCheck(event) {
			this.$emit('update:modelValue', event.target.checked)
		}
	}
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.switch{
		display: inline-flex;
		align-items: center;
		gap: 12px;

		input[type="checkbox"]{display: none;}

		&__content{
			display: inline-block;
			vertical-align: top;
			width: 36px;
			height: 22px;
			border-radius: 11px;
			background: rgba(0,0,0,0.15);
			cursor: pointer;
			margin: 0;
			position: relative;
			transition: all 0.3s ease;
		}

		&__marker{
			display: inline-block;
			width: 14px;
			height: 14px;
			background: #fff;
			border-radius: 50%;
			position: absolute;
			@include top-center;
			right: 5px;
			transition: all 0.3s ease;
		}

		&__text{
			@include font(none, 500, 1.3rem, 1.2, #000);
		}

		input[type="checkbox"]:checked + &__content{background: #000;}
		input[type="checkbox"]:checked + &__content &__marker{left: 5px; right: auto;}
	}
</style>