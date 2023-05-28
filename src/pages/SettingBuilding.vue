<template>
	<section class="settings">
		<setting-menu/>

		<div class="settings__wrap">
			<div class="settings__content">
				<div class="settings__title">Billing</div>
				
				<div class="credit-history">
					<div class="credit-history__sect credit-history__sect_green">
						<div class="credit-history__top">
							<div class="credit-history__title">Crad Details</div>

							<div class="btn-circle btn-circle_opacity">
								<svg class="icon ic-edit" width="14" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
								</svg>
							</div>
						</div>

						<div class="credit-history-info">
							<div class="credit-history-info__icon">
								<svg class="icon ic-credit-card" width="22" height="19">
									<use xlink:href="../assets/sprites/sprite.svg#ic-credit-card"></use>
								</svg>
							</div>
							<div class="credit-history-info__text">4580&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;8899</div>
						</div>
					</div>

					<div class="credit-history__sect">
						<div class="credit-history__top">
							<div class="credit-history__title">Bank Account Details</div>
							<div class="btn-circle btn-circle_grey">
								<svg class="icon ic-edit" width="14" height="14">
									<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
								</svg>
							</div>
						</div>

						<div class="credit-history__list">
							<div
								class="credit-history__item"
								v-for="(item, index) in details"
								:key="index"
							>
								<div class="credit-history__label">{{ item.label }}</div>
								<div class="credit-history__val">{{ item.val }}</div>
							</div>
						</div>
					</div>

					<div class="credit-history__sect">
						<div class="credit-history__top">
							<div class="credit-history__title">Invoices History</div>
							<div class="btn-circle btn-circle_grey">
								<svg class="icon ic-export" width="16" height="16">
									<use xlink:href="../assets/sprites/sprite.svg#ic-export"></use>
								</svg>
							</div>
						</div>

						<div class="table-site-wrap table-site-wrap_white">
							<table class="table-site">
								<thead>
									<tr>
										<th class="table-site__head">
											<div class="table-site__head-content">Invoice no.</div>
										</th>
										<th class="table-site__head">
											<div class="table-site__head-content">Date</div>
										</th>
										<th class="table-site__head">
											<div class="table-site__head-content">Amount</div>
										</th>
										<th class="table-site__head">
											<div class="table-site__head-content">Preview</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="(item, index) in historyList"
										:key="index"
									>
										<td>{{ item.inv }}</td>
										<td>{{ item.date }}</td>
										<td><span class="text-green">{{ item.amount }}</span></td>
										<td>
											<div class="file">
												<div class="file__icon">
													<svg class="icon ic-paper" width="13" height="14">
														<use xlink:href="../assets/sprites/sprite.svg#ic-paper"></use>
													</svg>
												</div>
												<div class="file__text">PDF</div>
											</div>
										</td>
									</tr>
									
								</tbody>
							</table>

							<div class="pager">
								<a class="pager__nav">
									<svg class="icon ic-arr-left" width="10" height="8">
										<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
									</svg>
									Previous
								</a>

								<a class="pager__nav">
									Next
									<svg class="icon ic-arr-right" width="10" height="8">
										<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
									</svg>
								</a>
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
			details: [
				{label:'Owners name', val:'Jones Fredinand'},
				{label:'Bank number', val:'1234567'},
				{label:'Branch number', val:'7654321'},
				{label:'Account number', val:'9087654321'},
			],
			historyList: [
				{inv:'6003', date:'20.3.2023', amount:'$80'},
				{inv:'6002', date:'20.3.2023', amount:'$120'},
				{inv:'6001', date:'20.1.2023', amount:'$80'},
				{inv:'6000', date:'20.12.2022', amount:'$80'},
			]
		}
	}
}
</script>

<style scoped>

</style>