<template>
	<div class="banner">
		<h1 class="banner__title">
			The Hunt
		</h1>
		<GlobalProgressBar />
	</div>
</template>
<script>
export default {
	name: "GlobalBanner"
}
</script>
<style lang="scss">
.banner {
	.banner__title {
		position: relative;
		color: $primary;
		font-family: $font-display;
		letter-spacing: .2rem;
		font-size: $font-xl;
		text-align: center;
		margin: math.div($gap, 2) 0 0;
		z-index: 1;

		&:before {
			content: "The Hunt";
			color: $primary-accent;
			position: absolute;
			z-index: -1;

			margin-top: 2px;
			margin-left: 2px;
			opacity: 1;
		}
	}
}
</style>
