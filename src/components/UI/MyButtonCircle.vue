<template>
	<router-link :to="link" class="btn-circle" v-if="link">
		<slot></slot>
	</router-link>

	<div class="btn-circle" v-else>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'my-button-circle',
	props: {
		link: String,
	},
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.btn-circle{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #000;
		cursor: pointer;
		transition: background-color 0.2s ease 0s;

		.icon{fill: #fff;}

		&:hover{background: #3b3b3b;}

		&_big{
			width: 40px;
			height: 40px;
		}

		&_grey{
			background: #F5F5F9;

			.icon{fill: #000;}
			&:hover .icon{fill: #fff;}
		}

		&_opacity{
			background: transparent;

			.icon{fill: #000;}
			&:hover{background: #F5F5F9;}
			&:hover .icon{fill: #000;}
		}
	}
</style>