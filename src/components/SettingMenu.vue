<template>
	<ul class="left-menu">
		<li
			class="left-menu__item"
			v-for="(item, index) in menu"
			:key="index"
			:class="{active: item.link == linkActiveClass}"
		>

			<router-link :to="`${item.link}`" class="left-menu__link">
				<div class="left-menu__icon">
					<svg :class="'icon '+item.icon" :width="item.icon_width" :height="item.icon_height">
						<use :xlink:href="require(`../assets/sprites/sprite.svg`)+'#'+item.icon"></use>
					</svg>
				</div>

				<div class="left-menu__text">{{ item.text}}</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{link:'/setting-bussiness', icon:'ic-briefcase', icon_width:'15', icon_height:'15', text:'Business',},
				{link:'/setting-building', icon:'ic-wallet', icon_width:'17', icon_height:'16', text:'Billing'},
				{link:'/setting-integrations', icon:'ic-link', icon_width:'17', icon_height:'10', text:'Integrations'},
				{link:'/setting-leads', icon:'ic-note', icon_width:'17', icon_height:'17', text:'Leads Statuses'},
				{link:'/setting-notice', icon:'ic-notice', icon_width:'16', icon_height:'18', text:'Notifications Settings'},
			]
		}
	}
}
</script>

<style scoped>

</style>

