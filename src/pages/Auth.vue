<template>
	<div class="main-page">
		<div class="main-page__content">
			<div class="main-page__logo"><img src="../assets/img/logo-full.svg" alt=""></div>
			<div class="main-page__auth">

				<div class="auth" v-if="window == 'registration'">
					<div class="auth__title">Get Started Now</div>
					<div class="auth__text">Enter your credentials to access your account</div>
					<div class="auth__content">
						<div class="btn-google">
							<div class="btn-google__icon"><img src="../assets/img/google.svg" alt=""></div>
							<div class="btn-google__text">Log in with Google</div>
						</div>

						<div class="auth__or"><span>or</span></div>

						<div class="auth__item">
							<div class="auth__label">Name</div>
							<div class="auth__field">
								<input type="text" placeholder="Enter your full name">
							</div>
						</div>

						<div class="auth__item">
							<div class="auth__label">Phone</div>
							<div class="auth__field">
								<input type="text" placeholder="Enter your number phone" @input="authError = true">
							</div>

							<div class="auth-error" v-if="authError">
								<div class="auth-error__icon">
									<svg class="icon ic-info" width="16" height="16">
										<use xlink:href="../assets/sprites/sprite.svg#ic-info"></use>
									</svg>
								</div>
								<div class="auth-error__text">Your number not found in our system</div>
							</div>
						</div>
					</div>

					<div class="auth__polit">
						<my-checkbox>I agree to the <u class="link-site">Terms & Privacy</u></my-checkbox>
					</div>

					<div class="auth__btn">
						<div
							class="btn"
							type="submit"
							@click="openModalCode"
						>
							Sign up
						</div>
					</div>
					
					<div class="auth__links">
						<span class="auth__links-acc">Have an account? </span><span class="auth__links-sign" @click="window ='auth'">Sign in</span>
					</div>
				</div>

				<div class="auth" v-else-if="window == 'auth'">
					<div class="auth__title">Glad you're back</div>

					<div class="auth__text">Enter your credentials to access your account</div>

					<div class="auth__content">
						<div class="btn-google">
							<div class="btn-google__icon"><img src="../assets/img/google.svg" alt=""></div>
							<div class="btn-google__text">Log in with Google</div>
						</div>
						<div class="auth__or"><span>or</span></div>
						<div class="auth__item">
							<div class="auth__label">Phone</div>
							<div class="auth__field">
								<input type="text" placeholder="Enter your number phone"  @input="authError = true">
							</div>

							<div class="auth-error" v-if="authError">
								<div class="auth-error__icon">
									<svg class="icon ic-info" width="16" height="16">
										<use xlink:href="../assets/sprites/sprite.svg#ic-info"></use>
									</svg>
								</div>
								<div class="auth-error__text">Your number not found in our system</div>
							</div>
						</div>
					</div>

					<div class="auth__btn">
						<div
							class="btn"
							type="submit"
							@click="openModalCode"
						>
							Sign up
						</div>
					</div>

					<div class="auth__links">
						<span class="auth__links-acc">Don't have a user? </span><span class="auth__links-sign" @click="window ='registration'">Sign up</span>
					</div>
				</div>
			</div>
		</div>

		<div class="main-page__img"><img src="../assets/img/main-info.png" alt=""></div>
	</div>

	<div
		class="site-shadow"
		v-if="openModal"
		@click="openModal = false"
	></div>

	<div class="popup-code" v-if="openSuccess && openModal">
		<div class="popup-code__success">
			<div class="popup-code__icon">
				<img src="../assets/img/success.svg" alt="" style="width:135px;">
			</div>

			<div class="popup-code__title">Hi Osher,</div>
			<div class="popup-code__text">Successfully connected,<br>you are instantly transported...</div>
		</div>
	</div>

	<div
		class="popup-code"
		v-if="openModal && openSuccess === false"
	>
		<div class="popup-code__title">Verification Code</div>

		<div class="popup-code__text">In the next few seconds, a verification code will be sent to the number you entered</div>

		<div class="code-verif">
			<input type="text" @input="inputCode">
			<input type="text" @input="inputCode">
			<input type="text" @input="inputCode">
			<input type="text" @input="inputCode">
		</div>

		<div
			class="timer"
			:style="{'background': 'conic-gradient(#000 '+countDownPr+'%, rgba(138, 145, 159, 0.2) 0)'}"
			 v-if="!btnAccept"
		>
			<div class="timer__content">{{ countDown }}</div>
		</div>

		<div class="popup-code__btn" v-if="btnAccept">
			<div class="btn" @click="openSuccess = true">Accept</div>
		</div>

		<div class="popup-code__bottom" v-else>
			<div class="popup-code__note" v-if="waiteCode">Please wait to receive the secret code</div>

			<div v-else>
				<div class="text-grey">Haven't received the code yet?</div>
				<span class="popup-code__link" @click="timerAgain">Send me again</span>
			</div>
		</div>
	</div>
</template>

<script>
import MyCheckbox from '@/components/UI/MyCheckbox.vue'
export default {
	data() {
		return {
			window: 'registration',
			authError: false,
			openModal: false,
			countDownStart: 10,
			countDown: 10,
			countDownPr: 100,
			waiteCode: true,
			btnAccept: false,
			openSuccess: false,
		}
	},
	methods: {
		countDownTimer () {
			if (this.countDown == 0) {
				this.waiteCode = false;
			}

			if (this.countDown > 0) {
				setTimeout(() => {
					this.countDown -= 1
					this.countDownPr = (this.countDown * 100) / this.countDownStart
					this.countDownTimer()
				}, 1000)
			}
		},

		openModalCode() {
			this.openModal = true;
			this.countDownTimer ();
		},

		timerAgain() {
			this.countDown = this.countDownStart;
			this.countDownTimer ();
		},

		inputCode() {
			this.btnAccept = true;
		}

	},
}
</script>

<style scope
MyCheckboxd>

</style>