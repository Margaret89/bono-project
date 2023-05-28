<template>
	<section class="page-top">
		<div class="page-top__col">
			<h1>Leads</h1>

			<div class="page-top__text">The list contains 3,021 leads</div>

			<my-select
				v-model:value="valueSelect"
				:selectList="selectList"
			/>
		</div>

		<div class="page-top__col">
			<my-form-search
				v-model="valueSearch"
			/>

			<div class="select-check select-check_right" :class="{ open: this.selectCheckPopup }">
				<div class="select-check__field" @click="this.selectCheckPopup=!this.selectCheckPopup">
					<div class="select-check__info">
						<svg class="icon ic-column" width="15" height="15">
							<use xlink:href="../assets/sprites/sprite.svg#ic-column"></use>
						</svg>
						Columns
					</div>

					<div class="select-check__arr">
						<svg class="icon ic-arrow-down" width="11" height="6">
							<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
						</svg>
					</div>
				</div>

				<div class="select-check__popup">
					<div
						class="select-check__item"
						v-for="(item, index) in columns"
						:key="index"
					>
						<label class="input-check">
							<input type="checkbox" checked="checked" v-if="item.status">
							<input type="checkbox" v-else>
							<span class="input-check__mark">
								<svg class="icon ic-tick" width="8" height="6">
									<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
								</svg>
							</span>
							<span class="input-check__text">{{ item.text }}</span>
						</label>
					</div>
				</div>
			</div>

			<div class="filter filter_right" :class="{ open: this.filterPopup }">
				<div class="filter__btn" @click="this.filterPopup=!this.filterPopup">
					<svg class="icon ic-filter" width="18" height="16">
						<use xlink:href="../assets/sprites/sprite.svg#ic-filter"></use>
					</svg>
					<div class="filter__arr">
						<svg class="icon ic-arrow-down" width="11" height="6">
							<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
						</svg>
					</div>
				</div>
				

				<div class="filter__popup">
					<div class="filter__list">
						<div
							class="filter__sect"
							v-for="(sect, index) in filterList"
							:key="index"
						>
							<div class="filter__title">{{ sect.title }}</div>
							
							<div
								class="filter__item"
								v-for="(item, indx) in sect.items"
								:key="indx"
							>

								<my-checkbox v-model="valCheck">{{ item.text }}</my-checkbox>
							</div>
						</div>
					</div>

					<div class="filter__bottom">
						<my-button class="btn_border">
							<svg class="icon ic-clear" width="19" height="19">
								<use xlink:href="../assets/sprites/sprite.svg#ic-clear"></use>
							</svg>
							Clear All
						</my-button>
						
						<my-button class="btn_border">
							Apply
							<svg class="icon ic-arrow-right" width="6" height="11">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
							</svg>
						</my-button>
					</div>
				</div>
			</div>

			<div class="view">
				<div
					class="view__item"
					:class="{ active: this.view == 'tile' }"
					@click="this.view = 'tile'"
				>
					<svg class="icon ic-tile" width="12" height="12">
						<use xlink:href="../assets/sprites/sprite.svg#ic-tile"></use>
					</svg>
				</div>

				<div
					class="view__item"
					:class="{ active: this.view == 'table' }"
					@click="this.view = 'table'"
				>
					<svg class="icon ic-lines" width="12" height="12">
						<use xlink:href="../assets/sprites/sprite.svg#ic-lines"></use>
					</svg>
				</div>
			</div>

			<filter-data/>

			<my-button-circle class="btn-circle_big">
				<svg class="icon ic-plus" width="12" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
				</svg>
			</my-button-circle>
		</div>
	</section>

	<section class="table-site-wrap" v-if="view=='table'">
		<table class="table-site">
			<thead>
				<tr>
					<th class="table-site__head table-site__head_check">
						<div class="table-site__head-content">
							<my-checkbox></my-checkbox>
						</div>
					</th>

					<th class="table-site__head table-site__head_id">
						<div class="table-site__head-content">#<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Name<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">
							<svg class="icon ic-many-dots ic-grey" width="6" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
							</svg>Phone<span class="table-site-sort"><span class="table-site-sort__up active"></span><span class="table-site-sort__down"></span></span>
							<div class="table-site__del">
								<svg class="icon ic-bin" width="9" height="10">
									<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
								</svg>
								<div class="tooltip">Remove</div>
							</div>
						</div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Email<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Status<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Source<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Date & Time<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">Meeting<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">UTM<span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span></div>
					</th>

					<th class="table-site__head">
						<div class="table-site__head-content">
							<svg class="icon ic-star-fill ic-grey" width="10" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-star-fill"></use>
							</svg><span class="table-site-sort"><span class="table-site-sort__up"></span><span class="table-site-sort__down"></span></span>
						</div>
					</th>
				</tr>
			</thead>

			<tbody>
				<tr
					v-for="(item, index) in rows"
					:key="index"
					@click="this.editPopupOpen=!this.editPopupOpen"
				>
					<td>
						<my-checkbox v-model="chooseRowStatus" @click="chooseRow(chooseRowStatus)"></my-checkbox>
					</td>

					<td>{{ item.id }}</td>

					<td>
						<div class="table-name">
							<div
								class="table-name__img"
								:style="{'background-image': 'url(' + require('../assets/img/'+item.img) + ')'}"
								v-if="item.img"
							>

							</div>

							<div
								class="table-name__img"
								v-if="item.fio"
							>
								{{ item.fio }}
							</div>

							<div class="table-name__text">{{ item.name }}</div>

							<div class="table-name__notice" v-if="item.notice">
								<svg class="icon ic-notice-fill ic-grey" width="12" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-notice-fill"></use>
								</svg>
							</div>

							<div class="table-name__count" v-if="item.count">
								{{ item.count }}
								<div class="tooltip">{{ item.count_tooltip }}</div>
							</div>
						</div>
					</td>

					<td>{{ item.phone }}</td>
					<td>{{ item.email }}</td>

					<td @click="this.editPopupOpen=!this.editPopupOpen">
						<div class="tag-wrap">
							<div
								class="tag"
								:class="item.status_color?'tag_'+item.status_color:''"
								@click="this.popupCheckOpen=!this.popupCheckOpen"
							>
								{{ item.status }}
							</div>

							<div
								class="popup-check"
								:class="{ open: this.popupCheckOpen }"
							>
								<div class="popup-check__item">
									<label class="input-check">
										<input type="checkbox"><span class="input-check__mark">
											<svg class="icon ic-tick" width="8" height="6">
												<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
											</svg></span><span class="input-check__text">Active</span>
									</label>
								</div>
								<div class="popup-check__item">
									<label class="input-check">
										<input type="checkbox"><span class="input-check__mark">
											<svg class="icon ic-tick" width="8" height="6">
												<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
											</svg></span><span class="input-check__text">Pause</span>
									</label>
								</div>
								<div class="popup-check__item">
									<label class="input-check">
										<input type="checkbox"><span class="input-check__mark">
											<svg class="icon ic-tick" width="8" height="6">
												<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
											</svg></span><span class="input-check__text">Waiting</span>
									</label>
								</div>
								<div class="popup-check__item">
									<label class="input-check">
										<input type="checkbox" checked="checked"><span class="input-check__mark">
											<svg class="icon ic-tick" width="8" height="6">
												<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
											</svg></span><span class="input-check__text">Decline</span>
									</label>
								</div>
							</div>
						</div>
					</td>

					<td>{{ item.source }}</td>

					<td>
						<div class="table-date">
							<div class="table-date__icon" v-if="item.icon">
								<svg :class="'icon '+item.icon+' '+item.icon_color" :width="item.icon_width" :height="item.icon_height">
									<use :xlink:href="require(`../assets/sprites/sprite.svg`)+'#'+item.icon"></use>
								</svg>

								<div class="tooltip" v-if="item.tooltip">
									<svg class="icon ic-clock" width="9" height="9" v-if="item.tooltip_icon">
										<use xlink:href="../assets/sprites/sprite.svg#ic-clock"></use>
									</svg>

									{{ item.tooltip }}
								</div>
							</div>

							<div class="table-date__text">{{ item.time }}</div>
						</div>
					</td>

					<td>
						<div class="table__icon" v-if="item.meeting_icon">
							<svg :class="'icon '+item.meeting_icon+' '+item.meeting_icon_color" :width="item.meeting_icon_width" :height="item.meeting_icon_height">
								<use :xlink:href="require(`../assets/sprites/sprite.svg`)+'#'+item.meeting_icon"></use>
							</svg>
						</div>
						
						<div class="tag tag_black tag_small" v-if="item.meeting_btn">
							<svg class="icon ic-plus" width="7" height="7">
								<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
							</svg>Add
						</div>
					</td>

					<td>{{ item.utm }}</td>

					<td>
						<div
							class="rating"
							:class="item.rating_color?'rating_'+item.rating_color:''"
						>
							<div
								class="rating__content"
								:style="{'width':item.rating}"
							></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<my-pager :count="10"/>
	</section>

	<section class="cards" v-if="view=='tile'">
		<div class="cards__column">
			<div class="cards__top">
				<div class="cards__count">120</div>Active
			</div>
			
			<div class="cards__list">
				<div class="card-item"
					v-for="(card, index) in cards"
					:key="index"
				>
					<div class="card-item__top">
						<div class="rating">
							<div class="rating__content" style="width:66%"></div>
						</div>

						<div class="card-item__move">
							<svg class="icon ic-many-dots" width="6" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
							</svg>
						</div>

						<div class="card-item-menu" :class="{ open: this.openCardMenu }">
							<my-button-circle class="btn-circle_grey" @click="this.openCardMenu = !this.openCardMenu">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</my-button-circle>

							<div class="card-item-menu__popup">
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-move-to" width="18" height="14">
											<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Move to</div>
									<div class="card-item-menu__arr">
										<svg class="icon ic-arrow-right" width="6" height="11">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
										</svg>
									</div>
									<div class="card-item-menu__sub">
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-star" width="14" height="14">
													<use xlink:href="../assets/sprites/sprite.svg#ic-star"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Campain</div>
										</div>
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-briefcase" width="15" height="15">
													<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Company</div>
										</div>
									</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-archive" width="18" height="18">
											<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Archive</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-bin" width="14" height="16">
											<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Delete</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card-item__content">
						<div class="card-item__name">Andy Brown<span class="card-item__count">3</span></div>
						<div class="card-item__phone">+972 52 6861 881</div>
						<div class="card-item__mail">andy@gmail.com</div>
					</div>

					<div class="card-item__bottom">
						<div class="card-item-author">
							<div
								class="card-item-author__img"
								:style="{'background-image': `url(${require('../assets/img/woman.png')})`}"
							></div>
							<div class="card-item-author__name">Jessica Frencheska</div>
						</div>
						<div class="card-item__date">23 May 2021</div>
					</div>
				</div>
			</div>
		</div>

		<div class="cards__column">
			<div class="cards__top">
				<div class="cards__count cards__count_yellow">80</div>Paused
			</div>

			<div class="cards__list">
				<div class="card-item"
					v-for="(card, index) in cards"
					:key="index"
				>
					<div class="card-item__top">
						<div class="rating">
							<div class="rating__content" style="width:66%"></div>
						</div>

						<div class="card-item__move">
							<svg class="icon ic-many-dots" width="6" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
							</svg>
						</div>

						<div class="card-item-menu" :class="{ open: this.openCardMenu }">
							<my-button-circle class="btn-circle_grey" @click="this.openCardMenu = !this.openCardMenu">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</my-button-circle>

							<div class="card-item-menu__popup">
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-move-to" width="18" height="14">
											<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Move to</div>
									<div class="card-item-menu__arr">
										<svg class="icon ic-arrow-right" width="6" height="11">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
										</svg>
									</div>
									<div class="card-item-menu__sub">
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-star" width="14" height="14">
													<use xlink:href="../assets/sprites/sprite.svg#ic-star"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Campain</div>
										</div>
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-briefcase" width="15" height="15">
													<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Company</div>
										</div>
									</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-archive" width="18" height="18">
											<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Archive</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-bin" width="14" height="16">
											<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Delete</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card-item__content">
						<div class="card-item__name">Andy Brown<span class="card-item__count">3</span></div>
						<div class="card-item__phone">+972 52 6861 881</div>
						<div class="card-item__mail">andy@gmail.com</div>
					</div>

					<div class="card-item__bottom">
						<div class="card-item-author">
							<div
								class="card-item-author__img"
								:style="{'background-image': `url(${require('../assets/img/woman.png')})`}"
							></div>
							<div class="card-item-author__name">Jessica Frencheska</div>
						</div>
						<div class="card-item__date">23 May 2021</div>
					</div>
				</div>
			</div>
		</div>

		<div class="cards__column">
			<div class="cards__top">
				<div class="cards__count cards__count_purple">12</div>Waiting
			</div>

			<div class="cards__list">
				<div class="card-item"
					v-for="(card, index) in cards"
					:key="index"
				>
					<div class="card-item__top">
						<div class="rating">
							<div class="rating__content" style="width:66%"></div>
						</div>

						<div class="card-item__move">
							<svg class="icon ic-many-dots" width="6" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
							</svg>
						</div>

						<div class="card-item-menu" :class="{ open: this.openCardMenu }">
							<my-button-circle class="btn-circle_grey" @click="this.openCardMenu = !this.openCardMenu">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</my-button-circle>

							<div class="card-item-menu__popup">
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-move-to" width="18" height="14">
											<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Move to</div>
									<div class="card-item-menu__arr">
										<svg class="icon ic-arrow-right" width="6" height="11">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
										</svg>
									</div>
									<div class="card-item-menu__sub">
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-star" width="14" height="14">
													<use xlink:href="../assets/sprites/sprite.svg#ic-star"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Campain</div>
										</div>
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-briefcase" width="15" height="15">
													<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Company</div>
										</div>
									</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-archive" width="18" height="18">
											<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Archive</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-bin" width="14" height="16">
											<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Delete</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card-item__content">
						<div class="card-item__name">Andy Brown<span class="card-item__count">3</span></div>
						<div class="card-item__phone">+972 52 6861 881</div>
						<div class="card-item__mail">andy@gmail.com</div>
					</div>

					<div class="card-item__bottom">
						<div class="card-item-author">
							<div
								class="card-item-author__img"
								:style="{'background-image': `url(${require('../assets/img/woman.png')})`}"
							></div>
							<div class="card-item-author__name">Jessica Frencheska</div>
						</div>
						<div class="card-item__date">23 May 2021</div>
					</div>
				</div>
			</div>
		</div>

		<div class="cards__column">
			<div class="cards__top">
				<div class="cards__count cards__count_red">5</div>Decline
			</div>

			<div class="cards__list">
				<div class="card-item"
					v-for="(card, index) in cards"
					:key="index"
				>
					<div class="card-item__top">
						<div class="rating">
							<div class="rating__content" style="width:66%"></div>
						</div>

						<div class="card-item__move">
							<svg class="icon ic-many-dots" width="6" height="10">
								<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
							</svg>
						</div>

						<div class="card-item-menu" :class="{ open: this.openCardMenu }">
							<my-button-circle class="btn-circle_grey" @click="this.openCardMenu = !this.openCardMenu">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</my-button-circle>

							<div class="card-item-menu__popup">
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-move-to" width="18" height="14">
											<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Move to</div>
									<div class="card-item-menu__arr">
										<svg class="icon ic-arrow-right" width="6" height="11">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
										</svg>
									</div>
									<div class="card-item-menu__sub">
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-star" width="14" height="14">
													<use xlink:href="../assets/sprites/sprite.svg#ic-star"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Campain</div>
										</div>
										<div class="card-item-menu__item">
											<div class="card-item-menu__icon">
												<svg class="icon ic-briefcase" width="15" height="15">
													<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
												</svg>
											</div>
											<div class="card-item-menu__text">Other Company</div>
										</div>
									</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-archive" width="18" height="18">
											<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Archive</div>
								</div>
								<div class="card-item-menu__item">
									<div class="card-item-menu__icon">
										<svg class="icon ic-bin" width="14" height="16">
											<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
										</svg>
									</div>
									<div class="card-item-menu__text">Delete</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card-item__content">
						<div class="card-item__name">Andy Brown<span class="card-item__count">3</span></div>
						<div class="card-item__phone">+972 52 6861 881</div>
						<div class="card-item__mail">andy@gmail.com</div>
					</div>

					<div class="card-item__bottom">
						<div class="card-item-author">
							<div
								class="card-item-author__img"
								:style="{'background-image': `url(${require('../assets/img/woman.png')})`}"
							></div>
							<div class="card-item-author__name">Jessica Frencheska</div>
						</div>
						<div class="card-item__date">23 May 2021</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="popup-actions" v-if="popupActionsOpen">
		<div class="popup-actions__content">
			<div class="popup-actions__info">
				<div class="popup-actions__count">{{countCheckRows}}</div>
				<div class="popup-actions__text">Item selected</div>
			</div>

			<div class="popup-actions__list">
				<div class="popup-actions__item">
					<div class="popup-actions__icon">
						<svg class="icon ic-move-to" width="18" height="14">
							<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
						</svg>
					</div>
					<div class="popup-actions__label">Move to</div>
				</div>

				<div class="popup-actions__item">
					<div class="popup-actions__icon">
						<svg class="icon ic-export" width="16" height="16">
							<use xlink:href="../assets/sprites/sprite.svg#ic-export"></use>
						</svg>
					</div>
					<div class="popup-actions__label">Export</div>
				</div>

				<div class="popup-actions__item">
					<div class="popup-actions__icon">
						<svg class="icon ic-print" width="18" height="19">
							<use xlink:href="../assets/sprites/sprite.svg#ic-print"></use>
						</svg>
					</div>
					<div class="popup-actions__label">Print</div>
				</div>

				<div class="popup-actions__item">
					<div class="popup-actions__icon">
						<svg class="icon ic-archive" width="18" height="18">
							<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
						</svg>
					</div>
					<div class="popup-actions__label">Archive</div>
				</div>

				<div class="popup-actions__item">
					<div class="popup-actions__icon">
						<svg class="icon ic-bin" width="16" height="18">
							<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
						</svg>
					</div>
					<div class="popup-actions__label">Delete</div>
				</div>
			</div>

			<div class="popup-actions__close" @click="popupActionsClose">
				<my-button-circle class="btn-circle_opacity">
					<svg class="icon ic-close" width="12" height="12">
						<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
					</svg>
				</my-button-circle>
			</div>
		</div>
	</div>

	<div
		class="site-shadow"
		v-if="editPopupOpen || openHistory"
		@click="this.editPopupOpen = false"
	></div>
 
	<div class="modal" :class="{ open: this.editPopupOpen }">
		<div class="modal__top">
			<my-button-circle class="btn-circle_grey">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</my-button-circle>
			<div class="modal__actions">
				<my-button-circle class="btn-circle_opacity btn_big">
					<svg class="icon ic-user" width="18" height="21">
						<use xlink:href="../assets/sprites/sprite.svg#ic-user"></use>
					</svg>
				</my-button-circle>
				<my-button-circle class="btn-circle_opacity btn_big">
					<svg class="icon ic-call" width="20" height="20">
						<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
					</svg>
				</my-button-circle>
				<my-button-circle class="btn-circle_opacity btn_big">
					<svg class="icon ic-mail" width="22" height="19">
						<use xlink:href="../assets/sprites/sprite.svg#ic-mail"></use>
					</svg>
				</my-button-circle>
				<my-button-circle class="btn-circle_opacity btn_big">
					<svg class="icon ic-dots" width="14" height="2">
						<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
					</svg>
				</my-button-circle>
			</div>
		</div>
		<div class="modal__content">
			<div class="profile-info">
				<div class="profile-info__main">
					<div class="profile-info__img" style="background-image: url(../assets/img/keily.png)"></div>
					<div class="profile-info__name">Keily Triump</div>
					<div class="profile-info__rating">
						<div class="rating">
							<div class="rating__content" style="width:100%"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="profile-params">
				<div class="profile-params__item">
					<div class="profile-params__label">Status</div>
					<div class="profile-params__val">
						<div class="profile-params__status">Active</div>
					</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Phone</div>
					<div class="profile-params__val">+1 806 1239 3284</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Email</div>
					<div class="profile-params__val">schuppe.jany@hotmail.com</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">IP</div>
					<div class="profile-params__val">80.333.214.15</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Meeting</div>
					<div class="profile-params__val">
						<svg class="icon ic-calendar-check ic-green" width="17" height="18">
							<use xlink:href="../assets/sprites/sprite.svg#ic-calendar-check"></use>
						</svg>Call at 6:15 pm
					</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Date & Time</div>
					<div class="profile-params__val">20.03.2023 at 1:25 pm</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Source</div>
					<div class="profile-params__val">google.offcial</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">UTM</div>
					<div class="profile-params__val">Facebook post 4</div>
				</div>
				<div class="profile-params__item">
					<div class="profile-params__label">Affiliator</div>
					<div class="profile-params__val">
						<div class="profile-params-name">
							<div class="profile-params-name__icon">JD</div>
							<div class="profile-params-name__text">Jhone Doe</div>
						</div>
					</div>
				</div>
				<div class="profile-params-more">
					<div class="profile-params-more__content">more
						<svg class="icon ic-arrow-down" width="10" height="5">
							<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
						</svg>
					</div>
				</div>
			</div>
			<div class="profile-history open">
				<div class="profile-history__top">
					<div class="profile-history__title">History</div>
					<div class="tabs-page">
						<ul class="tabs-page__list">
							<li class="tabs-page__item active" data-item="tab1">All</li>
							<li class="tabs-page__item" data-item="tab2">Calls</li>
							<li class="tabs-page__item" data-item="tab3">Actions</li>
						</ul>
					</div>
					<my-button-circle class="btn-circle_grey" @click="this.openHistory = !openHistory;this.editPopupOpen = !editPopupOpen">
						<svg class="icon ic-arrow-down" width="11" height="6">
							<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
						</svg>
					</my-button-circle>
				</div>
				<div class="profile-history__content">
					<div class="tabs-page">
						<div class="tabs-page__content">
							<div class="tabs-page__content-item active" id="tab1">
								<div class="review-item">
									<div class="review-item__icon">KT</div>
									<div class="review-item__content">
										<div class="review-item__top">
											<div class="review-item__title">Keily Triump</div>
											<div class="review-item__date">20/03/20 at 1:25 pm </div>
										</div>
										<div class="review-item__text">Change the status to “Waiting for call”</div>
									</div>
								</div>
								<div class="review-item-wrap">
									<div class="review-item review-item_green">
										<div class="review-item__icon">OC</div>
										<div class="review-item__content">
											<div class="review-item__top">
												<div class="review-item__title">Me</div>
												<div class="review-item__date">20/03/20 at 1:25 pm </div>
											</div>
											<div class="review-item__text">Lorem impus dolor sit amet, consetctetur adispsicing elit ut adispsidng elit ut aliquama</div>
										</div>
									</div>
									<my-button-circle class="btn-circle_opacity">
										<svg class="icon ic-dots" width="14" height="2">
											<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
										</svg>
									</my-button-circle>
								</div>
							</div>
							<div class="tabs-page__content-item" id="tab2"></div>
							<div class="tabs-page__content-item" id="tab3"></div>
						</div>
					</div>
				</div>
				<div class="profile-history__bottom">
					<form class="form-send">
						<input type="text" placeholder="Add comment">
						<button class="form-send__btn" type="submit">
							<svg class="icon ic-send" width="17" height="17">
								<use xlink:href="../assets/sprites/sprite.svg#ic-send"></use>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="history-modal" :class="{ open: this.openHistory }">
		<div class="history-modal__top">
			<div class="history-modal__title">History</div>
			<my-button-circle class="btn-circle_grey" @click="this.openHistory = false">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</my-button-circle>
		</div>
		<div class="history-modal__content">
			<form class="form-search">
				<input type="text" name="search" placeholder="Search">
				<button class="form-search__btn" type="submit">
					<svg class="icon ic-search" width="15" height="15">
						<use xlink:href="../assets/sprites/sprite.svg#ic-search"></use>
					</svg>
				</button>
			</form>
			<div class="tabs-page">
				<ul class="tabs-page__list">
					<li class="tabs-page__item active" data-item="tab1">All</li>
					<li class="tabs-page__item" data-item="tab2">Calls</li>
					<li class="tabs-page__item" data-item="tab3">Actions</li>
					<li class="tabs-page__item" data-item="tab4">Files</li>
				</ul>
				<div class="tabs-page__content">
					<div class="tabs-page__content-item active" id="tab1">
						<div class="review-item">
							<div class="review-item__icon">KT</div>
							<div class="review-item__content">
								<div class="review-item__top">
									<div class="review-item__title">Keily Triump</div>
									<div class="review-item__date">20/03/20 at 1:25 pm </div>
								</div>
								<div class="review-item__text">Change the status to “Waiting for call”</div>
							</div>
						</div>
						<div class="review-item-wrap">
							<div class="review-item review-item_green">
								<div class="review-item__icon">OC</div>
								<div class="review-item__content">
									<div class="review-item__top">
										<div class="review-item__title">Me</div>
										<div class="review-item__date">20/03/20 at 1:25 pm </div>
									</div>
									<div class="review-item__text">Lorem impus dolor sit amet, consetctetur adispsicing elit ut adispsidng elit ut aliquama</div>
								</div>
							</div>
							<div class="btn-circle btn-circle_opacity">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</div>
						</div>
					</div>
					<div class="tabs-page__content-item" id="tab2"></div>
					<div class="tabs-page__content-item" id="tab3"></div>
					<div class="tabs-page__content-item " id="tab4">
						<div class="item-file-wrap">
							<div class="item-file item-file_green">
								<div class="item-file__content">
									<div class="item-file__img"><img src="../assets/img/file.jpg" alt=""></div>
									<div class="item-file__info">
										<div class="item-file__title">Me</div>
										<div class="item-file__name">Doc.pptx</div>
									</div>
								</div>
								<div class="item-file__data">
									<div class="item-file__date">20/03/20 at 1:25 pm</div>
								</div>
							</div>
							<div class="btn-circle btn-circle_opacity">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</div>
						</div>
						<div class="item-file-wrap">
							<div class="item-file">
								<div class="item-file__content">
									<div class="item-file__img"><img src="../assets/img/file.jpg" alt=""></div>
									<div class="item-file__info">
										<div class="item-file__title">Keily Triump</div>
										<div class="item-file__name">Doc.pptx</div>
									</div>
								</div>
								<div class="item-file__data">
									<div class="item-file__date">20/03/20 at 1:25 pm</div>
									<div class="item-file-actions">
										<div class="item-file-actions__item">
											<svg class="icon ic-write" width="15" height="17">
												<use xlink:href="../assets/sprites/sprite.svg#ic-write"></use>
											</svg>
										</div>
										<div class="item-file-actions__item">
											<svg class="icon ic-eye" width="16" height="14">
												<use xlink:href="../assets/sprites/sprite.svg#ic-eye"></use>
											</svg>
										</div>
										<div class="item-file-actions__item">
											<svg class="icon ic-send-mail" width="16" height="14">
												<use xlink:href="../assets/sprites/sprite.svg#ic-send-mail"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="btn-circle btn-circle_opacity">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</div>
						</div>
						<div class="item-file-wrap">
							<div class="item-file">
								<div class="item-file__content">
									<div class="item-file__img"><img src="../assets/img/file.jpg" alt=""></div>
									<div class="item-file__info">
										<div class="item-file__title">Keily Triump</div>
										<div class="item-file__name">Doc.pptx</div>
									</div>
								</div>
								<div class="item-file__data">
									<div class="item-file__date">20/03/20 at 1:25 pm</div>
									<div class="item-file-actions">
										<div class="item-file-actions__item">
											<svg class="icon ic-write" width="15" height="17">
												<use xlink:href="../assets/sprites/sprite.svg#ic-write"></use>
											</svg>
										</div>
										<div class="item-file-actions__item">
											<svg class="icon ic-eye" width="16" height="14">
												<use xlink:href="../assets/sprites/sprite.svg#ic-eye"></use>
											</svg>
										</div>
										<div class="item-file-actions__item">
											<svg class="icon ic-send-mail" width="16" height="14">
												<use xlink:href="../assets/sprites/sprite.svg#ic-send-mail"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="btn-circle btn-circle_opacity">
								<svg class="icon ic-dots" width="14" height="2">
									<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="history-modal__bottom">
			<form class="form-send">
				<input type="text" placeholder="Add comment">
				<div class="form-send__spiral">
					<svg class="icon ic-spiral" width="17" height="17">
						<use xlink:href="../assets/sprites/sprite.svg#ic-spiral"></use>
					</svg>
				</div>
				<button class="form-send__btn" type="submit">
					<svg class="icon ic-send" width="17" height="17">
						<use xlink:href="../assets/sprites/sprite.svg#ic-send"></use>
					</svg>
				</button>
			</form>
		</div>
	</div>

	<div class="player-fixed">
		<div class="player">
			<div class="player__move">
				<svg class="icon ic-many-dots" width="6" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
				</svg>
			</div>
			<div class="player-user">
				<div
					class="player-user__img" 
					:style="{'background-image': `url(${require('../assets/img/abraham.png')})`}"
				></div>
				<div class="player-user__content">
					<div class="player-user__name">Abraham Luis</div>
					<div class="player-user__status">
						<svg class="icon ic-phone" width="10" height="10">
							<use xlink:href="../assets/sprites/sprite.svg#ic-phone"></use>
						</svg>Incoming call
					</div>
				</div>
			</div>
			<div class="player__actions">
				<div class="player__prev">
					<svg class="icon ic-15-prev" width="19" height="22">
						<use xlink:href="../assets/sprites/sprite.svg#ic-15-prev"></use>
					</svg>
				</div>
				<div class="player__play">
					<svg class="icon ic-play" width="11" height="14">
						<use xlink:href="../assets/sprites/sprite.svg#ic-play"></use>
					</svg>
				</div>
				<div class="player__next">
					<svg class="icon ic-15-next" width="19" height="22">
						<use xlink:href="../assets/sprites/sprite.svg#ic-15-next"></use>
					</svg>
				</div>
			</div>
			<div class="player-timeline">
				<div class="player-timeline__text">01:40</div>
				<div class="player-timeline__content">
					<div class="player-timeline__line" style="width:37%"></div>
					<div class="player-timeline__dot" style="left:5%"></div>
					<div class="player-timeline__dot" style="left:41%"></div>
					<div class="player-timeline__dot" style="left:46%"></div>
					<div class="player-timeline__dot" style="left:89%"></div>
				</div>
				<div class="player-timeline__text">13:25</div>
			</div>
			<div class="player__review">
				<svg class="icon ic-review" width="19" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-review"></use>
				</svg>
			</div>
			<div class="player-volume">
				<div class="player-volume__icon">
					<svg class="icon ic-volume" width="24" height="17">
						<use xlink:href="../assets/sprites/sprite.svg#ic-volume"></use>
					</svg>
				</div>
				<div class="player-volume__line">
					<div class="player-volume__progress" style="width:100%"></div>
					<div class="player-volume__handle" style="left:100%"></div>
				</div>
			</div>
			<div class="btn btn_white">End Call</div>
		</div>
	</div>
