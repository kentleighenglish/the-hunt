<template>
	<div class="defaultLayout">
		<GlobalBanner />
		<div class="defaultLayout__content">
			<Nuxt />
		</div>
		<GlobalNav />
	</div>
</template>
<style lang="scss">
	.defaultLayout {
		display: flex;
		flex-direction: column;
		height: 100%;

		&__content {
			height: 100%;
			display: flex;
			background-color: $bg-accent-dark;
			box-shadow: inset 0px 10px 15px -10px fade-out(black, .4);

			align-items: center;
			justify-content: center;

			&:not(.loaded) {
				.viewport, .grid, .error {
					display: none;
				}
			}
		}
	}
</style>
