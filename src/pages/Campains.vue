<template>
	<section class="page-top">
		<div class="page-top__col">
			<h1>Campaigns</h1>
			<div class="page-top__text">The list contains 3,021 camapigns</div>
		</div>
		<div class="page-top__col">
			<filter-data/>
			
			<my-button-circle class="btn-circle_big" link="/create-campain">
				<svg class="icon ic-plus" width="12" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
				</svg>
			</my-button-circle>
		</div>
	</section>

	<section class="table-site-wrap">
		<table class="table-site">
			<thead>
				<tr>
					<th class="table-site__head table-site__head_check">
						<div class="table-site__head-content">
							<label class="input-check">
								<input type="checkbox"><span class="input-check__mark">
									<svg class="icon ic-tick" width="8" height="6">
										<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
									</svg></span>
							</label>
						</div>
					</th>
					<th class="table-site__head table-site__head_id">
						<div class="table-site__head-content">#</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Name</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Link</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Start Date</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">End Date</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Lead Fee</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Sale Fee</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Leads</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Sales</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Fee From Leads</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Fee From Sales</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">UTM</div>
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
						<my-checkbox></my-checkbox>
					</td>

					<td>{{ item.id }}</td>

					<td>
						<div class="table-name">
							<div class="table-name__img" :style="{'background-image': `url(${require('../assets/img/'+item.img)})`}"></div>
							<div class="table-name__text">{{ item.name }}</div>
						</div>
					</td>

					<td>{{ item.link }}</td>
					<td>{{ item.start }}</td>
					<td>{{ item.end }}</td>
					<td>{{ item.lead }}</td>
					<td>{{ item.sale }}</td>

					<td>
						<div class="tag tag_red">{{ item.leads }}</div>
					</td>
					<td>
						<div class="tag">{{ item.sales }}</div>
					</td>
					<td>
						<div class="text-red">{{ item.from_leads }}</div>
					</td>
					<td>
						<div class="text-green">{{ item.from_sales }}</div>
					</td>
					<td>{{ item.utm }}</td>
				</tr>
			</tbody>
		</table>

		<my-pager :count="10"/>
	</section>

	<div
		class="site-shadow"
		v-if="editPopupOpen"
		@click="this.editPopupOpen = false"
	></div>
 
	<div class="modal" :class="{ open: this.editPopupOpen }">
		<div class="modal__top">
			<my-button-circle class="btn-circle_grey" @click="this.editPopupOpen = false">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</my-button-circle>
			<div class="modal__actions">
				<my-button-circle class="btn-circle_grey btn_big">
					<svg class="icon ic-dots" width="14" height="2">
						<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
					</svg>
				</my-button-circle>
			</div>
		</div>
		<div class="modal__content">
			<div class="profile-info">
				<div class="profile-info__main">
					<div class="profile-info__img" :style="{'background-image': 'url(' + require('../assets/img/zara.png') + ')'}"></div>
					<div class="profile-info__name">ZARA
						<div class="profile-info__name-edit">
							<svg class="icon ic-edit" width="20" height="20">
								<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
							</svg>
						</div>
					</div>
					<div class="profile-info__id">ID: 34567890</div>
				</div>
				<div class="profile-info__content">
					<div class="profile-info__sect">
						<div class="profile-info__top">
							<div class="profile-info__title">Link Sources</div>
						</div>
						<div class="profile-info-params">
							<div class="profile-info-params__sect">
								<div class="profile-info-params__item">
									<div class="profile-info-params__label">Link</div>
									<div class="profile-info-params__val"><a href="https://bit.ly/campain=312=affilator4">https://bit.ly/campain=312=affilator4</a></div>
								</div>
								<div class="profile-info-params__item">
									<div class="profile-info-params__label">UTM</div>
									<div class="profile-info-params__val">Facebook Post 4</div>
								</div>
							</div>
							<div class="profile-info-params__sect">
								<div class="profile-info-params__item">
									<div class="profile-info-params__label">Link</div>
									<div class="profile-info-params__val"><a href="https://bit.ly/campain=312=affilator4">https://bit.ly/campain=312=affilator4</a></div>
								</div>
								<div class="profile-info-params__item">
									<div class="profile-info-params__label">UTM</div>
									<div class="profile-info-params__val">Facebook Post 4</div>
								</div>
							</div>
						</div>
					</div>
					<div class="profile-info__sect">
						<div class="profile-info__top">
							<div class="profile-info__title-wrap">
								<div class="profile-info__title">Users</div>
								<div class="profile-info-users">
									<div class="profile-info-users__icon">
										<svg class="icon ic-people" width="20" height="20">
											<use xlink:href="../assets/sprites/sprite.svg#ic-people"></use>
										</svg>
									</div>
									<div class="profile-info-users__num">12</div>
								</div>
							</div>
							<my-button-circle class="btn-circle_grey">
								<svg class="icon ic-arrow-right" width="6" height="11">
									<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
								</svg>
							</my-button-circle>
						</div>
					</div>
					<div class="profile-info__sect">
						<div class="profile-info__top">
							<div class="profile-info__title">Tags</div>
							<my-button-circle class="btn-circle_grey">
								<svg class="icon ic-plus" width="12" height="12">
									<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
								</svg>
							</my-button-circle>
						</div>
						<div class="tags-list">
							<div class="tag-item">
								<div class="tag-item__text">Cloths</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">Brands</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">Ads</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">SEO</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">Cloths</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">Brands</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">Ads</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
							<div class="tag-item">
								<div class="tag-item__text">SEO</div>
								<div class="tag-item__del">
									<svg class="icon ic-minus" width="7" height="1">
										<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="profile-info__sect">
						<div class="profile-info__top">
							<div class="profile-info__title">Note</div>
							<my-button-circle class="btn-circle_grey">
								<svg class="icon ic-edit" width="14" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
								</svg>
							</my-button-circle>
						</div>
						<div class="profile-info__note">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and search for 'lorem ipsum'will uncover many web sites still in their infancy</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FilterData from "@/components/FilterData"
import MyCheckbox from '@/components/UI/MyCheckbox'
import MyPager from '@/components/UI/MyPager'

export default {
	components: {
		FilterData,
		MyCheckbox,
		MyPager,
	},
	data() {
		return {
			rows: [
				{id:'1', img:'zara.png', name:'ZARA', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'2', img:'zara.png', name:'Google', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'3', img:'zara.png', name:'Nike', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'4', img:'zara.png', name:'Adidas', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'5', img:'zara.png', name:'Apple', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'6', img:'zara.png', name:'Microsoft', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'7', img:'zara.png', name:'Nividia', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'8', img:'zara.png', name:'Intel', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'9', img:'zara.png', name:'Tami 4', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'10', img:'zara.png', name:'Osem', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
				{id:'11', img:'zara.png', name:'Uniliver', link:'https://bit.ly/campain=312=affilator4', start:'20.3.2023', end:'20.3.2023', lead:'$112', sale:'$112', leads:'200', sales:'200', from_leads:'$112', from_sales:'$112', utm:'Facebook Post 4'},
			],
			editPopupOpen: false,
		}
	}
}
</script>

<style lang="scss">
	
</style>