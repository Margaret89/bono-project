<template>
	<section class="page-top">
		<div class="page-top__col">
			<h1>Users</h1>
			<div class="page-top__text">The list contains 200 users</div>
		</div>

		<div class="page-top__col">
			<my-form-search
				v-model="valueSearch"
			/>

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

			<my-button-circle class="btn-circle_big" @click="this.userAddOpen = !this.userAddOpen">
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
						<div class="table-site__head-content">Phone</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Email</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Status</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Role</div>
					</th>
					<th class="table-site__head">
						<div class="table-site__head-content">Joined at</div>
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
						<my-checkbox/>
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

					<td>
						<div class="tag-wrap">
							<div
								class="tag"
								:class="item.status_color?'tag_'+item.status_color:''"
							>
								{{ item.status }}
							</div>
							
							<svg class="icon ic-send-mail ic-yellow" width="16" height="14" v-if="item.status_color=='yellow'">
								<use xlink:href="../assets/sprites/sprite.svg#ic-send-mail"></use>
							</svg>
						</div>
					</td>

					<td>{{ item.role}}</td>
					<td>{{ item.date }}</td>
				</tr>
			</tbody>
		</table>

		<my-pager :count="10"/>
	</section>

	<div
		class="site-shadow"
		v-if="editPopupOpen || this.userAddOpen"
		@click="this.editPopupOpen = false; this.userAddOpen = false;"
	></div>
 
	<div class="modal" :class="{ open: this.editPopupOpen }">
		<div class="modal__top">
			<my-button-circle class="btn-circle_grey" @click="this.editPopupOpen = false">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</my-button-circle>

			<div class="modal__actions">
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
					<div class="profile-info__img" :style="{'background-image': 'url(' + require('../assets/img/keily.png') + ')'}"></div>
					<div class="profile-info__name">Keily Triump</div>
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
					<div class="profile-params__label">Joined at</div>
					<div class="profile-params__val">12.06.2023</div>
				</div>
			</div>
			<div class="profile-role">
				<div class="profile-role__top">
					<div class="profile-role__title">Role</div>
					<div class="select">
						<div class="select__field active">Affiliator
							<div class="select__arr">
								<svg class="icon ic-arrow-down" width="11" height="6">
									<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
								</svg>
							</div>
						</div>
						<div class="select__popup">
							<div class="select__item">
								<div class="select__text">Parameter 1</div>
							</div>
							<div class="select__item">
								<div class="select__text">Parameter 2</div>
							</div>
							<div class="select__item">
								<div class="select__text">Parameter 3</div>
							</div>
						</div>
					</div>
				</div>
				<div class="profile-role__content">
					<div class="profile-role__subtitle">Campaigns</div>
					<div class="profile-role__list">
						<div class="profile-role__item">
							<div class="profile-role__text">Campaign 1</div>
							<div class="profile-role__btn">
								<svg class="icon ic-bin" width="12" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
								</svg>
							</div>
						</div>
						<div class="profile-role__item">
							<div class="profile-role__text">Campaign 2</div>
							<div class="profile-role__btn">
								<svg class="icon ic-bin" width="12" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
								</svg>
							</div>
						</div>
						<div class="profile-role__item">
							<div class="profile-role__text">Campaign 3</div>
							<div class="profile-role__btn">
								<svg class="icon ic-bin" width="12" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
								</svg>
							</div>
						</div>
						<div class="profile-role__item">
							<div class="profile-role__text">Campaign 4</div>
							<div class="profile-role__btn">
								<svg class="icon ic-bin" width="12" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
								</svg>
							</div>
						</div>
					</div>
					<div class="profile-role__more"><span class="btn btn_grey">more
							<svg class="icon ic-arrow-down" width="11" height="6">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
							</svg>
							</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal-main" :class="{ open: this.userAddOpen }">
		<div class="modal-main__close">
			<my-button-circle class="btn-circle_grey" @click="this.userAddOpen = false">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</my-button-circle>
		</div>
		<div class="modal-main__title">Add user</div>
		<div class="modal-main__content">
			<div class="add-block">
				<div class="add-block__field">
					<input type="text" placeholder="Add user">
					<div class="add-block__plus">
						<svg class="icon ic-plus" width="10" height="10">
							<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
						</svg>
					</div>
				</div>
				<div class="add-block__list">

					<div
						class="add-block-item"
						v-for="(item, index) in usersList"
						:key="index"
					>
						<div
							class="add-block-item__img"
							:style="{'background-image': 'url(' + require('../assets/img/'+item.img) + ')'}"
						></div>

						<div class="add-block-item__content">
							<div class="add-block-item__info">
								<div class="add-block-item__name">{{ item.title }}</div>

								<div class="add-block-item__mail">{{ item.email }}</div>
								
							</div>
							
							<span class="btn btn_border-dark btn_small" v-if="item.btn">
								<svg class="icon ic-plus" width="10" height="10">
									<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
								</svg>Invite
							</span>

							<svg class="icon ic-send-mail" width="16" height="14" v-if="item.icon_mail">
								<use xlink:href="../assets/sprites/sprite.svg#ic-send-mail"></use>
							</svg>
						</div>
					</div>
				</div>
				<div class="add-block__btn"><span class="btn">Inivite all</span></div>
			</div>
		</div>
	</div>
