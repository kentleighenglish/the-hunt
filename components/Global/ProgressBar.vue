<template>
	<div class="progressBar">
		<div class="progressBar__frame" />
		<div
			class="progressBar__slider"
			:style="{ width: `${percentComplete}%` }"
		/>
	</div>
</template>
<script>
export default {
	name: "GlobalProgressBar",
	computed: {
		percentComplete() {
			// if (!this.data.loading &&
			// 	this.data.clues && this.data.clues.length &&
			// 	completed && completed.length
			// ) {
			// 	return ((completed.length / this.data.clues.length) * 100) + '%';
			// }
			return 0;
		}
	}
};
</script>
<style lang="scss">
.progressBar {
	position: relative;
	height: 1px;

	&__slider,
	&__frame {
		position: absolute;
		top: 0;
		left: 0;

		display: block;
		height: 1px;
	}

	&__slider {
		width: 0%;
		background-color: $primary;

		transition: width 1s;
	}
	&__frame {
		width: 100%;
		background-color: darken($bg-accent-dark, 5%);
	}
}
</style>