</template>

<script>
import FilterData from "@/components/FilterData"
import MyFormSearch from '@/components/UI/MyFormSearch.vue'
import MyCheckbox from '@/components/UI/MyCheckbox.vue'
import MyPager from '@/components/UI/MyPager'
import MyButtonCircle from '@/components/UI/MyButtonCircle.vue'

export default {
	components: {
		FilterData,
		MyFormSearch,
		MyCheckbox,
		MyPager,
MyButtonCircle,
	},
	data()
 	{
		return {
			rows: [
				{
					id:'1',
					img:'jessica.png',
					name:'Jessica Frencheska',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Active',
					source:'google.offcial',
					icon:'ic-missed-call',
					icon_width:'12',
					icon_height:'12',
					icon_color:'ic-red',
					time:'20.3.2023, at 6:15 pm',
					tooltip:'Missed Call',
					meeting_icon:'ic-eye',
					meeting_icon_width:'16',
					meeting_icon_height:'14',
					meeting_icon_color:'ic-grey',
					utm:'Facebook Post 4',
					rating:'66%'
				},
				{
					id:'2',
					img:'abraham.png',
					name:'Abraham Luis',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Waiting',
					status_color:'purple',
					source:'google.offcial',
					icon:'ic-sound',
					icon_width:'14',
					icon_height:'12',
					icon_color:'ic-grey',
					time:'20.3.2023, at 6:15 pm',
					tooltip_icon:'ic-clock',
					tooltip:'13:25',
					meeting_icon:'ic-eye-close',
					meeting_icon_width:'18',
					meeting_icon_height:'18',
					meeting_icon_color:'ic-grey',
					utm:'Facebook Post 4',
					rating:'100%'
				},
				{
					id:'3',
					img:'keily.png',
					name:'Keily Triump',
					count:'3',
					count_tooltip:'3 Leads from same client',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Pause',
					status_color:'yellow',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-calendar-close',
					meeting_icon_width:'17',
					meeting_icon_height:'18',
					meeting_icon_color:'ic-red',
					utm:'Facebook Post 4',
					rating:'100%'
				},
				{
					id:'4',
					fio:'EE',
					name:'Eran Eluz',
					notice:'true',
					count:'3',
					count_tooltip:'3 Leads from same client',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Pause',
					status_color:'yellow',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_btn:'true',
					utm:'Facebook Post 4',
					rating:'100%'
				},
				{
					id:'5',
					fio:'JR',
					name:'Jerry Ronie',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Pause',
					status_color:'yellow',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-calendar-check',
					meeting_icon_width:'17',
					meeting_icon_height:'18',
					meeting_icon_color:'ic-green',
					utm:'Facebook Post 4',
					rating:'100%'
				},
				{
					id:'6',
					fio:'AA',
					name:'Ali Abuzark',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Waiting',
					status_color:'purple',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'100%'
				},
				{
					id:'7',
					fio:'OC',
					name:'Osher Cohen',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Waiting',
					status_color:'purple',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'66%',
					rating_color:'grey'
				},
				{
					id:'8',
					img:'abraham.png',
					name:'Abraham Luis',
					notice:'true',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Decline',
					status_arr:'true',
					status_color:'red',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%'
				},
				{
					id:'9',
					fio:'EP',
					name:'Eyal Poipembuilm',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Decline',
					status_color:'red',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%',
				},
				{
					id:'10',
					fio:'GJ',
					name:'Grifin Jeck',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Decline',
					status_color:'red',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%',
				},
				{
					id:'11',
					img:'abraham.png',
					name:'Abraham Luis',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Active',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%'
				},
				{
					id:'12',
					fio:'ZV',
					name:'Zoei Valorent',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Active',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%',
				},
				{
					id:'13',
					img:'keily.png',
					name:'Keily Triump',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Active',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%',
				},
				{
					id:'14',
					img:'jessica.png',
					name:'Jessica Frencheska',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Active',
					source:'google.offcial',
					time:'20.3.2023, at 6:15 pm',
					meeting_icon:'ic-plus-circle',
					meeting_icon_width:'19',
					meeting_icon_height:'19',
					utm:'Facebook Post 4',
					rating:'0%',
				},
			],
			valueSelect: 'Google TV campain',
			selectList:[
				{val:'param1', text:'Parametr 1'},
				{val:'param2', text:'Parametr 2'},
				{val:'param3', text:'Parametr 3'},
			],
			valueSearch: '',
			columns: [
				{text:'Lead Name', status:'active'},
				{text:'Campain Name'},
				{text:'Affiliator Name'},
				{text:'Phone', status:'active'},
				{text:'Email', status:'active'},
				{text:'Status', status:'active'},
				{text:'Campain Name'},
				{text:'Affiliator Name'},
				{text:'Phone', status:'active'},
			],
			selectCheckPopup: false,
			filterPopup: false,
			filterList: [
				{
					title: 'Source',
					items:[
						{text:'Google.offcial', status:'active'},
						{text:'Google.fb'},
						{text:'Google.ig'},
						{text:'Google.tt'},
					]
				},
				{
					title: 'Status',
					items:[
						{text:'Active', status:'active'},
						{text:'Waiting'},
						{text:'Pause'},
						{text:'Decline'},
					]
				},
				{
					title: 'Meeting',
					items:[
						{text:'Google.offcial', status:'active'},
						{text:'Google.fb'},
					]
				},
				{
					title: 'UTM',
					items:[
						{text:'Active'},
						{text:'Waiting'},
					]
				},
			],
			valCheck: false,
			popupCheckOpen: false,
			countCheckRows: 0,
			popupActionsOpen: false,
			chooseRowStatus: true,
			editPopupOpen: false,
			openHistory: false,
			view: 'tile',
			cards: [
				{
					rating:'66%',
				},
				{
					rating:'66%',
				},
				{
					rating:'66%',
				},
				{
					rating:'66%',
				},
			],
			openCardMenu: false
		}
	},
	methods: {
		chooseRow(status) {
			// console.log('status = ', status);
			this.countCheckRows++

			if(this.countCheckRows > 0){
				this.popupActionsOpen = true;
			}
		},

		popupActionsClose() {
			this.popupActionsOpen = false;
		}
	}
}
</script>

<style lang="scss">
	
</style>