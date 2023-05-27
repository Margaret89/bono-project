<template>
	<aside class="sidebar" :class="{ active: this.status }">
		<router-link to="/" class="sidebar-logo">
			<div class="sidebar-logo__short"><img src="../assets/img/logo.svg" alt=""></div>
			<div class="sidebar-logo__full"><img src="../assets/img/logo-full.svg" alt=""></div>
		</router-link>

		<div class="sidebar__content">
			<div class="sidebar-menu">
				<div class="sidebar-menu__item" v-for="item in menu">
					<div class="sidebar-menu__icon">
						<svg :class="'icon '+item.icon" :width="item.icon_width" :height="item.icon_height">
							<use :xlink:href="require(`../assets/sprites/sprite.svg`)+'#'+item.icon"></use>
						</svg>
					</div>
					<div class="sidebar-menu__text">{{ item.text }}</div>
				</div>
			</div>

			<div class="sidebar__arr" @click="this.status=!this.status">
				<svg class="icon ic-arrow-right" width="6" height="11">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
				</svg>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	data() {
		return{
			menu: [
				{icon:'ic-home', icon_width:'20', icon_height:'20', text:'Overview'},
				{icon:'ic-star', icon_width:'20', icon_height:'20', text:'Campains'},
				{icon:'ic-person', icon_width:'16', icon_height:'22', text:'Leads'},
				{icon:'ic-phone', icon_width:'20', icon_height:'20', text:'Calls'},
				{icon:'ic-people', icon_width:'20', icon_height:'20', text:'Users'},
			],
			status: false,
		}
	},
}
</script>

<style scoped lang="scss">
	.sidebar{
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		width: 87px;
		background: #F9F9FB;
		transition: width 0.3s ease 0s;

		&__content{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
			height: calc(100vh - 90px);
			padding: 32px 0;
		}

		&__arr{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background: #EBEFF2;
			margin-top: auto;
			transition: background 0.2s ease 0s, transform 0.3s ease 0s;
			cursor: pointer;

			.icon{transition: stroke 0.2s ease 0s;}
		}

		&__arr:hover{
			background: #000;

			.icon{fill: #fff;}
		}
	}

	.sidebar-logo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 100%;
		height: 90px;

		&__full{display: none;}
	}

	.sidebar-menu{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 51px;
		width: 100%;
		max-height: 100%;
		overflow-y: auto;

		&__item{
			display: flex;
			align-items: center;
			gap: 15px;
			opacity: 0.35;
			cursor: pointer;
			transition: opacity 0.2s ease 0s;

			&:hover,
			&.active{
				opacity: 1;
			}
		}

		&__icon{
			display: inline-flex;
			justify-content: center;
			flex-shrink: 0;
			width: 20px;

			.icon{fill: #000;}
			.icon.ic-stroke{stroke: #000;}
		}

		&__text{display: none;}
	}

	.sidebar.active{
		width: 215px;

		.sidebar-logo{
			justify-content: flex-start;
			padding: 0 30px;

			&__full{display: block;}
			&__short{display: none;}
		}

		.sidebar__content{
			align-items: flex-start;
		}

		.sidebar__arr{
			align-self: flex-end;
			margin-right: 30px;
			transform: rotate(180deg);
		}

		.sidebar-menu{
			align-items: flex-start;
			padding-left: 30px;
			padding-right: 30px;

			&__text{display: block;}
		}
	}
</style>