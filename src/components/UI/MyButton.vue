<template>
	<span class="btn">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style lang="scss">
	@import '../../assets/styles/mixins.scss';
	@import '../../assets/styles/vars.scss';

	.btn,
	input[type="submit"].btn,
	button.btn{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: 4.4rem;
		border-radius: 2.2rem;
		background: #000;
		border: none;
		@include font(normal, 500, 1.2rem, 1.2, #fff);
		text-decoration: none;
		text-align: center;
		padding: 0 25px;
		cursor: pointer;
		transition: all 0.2s ease 0s;

		.icon{
			fill: #fff;
			transition: fill 0.2s ease 0s;
		}

		&:hover{
			background: #3b3b3b;
			color: #fff;
		}

		&_green{
			background: rgba(15,173,104,0.06);
			color: #0FAD68;

			.icon{fill: #0FAD68;}

			&:hover{
				background: rgba(15,173,104,0.15);
				color: #0FAD68;
			}
		}

		&_red{
			background: $color-red;
			&:hover{background: #f73643;}
		}

		&_red-light{
			background: rgba(255,77,90,0.06);
			color: $color-red;

			.icon{fill: $color-red;}
			
			&:hover{
				background: $color-red;
				color: #fff;
				.icon{fill: #fff;}
			}
		}

		&_grey{
			background: #F9F9FB;
			color: #8A919F;

			.icon{fill: #8A919F;}

			&:hover .icon{fill: #fff;}
		}

		&_border{
			background: #fff;
			border: 1px solid #F5F5F9;
			color: #000;

			.icon{fill: #000;}
			
			&:hover{
				color: #000;
				background: #F5F5F9;
			}
		}

		&_border-dark{
			background: #fff;
			border: 1px solid #000;
			color: #000;

			.icon{fill: #000;}
			
			&:hover{
				color: #fff;
				background: #000;

				.icon{fill: #fff;}
			}
		}

		&_white{
			background: rgba(255,255,255,0.15);
			color: #fff;
		}

		&_white-fill{
			background: #fff;
			color: #000;

			.icon{fill: #000;}

			&:hover{
				background: #3b3b3b;
				color: #fff;

				.icon{fill: #fff;}
			}
		}

		&_opacity{
			height: auto;
			background: transparent;
			padding: 0;
			color: #000;

			.icon{fill: #000;}

			&:hover{
				background: transparent;
				color: #8A919F;
				.icon{fill: #8A919F;}
			}
		}

		&_middle{
			height: 3.4rem;
			border-radius: 1.7rem;
			padding: 0 20px;
		}

		&_small{
			height: 2.6rem;
			border-radius: 1.3rem;
			padding: 0 12px;
		}
	}

	.btn[disabled="disabled"],
	.btn[disabled="disabled"]:hover{
		background: #E4E4EA;
		color: #fff;
		cursor: auto;

		.icon{fill: #fff;}
	}
</style>