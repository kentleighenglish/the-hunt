<template>
	<div class="clueViewport">
		<ClueView v-if="mode == 'view'" />
		<ClueGrid v-if="mode == 'grid'" @grid-click="onGridClick($event)" />
		<ClueCamera v-if="mode == 'camera'" :data="data" @on-decode="onDecode($event)" />
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: {
		data: {}
	},
	methods: {
		onGridClick(e) {
			this.$emit('grid-click', e);
		},
		onDecode(e) {
			this.$emit('camera-decode', e);
		}
	},
	computed: {
		...mapState({
			mode({ clues: { mode } }) {
				return mode;
			}
		})
	}
};
</script>
<style lang="scss">
.clueViewport {
	display: block;
	height: 100%;
	width: 100%;
	padding: math.div($gap, 2);
	overflow-y: auto;

	&:before {
		width: 100%;
		padding-top: 100%;
	}
}
</style>
