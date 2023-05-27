<template>
	<label class="input-check">
		<input type="checkbox" :value="modelValue" @change="updateCheck">
		<span class="input-check__mark">
			<svg class="icon ic-tick" width="8" height="6">
				<use xlink:href="../../assets/sprites/sprite.svg#ic-tick"></use>
			</svg>
		</span>
		<span class="input-check__text"><slot></slot></span>
	</label>
</template>

<script>
export default {
	name: 'my-checkbox',
	props: {
		modelValue: Boolean,
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

	.input-check{
		display: inline-flex;
		align-items: center;
		gap: 12px;
		@include font(normal, normal, 1.3rem, 1.6, none);
		margin: 0;
		position: relative;
		cursor: pointer;
		transition: color 0.2s ease 0s;

		input[type=checkbox]{display: none;}

		&__mark{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: top;
			flex-shrink: 0;
			width: 14px;
			height: 14px;
			border-radius: 5px;
			border: 1px solid #D5DBDE;
			background: #fff;
			position: relative;

			.icon{
				display: none;
				position: absolute;
				fill: #fff;
				@include top-center;
				left: 0;
				right: 0;
				margin: 0 auto;
			}
		}

		.link-site:hover{text-decoration: none;}

		input[type=checkbox]:checked ~ &__mark{
			background: #000;
			border-color: #000;
		}

		input[type=checkbox]:checked ~ &__mark .icon{display: inline-block;}
	}

</style>