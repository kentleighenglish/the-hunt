<template>
	<div class="viewPage">
		<ClueViewport
			v-if="!loading && mode !== 'error'"
			@grid-click="setClue($event)"
			@camera-decode="onCameraDecode($event)"
		/>
		<CommonLoader v-if="loading && !error" />
		<div v-if="!loading && error && mode === 'error'">
			<p class="error">{{ error }}</p>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	name: "IndexPage",
	computed: {
		...mapState({
			mode({ clues: { mode } }) {
				return mode;
			},
			loading({ clues: { loading } }) {
				return loading;
			},
			error({ clues: { error } }) {
				return error;
			}
		})
	}
};
</script>
<style lang="scss">
.viewPage {
	display: flex;
	height: 100%;
	width: 100%;

	flex-direction: column;
}
</style>
