<template>
	<section class="settings">
		<setting-menu/>

		<div class="settings__wrap">
			<div class="settings__content">
				<div class="settings__title">Integrations</div>

				<div class="info-int">
					<div class="info-int__sect">
						<div class="info-int__title">Credentials</div>

						<div class="info-int__list">
							<div
								class="info-int__row"
								v-for="(row, index) in credentials"
								:key="index"
							>
								<div
									class="info-int__item"
									v-for="(item, indx) in row.items"
									:key="indx"
								>
									<div class="info-int__label">{{ item.label }}</div>

									<div class="info-int__val">
										{{ item.val }}

										<div class="info-int__edit">
											<svg class="icon ic-edit" width="8" height="8">
												<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="info-int__sect">
						<div class="info-int__title">Analytics & data</div>

						<div class="info-int__list">
							<div
								class="info-int__row"
								v-for="(row, index) in analytics"
								:key="index"
							>
								<div class="info-int__subtitle">{{ row.title }}</div>

								<div
									class="info-int__item"
									v-for="(item, indx) in row.items"
									:key="indx"
								>
									<div class="info-int__label">{{ item.label }}</div>

									<div class="info-int__val">
										{{ item.val }}
										<div class="info-int__edit">
											<svg class="icon ic-edit" width="8" height="8">
												<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="info-int__sect">
						<div class="info-int__title">Ads manager</div>

						<div class="info-int__list">
							<div
								class="info-int__row"
								v-for="(row, index) in adsManager"
								:key="index"
							>
								<div class="info-int__subtitle">{{ row.title }}</div>

								<div
									class="info-int__item"
									v-for="(item, indx) in row.items"
									:key="indx"
								>
									<div class="info-int__label">{{ item.label }}</div>
									<div class="info-int__val">
										{{ item.val }}
										<div class="info-int__edit">
											<svg class="icon ic-edit" width="8" height="8">
												<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
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
			credentials: [
				{
					items:[
						{label:'Facebook page id', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					items:[
						{label:'Facebook business manager id', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					items:[
						{label:'Google mcc id', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					items:[
						{label:'Instagram id', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					items:[
						{label:'Linkedin id', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
			],
			analytics: [
				{
					title:'Google analytics',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Facebook analytics',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Instagram',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Linkedin',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Youtube',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
			],
			adsManager: [
				{
					title:'Google',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Facebook',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
				{
					title:'Linkedin',
					items:[
						{label:'ID', val:'2312456578'},
						{label:'Secret key', val:'Syj53&$fdgkj99'},
					]
				},
			]
		}
	}
}
</script>

<style scoped>

</style>