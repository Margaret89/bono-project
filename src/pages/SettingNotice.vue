<template>
	<section class="settings">
		<setting-menu/>

		<div class="settings__wrap">
			<div class="settings__content" style="width: 870px">
				<div class="settings__title">Notifications settings</div>

				<div class="table-site-wrap table-site-wrap_white">
					<table class="table-site">
						<thead>
							<tr>
								<th class="table-site__head">
									<div class="table-site__head-content">Send notifications when</div>
								</th>
								<th class="table-site__head">
									<div class="table-site__head-content table-site__head-content_center">Push</div>
								</th>
								<th class="table-site__head">
									<div class="table-site__head-content table-site__head-content_center">Email</div>
								</th>
								<th class="table-site__head">
									<div class="table-site__head-content table-site__head-content_center">SMS</div>
								</th>
							</tr>
						</thead>

						<tbody>
							<tr
								v-for="(item, index) in list"
								:key="index"
							>
								<td>
									<span v-if="item.title === 'str1'">
										Employee made less<span class="table-site-count">20</span>calls in range of<span class="table-site-count table-site-count_dark">20</span>minutes/hours/days/month
									</span>

									<span v-else-if="item.title == 'str2'">
										Lead status changed to<span class="table-site-count">20</span>or changed from<span class="table-site-count">60</span>to<span class="table-site-count">80</span>
									</span>

									<span v-else-if="item.title == 'str3'">
										Double lead in range of minutes/hours/days/month<span class="table-site-count">20</span>
									</span>

									<span v-else>
										{{ item.title }}
									</span>
								</td>

								<td class="text-center">
									<my-checkbox></my-checkbox>
								</td>

								<td class="text-center">
									<my-checkbox></my-checkbox>
								</td>

								<td class="text-center">
									<my-checkbox></my-checkbox>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SettingMenu from '@/components/SettingMenu.vue'
import MyCheckbox from '@/components/UI/MyCheckbox.vue'
export default {
	components: { SettingMenu, MyCheckbox },
	data() {
		return {
			list: [
				{title:'Inattention lead', check1:'false', check2:'false', check3:'false'},
				{title:'Payment received', check1:'true', check2:'true', check3:'true'},
				{title:'Campaign started', check1:'true', check2:'true', check3:'true'},
				{title:'Campaign ended', check1:'true', check2:'true', check3:'true'},
				{title:'Affiliator connection request', check1:'false', check2:'false', check3:'false'},
				{title:'SMS package is about to get ended', check1:'true', check2:'true', check3:'true'},
				{title:'Calls plan reached out', check1:'true', check2:'true', check3:'true'},
				{title:'Lating employee', check1:'true', check2:'true', check3:'true'},
				{title:'Missing employee', check1:'false', check2:'false', check3:'false'},
				{title:'Employee ended early', check1:'true', check2:'true', check3:'true'},
				{title:'str1', check1:'true', check2:'true', check3:'true'},
				{title:'str2', check1:'true', check2:'true', check3:'true'},
				{title:'str3', check1:'true', check2:'true', check3:'true'},
				{title:'New campaign from favorite company', check1:'true', check2:'true', check3:'true'},
			]
		}
	}

}
</script>

<style scoped>

</style>