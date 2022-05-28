<template>
	<div :class="componentClass">
		<div ref="logo" class="introAnimation__logo">
			<div class="introAnimation__logoPrimary">H</div>
			<div class="introAnimation__logoSecondary">H</div>
		</div>
		<div ref="text" class="introAnimation__text">The Hunt</div>
		<div ref="back" class="introAnimation__back" />
		<div ref="back2" class="introAnimation__back2" />
	</div>
</template>
<script>
import anime from "animejs";
import classModsMixin from "@/mixins/classModsMixin";

export default {
	name: "IntroAnimation",
	mixins: [classModsMixin],
	classMod: {
		baseClass: "introAnimation",
		modifiers: {
			loaded: (vm) => vm.isLoaded
		}
	},
	data() {
		return {
			isLoaded: false
		};
	},
	mounted() {
		this.isLoaded = true;

		setTimeout(() => {
			if (this.$refs.text && this.$refs.logo) {
				anime({
					targets: [this.$refs.text],
					translateY: [
						{ value: -75.5, duration: 0 },
						{ value: 0, duration: 2500 }
					],
					opacity: [
						{ value: 1, duration: 0 },
						{ value: 0, duration: 1200 }
					],
					easing: "easeOutElastic(1, .8)"
				});

				const primaryLogo = this.$refs.logo.querySelector(
					".introAnimation__logoPrimary"
				);
				const secondaryLogo = this.$refs.logo.querySelector(
					".introAnimation__logoSecondary"
				);

				// const primaryColour = "#FF2B7C";
				// const secondaryColour = "#692E7C";

				const logoAnimProps = {
					rotate: [
						{ value: 0, duration: 0, delay: 500 },
						{ value: 15, duration: 800 }
					],
					opacity: [
						{ value: 1, duration: 0, delay: 500 },
						{ value: 0, duration: 500, delay: 0 }
					],
					easing: "easeInQuad",
					loop: 1
				};

				anime({
					targets: [primaryLogo],
					...logoAnimProps
				});
				anime({
					targets: [secondaryLogo],
					...logoAnimProps
				});

				anime({
					targets: [this.$refs.logo, this.$refs.back],
					scale: [
						{ value: 1, duration: 0, delay: 500 },
						{ value: 8, duration: 1000 }
					],
					easing: "easeInQuad"
				});
				anime({
					targets: [this.$refs.back2],
					opacity: [
						{ value: 1, duration: 0, delay: 500 },
						{ value: 0, duration: 500, delay: 0 }
					],
					easing: "easeInQuad"
				});
			}
		}, 100);
	}
};
</script>
<style lang="scss">
.introAnimation {
	position: absolute;
	display: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	overflow: hidden;
	justify-content: center;
	align-items: center;

	&__back {
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% + 6px);
		height: calc(100% + 32px);

		background: $bg;
		z-index: 1;
		margin-left: -6px;
		margin-top: -32px;

		-webkit-mask-image: radial-gradient(
			circle 64px at 50% 50%,
			transparent 64px,
			#000 0
		);
	}
	&__back2 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background: $bg-accent-dark;
	}

	&__text {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 100%;

		font-family: Arial;
		font-size: 22px;
		letter-spacing: -0.01em;
		transform: translateY(-75.5px);
		z-index: 2;
	}

	&__logo {
		position: relative;
		width: 128px;
		height: 128px;
		border-radius: 100%;
		margin-top: -33px;
		margin-left: -5px;

		border-radius: 100%;
		transform: scaleX(0.97);
		z-index: 2;

		&Primary {
			display: block;
			position: absolute;
			content: "H";
			width: 100%;

			font-family: $font-display;
			font-size: 128px;
			color: $primary;

			text-align: center;
			line-height: 148px;
			z-index: 1;
		}
		&Secondary {
			display: block;
			position: absolute;
			content: "H";
			width: 100%;

			font-family: $font-display;
			font-size: 128px;
			color: $primary-accent;

			text-align: center;
			line-height: 148px;

			margin-top: 2px;
			margin-left: 2px;
		}
	}
}
</style>
