<template>
  <!-- <v-date-picker v-model="date" /> -->
	<div class="filter-date" :class="{ open: this.openPopup }">
		<div class="filter-date-btn"  @click="this.openPopup=!this.openPopup">
			<span class="filter-date-btn__content">
				<svg class="icon ic-calendar" width="16" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-calendar"></use>
				</svg>

				<span class="filter-date-btn__text">Filter by date</span>
			</span>
			<span class="filter-date-btn__arr">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</span>
		</div>

		<div class="filter-date__popup">
			<div class="calendar">
				<div class="calendar-period">
					<div class="calendar-period__item active">Custom</div>
					<div class="calendar-period__item">Today</div>
					<div class="calendar-period__item">Yesterday</div>
					<div class="calendar-period__item">This week</div>
					<div class="calendar-period__item">Last week</div>
					<div class="calendar-period__item">This month</div>
					<div class="calendar-period__item">Last month</div>
					<div class="calendar-period__item">Alll time</div>
				</div>
				<div class="calendar-main">
					<div class="calendar-main__top">
						<div class="calendar-main__title">December 2023</div>
						<div class="calendar-main__arrows">
							<div class="calendar-main__arr">
								<svg class="icon ic-arrow-left" width="6" height="11">
									<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-left"></use>
								</svg>
							</div>
							<div class="calendar-main__arr">
								<svg class="icon ic-arrow-right" width="6" height="11">
									<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
								</svg>
							</div>
						</div>
					</div>
					<div class="calendar-main__content">
						<div class="calendar-main__label">S</div>
						<div class="calendar-main__label">M </div>
						<div class="calendar-main__label">T</div>
						<div class="calendar-main__label">W</div>
						<div class="calendar-main__label">T</div>
						<div class="calendar-main__label">F</div>
						<div class="calendar-main__label">S</div>
						<div class="calendar-main__item disabled">27</div>
						<div class="calendar-main__item disabled">28</div>
						<div class="calendar-main__item disabled">29</div>
						<div class="calendar-main__item disabled">30</div>
						<div class="calendar-main__item">1</div>
						<div class="calendar-main__item">2</div>
						<div class="calendar-main__item">3</div>
						<div class="calendar-main__item">4</div>
						<div class="calendar-main__item">5</div>
						<div class="calendar-main__item active">6</div>
						<div class="calendar-main__item selected">7</div>
						<div class="calendar-main__item selected">8</div>
						<div class="calendar-main__item selected">9</div>
						<div class="calendar-main__item selected">10</div>
						<div class="calendar-main__item selected">11</div>
						<div class="calendar-main__item selected">12</div>
						<div class="calendar-main__item selected">13</div>
						<div class="calendar-main__item selected">14</div>
						<div class="calendar-main__item active">15</div>
						<div class="calendar-main__item">16</div>
						<div class="calendar-main__item">17</div>
						<div class="calendar-main__item">18</div>
						<div class="calendar-main__item">19</div>
						<div class="calendar-main__item">20</div>
						<div class="calendar-main__item">21</div>
						<div class="calendar-main__item">22</div>
						<div class="calendar-main__item">23</div>
						<div class="calendar-main__item">24</div>
						<div class="calendar-main__item">25</div>
						<div class="calendar-main__item">26</div>
						<div class="calendar-main__item">27</div>
						<div class="calendar-main__item">28</div>
						<div class="calendar-main__item">29</div>
						<div class="calendar-main__item">30</div>
						<div class="calendar-main__item">31</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { Calendar, DatePicker } from 'v-calendar';

export default {
//   components: {
//     Calendar,
//     DatePicker,
//   },
	data() {
		return {
		//   date: new Date(),
			openPopup: false,
		};
	},
	
}
</script>


<style lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.filter-date{
		position: relative;

		&__popup{
			display: none;
			border-radius: 10px;
			border: 1px solid #F5F5F9;
			background: #fff;
			box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.25);
			position: absolute;
			top: calc(100% + 3px);
			right: 0;
			z-index: 10;
		}

		&.open{
			.filter-date-btn{
				background: #F5F5F9;
				&:hover{background: #3b3b3b;}
				&:hover .filter-date-btn__content{color: #fff;}
				&:hover .filter-date-btn__arr{opacity: 1;}

				&:hover .filter-date-btn__content .icon,
				&:hover .filter-date-btn__arr .icon{
					fill: #fff;
				}
			}

			.filter-date-btn__arr{transform: rotate(180deg);}
		}

		&.open &__popup{display: block;}

		.btn-circle{flex-shrink: 0;}
	}

	.filter-date-btn{
		display: inline-flex;
		align-items: center;
		gap: 32px;
		height: 4.4rem;
		border-radius: 2.2rem;
		background: #fff;
		border: 1px solid #F5F5F9;
		padding: 0 20px;
		cursor: pointer;

		&__content{
			display: inline-flex;
			align-items: center;
			gap: 10px;
			@include font(none, none, 1.3rem, 1.2, #000);
			transition: color 0.2s ease 0s;

			.icon{
				flex-shrink: 0;
				fill: #000;
				transition: fill 0.2s ease 0s;
			}
		}

		&__arr{
			flex-shrink: 0;
			opacity: 0.2;
			transition: transform 0.2s ease 0s;

			.icon{
				fill: #000;
				transition: fill 0.2s ease 0s;
			}
		}

		&:hover{background: #F5F5F9;}
	}

	.calendar{
		display: inline-flex;
	}

	.calendar-period{
		width: 150px;
		background: #FAFAFC;
		border-right: 1px solid #F5F5F9;
		padding: 15px 24px;

		&__item:not(:last-child){margin-bottom: 10px;}

		&__item{
			@include font(none, none, 1.3rem, 1.6, #8A919F);
			transition: color 0.2s ease 0s;
			cursor: pointer;
		}

		&__item:hover,
		&__item.active{
			color: #000;
		}
	}

	.calendar-main{
		padding: 14px 24px;

		&__top{
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			margin-bottom: 16px;
		}

		&__title{
			@include font(none, 600, 1.3rem, 1.6, #000);
		}

		&__arrows{
			display: inline-flex;
			align-items: center;
			gap: 6px;
		}

		&__arr{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 24px;
			height: 24px;
			background: #F5F5F9;
			border-radius: 50%;
			cursor: pointer;

			.icon{
				fill: #000;
				opacity: 0.2;
				transition: all 0.2s ease 0s;
			}
		}

		&__arr:hover{
			background: #000;

			.icon{
				fill: #fff;
				opacity: 1;
			}
		}

		&__content{
			display: grid;
			grid-template-columns: repeat(7, 28px);
			gap: 6px 16px;
			position: relative;
			z-index: 2;
			overflow: hidden;
		}

		&__label,
		&__item{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 28px;
			height: 28px;
		}

		&__label{
			@include font(none, 600, 1.2rem, 1, #8A919F);
		}

		&__item{
			@include font(none, none, 1.3rem, 1, #75769A);
			transition: all 0.2s ease 0s;
			position: relative;

			&.disabled{color: #CACCDD;}

			&.active{
				border-radius: 50%;
				background: #000;
				color: #fff;
			}

			&.selected{
				color: #75769A;
				background: #F5F5F9;

				&::before,
				&::after{
					content: '';
					display: block;
					width: 42px;
					height: 100%;
					background: #F5F5F9;
					position: absolute;
					top: 0;
					z-index: -1;
				}

				&::before{right: 14px;}
				&::after{left: 14px;}
			}
		}
	}
</style>