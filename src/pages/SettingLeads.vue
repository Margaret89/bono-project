<template>
	<section class="settings">
		<setting-menu/>
		
		<div class="settings__wrap">
			<div class="settings__content">
				<div class="settings__title">Leads statuses</div>

				<div class="table-site-wrap table-site-wrap_white">
					<table class="table-site">
						<thead>
							<tr>
								<th class="table-site__head">
									<div class="table-site__head-content">Name</div>
								</th>
								<th class="table-site__head">
									<div class="table-site__head-content">Color</div>
								</th>
								<th class="table-site__head">
									<div class="table-site__head-content">Action</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(item, index) in list"
								:key="index"
							>
								<td>{{ item.name }}</td>

								<td>
									<div class="color-edit">
										<div class="color-edit__circle">
											<div class="color-edit__circle-in" :style="{'background':item.color}"></div>
										</div>
										<div class="color-edit__text">{{ item.color }}</div>
										<div class="color-edit__btn">
											<svg class="icon ic-edit" width="8" height="8">
												<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
											</svg>
										</div>
									</div>
								</td>
								<td>
									<my-select
										class="select_small"
										v-model:placeholder="placeholderSelect"
										:selectList="selectList"
									/>
									<div class="select select_small">
										<div class="select__field">Send SMS
											<div class="select__arr">
												<svg class="icon ic-arrow-down" width="11" height="6">
													<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
												</svg>
											</div>
										</div>
										<div class="select__popup">
											<div class="select__item">
												<div class="select__icon">
													<svg class="icon ic-call" width="16" height="16">
														<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
													</svg>
												</div>
												<div class="select__text"></div>
											</div>
											<div class="select__item">
												<div class="select__icon">
													<svg class="icon ic-call" width="16" height="16">
														<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
													</svg>
												</div>
												<div class="select__text"></div>
											</div>
											<div class="select__item">
												<div class="select__icon">
													<svg class="icon ic-call" width="16" height="16">
														<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
													</svg>
												</div>
												<div class="select__text"></div>
											</div>
											<div class="select__item">
												<div class="select__icon">
													<svg class="icon ic-call" width="16" height="16">
														<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
													</svg>
												</div>
												<div class="select__text"></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="pager">
						<a class="pager__nav">
							<svg class="icon ic-arr-left" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
							</svg>Previous
						</a>
						
						<a class="pager__nav">Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SettingMenu from '@/components/SettingMenu.vue'
export default {
	components: { SettingMenu },
	data() {
		return {
			list: [
				{name:'New', color:'#FF4D5A'},
				{name:'Invited to meeting', color:'#0FAD68'},
				{name:'Call back', color:'#000000'},
				{name:'Sara Milrose', color:'#2EAFFF'},
			],
			placeholderSelect: 'Send SMS',
			selectList:[
				{val:'param1', text:'Parametr 1'},
				{val:'param2', text:'Parametr 2'},
				{val:'param3', text:'Parametr 3'},
			],
		}
	}
}
</script>

<style scoped>

</style>