<template>
	<header class="header">
		<choose-acc/>

		<div class="header__content">
			<my-button class="btn_green">
				<svg class="icon ic-briefcase" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
				</svg>Start shift
			</my-button>

			<header-auth/>

			<div class="header-action">
				<div class="header-action__item">
					<svg class="icon ic-msg" width="21" height="20">
						<use xlink:href="../assets/sprites/sprite.svg#ic-msg"></use>
					</svg>
				</div>

				<div class="header-action__item" @click="this.openNotice=!this.openNotice">
					<svg class="icon ic-notice" width="18" height="21">
						<use xlink:href="../assets/sprites/sprite.svg#ic-notice"></use>
					</svg>
				</div>
			</div>
		</div>
	</header>

	<div class="site-shadow" v-if="openNotice" @click="this.openNotice=false"></div>

	<div class="modal" :class="{ open: this.openNotice }">
		<div class="modal__top">
			<my-button-circle class="btn-circle_grey"  @click="this.openNotice=false">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</my-button-circle>
		</div>
		<div class="modal__content">
			<div class="notice-info">
				<div class="notice-info__top">
					<div class="notice-info__title">Notifications</div>

					<div class="notice-info__status notice-info__status_green">
						<svg class="icon ic-check" width="17" height="9">
							<use xlink:href="../assets/sprites/sprite.svg#ic-check"></use>
						</svg>Mark all as read
					</div>
				</div>

				<div class="tabs-page tabs-page_line">
					<ul class="tabs-page__list">
						<li class="tabs-page__item active" data-item="all">All<span class="tabs-page__count tabs-page__count_red">74</span></li>
						<li class="tabs-page__item" data-item="unread">Unread<span class="tabs-page__count">60</span></li>
						<li class="tabs-page__item" data-item="read">Read<span class="tabs-page__count">14</span></li>
					</ul>
					<div class="tabs-page__content">
						<div class="tabs-page__content-item active" id="sms">
							<div
								class="notice-item"
								v-for="(item, index) in noticeList"
								:key="index"
								:class="item.disabled?'disabled':''"
							>
								<div
									class="notice-item__img"
									:style="{'background-image': 'url(' + require('../assets/img/'+item.img) + ')'}"
									v-if="item.img"
								></div>

								<div
									class="notice-item__img"
									v-else
								>
									<svg class="icon ic-notice" width="18" height="21">
										<use xlink:href="../assets/sprites/sprite.svg#ic-notice"></use>
									</svg>
								</div>

								<div class="notice-item__content">
									<div class="notice-item__info">
										<div class="notice-item__text">
											<span class="notice-item__text-accent" v-if="item.text_bold1">{{ item.text_bold1 }}</span>
											<span v-if="item.text1">{{ item.text1 }}</span>
											<span class="notice-item__text-accent" v-if="item.text_bold2">{{ item.text_bold2 }}</span>
											<span v-if="item.text2">{{ item.text2 }}</span>
										</div>

										<div class="notice-item__circle" v-if="!item.disabled"></div>
									</div>

									<div class="notice-item__bottom">
										<div class="notice-item__date">23 May 2021, at 09:02</div>

										<div class="notice-item__tag notice-item__tag_green" v-if="item.disabled">
											<svg class="icon ic-eye" width="12" height="10">
												<use xlink:href="../assets/sprites/sprite.svg#ic-eye"></use>
											</svg>Read
										</div>
										
										<div class="notice-item__tag" v-else>
											<svg class="icon ic-tick" width="8" height="8" v-if="item.check">
												<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
											</svg>
											Mark as read
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tabs-page__content-item" id="unread"></div>
						<div class="tabs-page__content-item" id="read"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ChooseAcc from "@/components/ChooseAcc"
import HeaderAuth from "@/components/HeaderAuth"
import MyButtonCircle from './UI/MyButtonCircle.vue'

export default {
	components: {
		ChooseAcc,
		HeaderAuth,
		MyButtonCircle,
	},
	data() {
		return {
			openNotice: false,
			noticeList:[
				{
					img:'bono.png',
					text_bold1:'Bono ',
					text1:'recommended to go online camaigns shop to get more value and improve your account, ',
					text_bold2:'Campaign Marketing',
				},
				{
					img:'keily.png',
					text_bold1:'Sara Milrose ',
					text1:'want to call you at 16:32 today',
					check:'true',
				},
				{
					notice:'true',
					text1:'Survey ',
					text_bold2:'”Customers feedback” ',
					text2:'is created',
				},
				{
					img:'bono.png',
					text_bold1:'Bono ',
					text1:'recommended to go online camaigns shop to get more value and improve your account, ',
					text_bold2:'Campaign Marketing',
					disabled:'true',
				},
				{
					img:'keily.png',
					text_bold1:'Sara Milrose ',
					text1:'want to call you at 16:32 today',
					disabled:'true',
				},
				{
					notice:'true',
					text1:'Survey ',
					text_bold2:'”Customers feedback” ',
					text2:'is created',
					disabled:'true',
				},
				{
					notice:'true',
					text1:'Survey ',
					text_bold2:'”Customers feedback” ',
					text2:'is created',
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-shrink: 0;
		gap: 30px;
		height: 90px;
		border-bottom: 1px solid #EFEFF4;
		padding: 5px 30px;
		position: relative;
		z-index: 100;

		&__content{
			display: flex;
			align-items: center;
			gap: 25px;
		}
	}

	.header-action{
		display: flex;
		align-items: center;
		gap: 38px;
		margin-left: 20px;

		&__item{
			flex-shrink: 0;
			cursor: pointer;

			.icon{
				fill: #000;
				transition: opacity 0.2s ease 0s;
			}
		}

		&__item:hover .icon{opacity: 0.5;}
	}

	.timer-btn{
		display: inline-flex;
		align-items: center;
		gap: 7px;
		height: 4.4rem;
		border-radius: 2.2rem;
		border: 1px solid #EFEFF4;
		@include font(none, 500, 1.3rem, none, #000);
		padding: 0 20px;

		.icon{
			fill: #000;
			flex-shrink: 0;
		}

		&__end{
			font-weight: 500;
			color: $color-red;
			margin-left: 18px;
		}
	}
</style>