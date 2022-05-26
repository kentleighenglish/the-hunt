<template>
	<div class="loader">
		<span />
	</div>
</template>
<script>
export default {
	name: "CommonLoader",
	props: {
		loading: {
			type: Boolean,
			default: false
		}
	}
};
</script>
<style lang="scss">
@keyframes loading {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes color {
	0% {
		border-top-color: $primary;
		border-bottom-color: $primary;
	}
	50% {
		border-top-color: $primary-accent;
		border-bottom-color: $primary-accent;
	}
	100% {
		border-top-color: $primary;
		border-bottom-color: $primary;
	}
}

div.loader {
	display: inline-block;
	position: relative;
	text-align: center;
	margin: 0 auto;
	align-self: center;
	justify-self: center;

	span {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 100px;

		border: 6px solid transparent;
		border-top-color: $primary;
		border-bottom-color: $primary;
		border-radius: 50%;

		animation: loading infinite 2s linear, color infinite 8s linear;
		z-index: 2;

		&:before {
			content: "";
			position: absolute;
			top: -4px;
			left: -4px;
			box-sizing: border-box;
			width: 96px;
			height: 96px;

			border: 2px solid $bg-accent-dark;
			border-top-width: 10px;
			border-bottom-width: 10px;
			border-radius: 50%;

			animation: loading infinite 8s linear;
			animation-direction: reverse;
		}
	}
}
</style>
