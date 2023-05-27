<template>
	<section class="create-company">
		<div class="create-company__content">
			<div class="create-company__title">Create your first campaign</div>

			<div class="steps">
				<div
					class="steps__item"
					v-for="(step, index) in countSteps"
					:key="index"
					:class="classStep(step)"
				>
					<span class="steps__num">{{ step }}</span>
				</div>
			</div>

			<form class="form-site">
				<div v-if="curStep == 1">
					<div class="form-site__content">
						<div class="form-site__item">
							<input
								type="text"
								name="name"
								placeholder="Camping name"
								:value="`${campingName}`"
								@input="handleInput"
							>
						</div>
					</div>

					<div class="form-site__btn">
						<span class="btn" disabled="disabled" @click="nextStep" v-if="openSteps == curStep">
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>

						<span class="btn" @click="nextStep" v-else>
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>
					</div>
				</div>

				<div v-else-if="curStep == 2">
					<div class="form-site__content">
						<div class="form-site__item">
							<!-- <choose-input
								v-model:stepNumber='openSteps'
								:options="listInvitePeople"
							/> -->
							<div class="choose-input">
								<div class="choose-input__field">
									<input type="text" name="people" placeholder="Invite people">

									<div class="choose-input__btn" @click="this.openPopup=!this.openPopup">
										<svg class="icon ic-plus" width="10" height="10">
											<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
										</svg>
									</div>
								</div>

								<div class="choose-input__popup" :class="{ active: this.openPopup }">
									<div
										class="choose-input__item"
										v-for="(option, index) in listInvitePeople"
										:key="index"
										@click="resListOptions(index, listInvitePeople, resInvitePeople)"
									>
										<div class="choose-input__img" :style="{'background-image': 'url(' + require('../assets/img/'+option.img) + ')'}"></div>
										<div class="choose-input__info">
											<div class="choose-input__name">{{ option.name }}</div>
											<div class="choose-input__mail">{{ option.mail }}</div>
										</div>
									</div>
								</div>

								<div class="choose-input-res">
									<div
										class="choose-input-res__item"
										v-for="(item, index) in resInvitePeople"
										:key="index"
									>
										<div
											class="choose-input-res__img"
											:style="{'background-image': 'url(' + require('../assets/img/'+item.img) + ')'}"
										></div>
										<div class="choose-input-res__text">{{ item.name }}</div>

										<div
											class="choose-input-res__btn"
											@click="delItem(index, resInvitePeople)"
										>
											<svg class="icon ic-minus" width="7" height="1">
												<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="form-site__btn form-site__btn_sb">
						<span class="btn btn_opacity" @click="backStep">
							<svg class="icon ic-arr-left" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
							</svg>
							Back
						</span>

						<span class="btn" disabled="disabled" @click="nextStep" v-if="openSteps == curStep">
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>

						<span class="btn" @click="nextStep" v-else>
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>
					</div>
				</div>

				<div v-else-if="curStep == 3">
					<div class="form-site__content">
						<div class="form-site__item">
							<!-- <choose-input
								:options="listTags"
								@click="openSteps=4"
							/> -->

							<div class="choose-input">
								<div class="choose-input__field">
									<input type="text" name="people" placeholder="Add tags">

									<div class="choose-input__btn" @click="this.openPopup=!this.openPopup">
										<svg class="icon ic-plus" width="10" height="10">
											<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
										</svg>
									</div>
								</div>

								<div class="choose-input__popup" :class="{ active: this.openPopup }">
									<div
										class="choose-input__item"
										v-for="(option, index) in listTags"
										:key="index"
										@click="resListOptions(index, listTags, resTags)"
									>
										<div class="choose-input__info">
											<div class="choose-input__name">{{ option.name }}</div>
											<div class="choose-input__mail">{{ option.mail }}</div>
										</div>
									</div>
								</div>

								<div class="choose-input-res">
									<div
										class="choose-input-res__item"
										v-for="(item, index) in resTags"
										:key="index"
									>
										
										<div class="choose-input-res__text">{{ item.name }}</div>

										<div
											class="choose-input-res__btn"
											@click="delItem(index, resTags)"
										>
											<svg class="icon ic-minus" width="7" height="1">
												<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="form-site__btn form-site__btn_sb">
						<span class="btn btn_opacity" @click="backStep">
							<svg class="icon ic-arr-left" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
							</svg>
							Back
						</span>

						<span class="btn" @click="nextStep" v-if="openSteps==curStep">
							Skip
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>

						<span class="btn" @click="nextStep" v-else>
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>
					</div>
				</div>
				
				<div v-else-if="curStep == 4">
					<div class="form-site__content">
						<div class="form-site__item">
							<div class="select" :class="{ open: this.openPopup }">
								<div
									class="select__field"
									:class="{ active: selectVal }"
									@click="this.openPopup=!this.openPopup"
								>
									<span v-if="selectVal">{{ selectVal.text }}</span>
									<span v-else>Virtual number</span>
									
									<div class="select__arr">
										<svg class="icon ic-arrow-down" width="11" height="6">
											<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
										</svg>
									</div>
								</div>
								
								<div class="select__popup">
									<div
										class="select__item"
										:class="{ active: option.id == selectActiveItem}"
										v-for="(option, index) in phones"
										:key="index"
										@click="changeOption(index)"
									>
										<div class="select__icon">
											<svg class="icon ic-call" width="16" height="16">
												<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
											</svg>
										</div>
										<div class="select__text">{{ option.text }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="form-site__btn form-site__btn_sb">
						<span class="btn btn_opacity" @click="backStep">
							<svg class="icon ic-arr-left" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
							</svg>
							Back
						</span>

						<span class="btn" @click="nextStep" v-if="openSteps==curStep">
							Skip
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>

						<span class="btn" @click="nextStep" v-else>
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>
					</div>
				</div>

				<div v-else-if="curStep == 5">
					<div class="form-site__content">
						<div class="form-site__item">
							<div class="add-link">
								<div
									class="add-link__item"
									v-for="(link, index) in arrLinks"
									:key="index"
								>
									<input
										type="text"
										name="url"
										placeholder="Add link"
										:value="`${link.url}`"
										@input="changeLink(index, 'url')"
									>

									<input
										type="text"
										name="utm"
										placeholder="UTM"
										:value="`${link.utm}`"
										@input="changeLink(index, 'utm')"
									>

									<div
										class="add-link__del"
										@click="delLink(index)"
										v-if="openSteps > curStep"
									>
										<svg class="icon ic-bin" width="12" height="14">
											<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
										</svg>
									</div>
								</div>

							
								<div class="btn btn_grey" @click="addFieldsLink">
									<svg class="icon ic-plus" width="10" height="10">
										<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
									</svg>Add more link source
								</div>
							</div>
						</div>
					</div>

					<div class="form-site__btn form-site__btn_sb">
						<span class="btn btn_opacity" @click="backStep">
							<svg class="icon ic-arr-left" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
							</svg>
							Back
						</span>

						<span class="btn" disabled="disabled" @click="nextStep" v-if="openSteps == curStep">
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>

						<span class="btn" @click="nextStep" v-else>
							Next
							<svg class="icon ic-arr-right" width="10" height="8">
								<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
							</svg>
						</span>
					</div>
				</div>

				<div v-else-if="curStep == 6">
					<div class="form-site__content">
						<div class="form-site__item">
							<div class="form-site__label">Notes</div>
							<textarea placeholder="E.g. only for skinny ladies"></textarea>
						</div>
					</div>
					<div class="form-site__btn">
						<button type="submit" class="btn">Create</button>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
import MyButton from '@/components/UI/MyButton';
import ChooseInput from '@/components/UI/ChooseInput';
export default {
	components: {
		MyButton,
		ChooseInput,
	},
	data() {
		return {
			countSteps: 6,
			curStep: 5,
			openSteps: 5,
			campingName: '',
			listInvitePeople: [
				{id:1, img:'woman.png', name:'Sam Smith', mail:'samsmith@gmail.com'},
				{id:2, img:'woman.png', name:'Santa Kozackyh', mail:'santakoz@gmail.com'},
			],
			listTags: [
				{id:1, name:'Cloths'},
				{id:2, name:'Brands'},
			],
			resInvitePeople:[],
			resTags:[],
			openPopup: false,
			phones:[
				{id:1, text:'053-333-3333'},
				{id:2, text:'052-222-2222'},
			],
			selectItemActive: false,
			selectVal: '',
			selectActiveItem: 0,
			arrLinks: [
				{id:1, url:'', utm:''},
			],
		}
	},
	methods: {
		classStep(step) {
			return {
				current: this.curStep == step,
				active: this.curStep >= step
			};
		},

		handleInput(event) {
			this.campingName = event.target.value;
			
			if(event.target.value != ''){
				this.openSteps = 2
			}else{
				this.openSteps = 1
			}
		},

		nextStep(){
			this.curStep++;
		},

		backStep(){
			this.curStep--;
		},

		//Save result item
		resListOptions(index, list, result) {
			let availableOption = false;
			let idOption = list[index].id;

			for (let index = 0; index < result.length; index++) {
				if(idOption == result[index].id){
					availableOption = true
				}
			}

			if(availableOption === false){
				result.push(list[index]);
			}

			if(result.length > 0 && this.openSteps == this.curStep){
				this.openSteps++;
			}

			console.log('this.openSteps = ', this.openSteps);
		},

		//Delete result item
		delItem(index, result) {
			result.splice(index, 1); 
			
			if(result.length == 0){
				this.openSteps--;
			}
		},

		changeOption(index) {
			this.selectVal = this.phones[index];
			this.selectActiveItem = this.phones[index].id;
		},

		addFieldsLink() {
			this.arrLinks.push({id:1, url:'', utm:''});
		},

		changeLink(index, name) {
			if(name == 'url'){
				this.arrLinks[index].url = event.target.value
			}

			if(name == 'utm'){
				this.arrLinks[index].utm = event.target.value
			}
			this.openSteps = this.curStep + 1;
		},

		delLink(index) {
			this.arrLinks.splice(index, 1);
		}
	}
}
</script>

<style lang="scss">
	@import '../assets/styles/mixins.scss';
	@import '../assets/styles/vars.scss';

	.create-company{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		&__title{
			@include font(none, none, 2.6rem, 1.2, $color-text);
			text-align: center;
			margin-bottom: 5rem;
		}

		.form-site{
			max-width: 380px;
			margin: 0 auto;
		}

		.steps{margin-bottom: 58px;}
	}

	.steps{
		display: flex;
		gap: 44px;

		&__item{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 38px;
			height: 38px;
			border-radius: 50%;
			border: 2px solid transparent;
			background: #fff;
			transition: border 0.2s ease 0s;
		}

		&__num{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: #E4E4EA;
			@include font(none, 600, 1.4rem, 1, #fff);
			transition: border 0.2s ease 0s;
			position: relative;

			&::after,
			&::before{
				content: '';
				display: block;
				width: 26px;
				height: 2px;
				background: #E4E4EA;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}

			&::before{right: 100%;}
			&::after{left: 100%;}
		}

		&__item:first-child &__num::before{display: none;}
		&__item:last-child &__num::after{display: none;}

		&__item.current{border-color: #000;}
		&__item.active &__num{background: #000;}

		&__item.active &__num::before,
		&__item.active &__num::after{
			background: #000;
		}

		&__item.current &__num::before,
		&__item.current &__num::after{
			width: 22px;
		}

		&__item.current &__num::before{right: calc(100% + 4px);}
		&__item.current &__num::after{left: calc(100% + 4px);}
	}
</style>