<template>
	<div class="indexPage">
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
