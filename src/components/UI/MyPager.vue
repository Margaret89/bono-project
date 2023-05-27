<template>
	<div class="pager">
		<a class="pager__nav">
			<svg class="icon ic-arr-left" width="10" height="8">
				<use xlink:href="../../assets/sprites/sprite.svg#ic-arr-left"></use>
			</svg>Previous
		</a>

		<div class="pager__list">
			<a class="pager__item active" href="#">1</a>
			<a class="pager__item" href="#">2</a>
			<a class="pager__item" href="#">3</a>
			<span class="pager__item">...</span>
			<a class="pager__item" href="#">8</a>
			<a class="pager__item" href="#">9</a>
			<a class="pager__item" href="#">10</a>
		</div>

		<a class="pager__nav">Next
			<svg class="icon ic-arr-right" width="10" height="8">
				<use xlink:href="../../assets/sprites/sprite.svg#ic-arr-right"></use>
			</svg>
		</a>
		<!-- {{ count }} -->
	</div>
</template>

<script>
export default {
	name: 'my-pager',
	props: {
		count: Number,
	},
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.pager{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 25px;
		
		&__list{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 2px;
		}

		&__item{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: top;
			width: 38px;
			height: 38px;
			border-radius: 50%;
			@include font(none, none, 1.3rem, 1, $color-text);
			text-decoration: none;
			transition: all 0.2s ease;
		}

		&__item:hover,
		&__item.active{
			background: #EDEDF2;
			font-weight: 500;
			color: $color-text;
		}

		&__nav{
			display: inline-flex;
			align-items: center;
			gap: 15px;
			height: 38px;
			border-radius: 19px;
			@include font(none, none, 1.3rem, 1, $color-text);
			border: 1px solid #F5F5F9;
			padding: 0 20px;
			cursor: pointer;
			transition: all 0.2s ease 0s;

			.icon{
				flex-shrink: 0;
				fill: $color-text;
				transition: fill 0.2s ease 0s;
			}
		}

		&__nav:hover{
			background: #EDEDF2;
			color: $color-text;
		}

		&__nav.disable{opacity: 0.5;}
	}
</style>