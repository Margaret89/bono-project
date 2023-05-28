<template>
	<form class="form-search">
		<input
			type="text"
			name="search"
			placeholder="Search"
			:to="`${modelValue}`"
			@input="updateInput"
		>
		
		<button class="form-search__btn" type="submit">
			<svg class="icon ic-search" width="15" height="15">
				<use xlink:href="../../assets/sprites/sprite.svg#ic-search"></use>
			</svg>
		</button>
	</form>
</template>

<script>
export default {
	name: 'my-form-search',
	props: {
		modelValue: [String, Number],
	},
	methods:{
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.form-search{
		position: relative;

		input[type="text"]{
			display: inline-flex;
			align-items: center;
			height: 4.4rem;
			width: 188px;
			font-family: $font-site;
			@include font(none, none, 1.3rem, 1, $color-text);
			padding: 0 20px 0 50px;
			border: 1px solid #F5F5F9;
			border-radius: 2.2rem;
			outline: 0;
			margin: 0;
			background: #F5F5F9;
			box-shadow: none;
			transition: border 0.2s ease 0s;
		}

		input[type="text"]:focus{border-color: #000;}

		// input[type="text"]::placeholder{
		// 	color: #8A919F;
		// 	opacity: 1;
		// }

		&__btn{
			background: transparent;
			border: none;
			outline: none;
			font-size: 0;
			box-shadow: none;
			position: absolute;
			top: 50%;
			left: 16px;
			transform: translateY(-50%);
		}
	}
</style>