</template>

<script>
import FilterData from "@/components/FilterData"
import MyCheckbox from '@/components/UI/MyCheckbox'
import MyPager from '@/components/UI/MyPager'
import MyButtonCircle from '@/components/UI/MyButtonCircle.vue'

export default {
	components: {
		FilterData,
		MyCheckbox,
		MyPager,
		MyButtonCircle,
	},
	data() {
		return {
			rows: [
				{
					id:'1',
					img:'jessica.png',
					name:'Jessica Frencheska',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Active',
					role:'Affiliator',
					date:'20.3.2023',
				},
				{
					id:'2',
					img:'abraham.png',
					name:'Abraham Luis',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Active',
					role:'Lead',
					date:'20.3.2023',
				},
				{
					id:'3',
					img:'keily.png',
					name:'Keily Triump',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Pending',
					status_color:'yellow',
					role:'Lead',
					date:'20.3.2023',
				},
				{
					id:'4',
					fio:'EE',
					name:'Eran Eluz',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Pending',
					status_color:'yellow',
					role:'Lead',
					date:'20.3.2023',
				},
				{
					id:'5',
					fio:'JR',
					name:'Jerry Ronie',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Pending',
					status_color:'yellow',
					role:'Affiliator',
					date:'20.3.2023',
				},
				{
					id:'6',
					fio:'AA',
					name:'Ali Abuzark',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Active',
					role:'Affiliator',
					date:'20.3.2023',
				},
				{
					id:'7',
					fio:'OC',
					name:'Osher Cohen',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Active',
					role:'Affiliator',
					date:'20.3.2023',
				},
				{
					id:'8',
					img:'abraham.png',
					name:'Abraham Luis',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Pending',
					status_color:'yellow',
					role:'Affiliator',
					date:'20.3.2023',
				},
				{
					id:'9',
					fio:'EP',
					name:'Eyal Poipembuilm',
					phone:'+1 806 1239 3284',
					email:'schuppe.jany@hotmail.com',
					status:'Pending',
					status_color:'yellow',
					role:'Lead',
					date:'20.3.2023',
				},
				{
					id:'10',
					fio:'GJ',
					name:'Grifin Jeck',
					phone:'+1 806 1239 3284',
					email:'legros.austyn@hotmail.com',
					status:'Active',
					role:'Lead',
					date:'20.3.2023',
				},
				{
					id:'11',
					img:'abraham.png',
					name:'Abraham Luis',
					phone:'+972 52 888 493',
					email:'estelle31@rowe.org',
					status:'Active',
					role:'Lead',
					date:'20.3.2023',
				},
			],
			editPopupOpen: false,
			userAddOpen: false,
			valueSearch: '',
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
			usersList: [
				{img:'woman.png', title:'Sam Smith', btn:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', btn:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', btn:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', icon_mail:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', icon_mail:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', icon_mail:'true'},
				{img:'woman.png', title:'Santa Kozackyh', email:'samsmith@gmail.com', icon_mail:'true'},
			]
		}
	}
}
</script>

<style lang="scss">
	
</style>