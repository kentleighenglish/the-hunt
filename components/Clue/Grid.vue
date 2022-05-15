<template>
	<div class="clueGrid">
		<div v-for="(stage, index) in stages" :key="index" class="clueGrid__stage">
			<h2>Stage {{ stage.stage }}</h2>
			<div class="clueGrid__stageClues">
				<a
					v-for="c in stage.clues"
					:key="c._id"
					class="clueGrid__item"
					:class="{ disabled: !c.clue.unlocked, active: c.clue.current }"
					@click="onClueClick(c.clue)"
				>
					<span class="clueGrid__itemIcon">
						<icon>{{ c.clue.unlocked ? "lock_open" : "lock" }}</icon>
					</span>
					<span>{{ c.clue.unlocked ? c.number : "?" }}</span>
				</a>
			</div>
			<hr />
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	name: "ClueGrid",
	computed: {
		...mapState({
			stages({ clues: { clues } }) {
				return clues.reduce((acc, clue, index) => {
					const stageIndex = clue.stage - 1;

					acc[stageIndex] = {
						stage: clue.stage,
						clues: [
							...(acc[stageIndex].clues || []),
							{
								clue,
								number: index + 1
							}
						]
					};

					return acc;
				}, []);
			}
		})
	},
	methods: {
		onClueClick(clue) {
			if (clue.unlocked) {
				this.$emit("grid-click", clue._id);
			}
		}
	}
};
</script>
<style lang="scss">
.clueGrid {
	display: block;
	width: 100%;

	h2 {
		font-weight: 400;
		font-size: $font-sm;
		margin: math.div($gap, 4) 0;
		color: $grey-light;
	}

	hr {
		border-bottom-width: 1px;
		border-color: $bg;
		margin: 0 5%;
	}

	&__stageClues {
		display: flex;
		width: 100%;

		flex-wrap: wrap;
	}

	&__item {
		display: flex;
		flex-direction: column;
		color: white;

		padding: math.div($gap, 2);
		width: 20%;

		justify-content: flex-start;
		align-items: center;

		&.disabled {
			color: $grey;
		}
		&.active {
			color: $primary;
		}
	}
}
</style>
