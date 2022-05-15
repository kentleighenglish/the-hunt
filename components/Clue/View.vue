<template>
	<div v-if="currentClue" class="clueView">
		<div
			v-if="currentClue.text && currentMode === 'text'"
			class="clueView__text"
		>
			<p v-html="currentClue.text"></p>
		</div>
		<div
			v-if="currentClue.audio && currentMode === 'audio'"
			class="clueView__audio"
		>
			<ClueAudio :audio="currentClue.audio" />
		</div>
		<div
			v-if="currentClue.hint && currentMode === 'hint'"
			class="clueView__hint"
		>
			<p v-html="currentClue.hint"></p>
		</div>
		<div
			v-if="currentClue.image"
			class="clueView__image"
			:style="{ 'background-image': 'url(' + currentClue.image + ')' }"
		></div>
		<div class="clueView__buttons">
			<a
				v-if="currentClue.text"
				class="clueView__button"
				:class="{ active: mode === 'text' }"
				@click="setMode('text')"
			>
				<CommonIcon>notes</CommonIcon>
			</a>
			<a
				v-if="currentClue.image"
				class="clueView__button"
				:class="{ active: mode === 'image' }"
				@click="setMode('image')"
			>
				<CommonIcon>image</CommonIcon>
			</a>
			<a
				v-if="currentClue.audio"
				class="clueView__button"
				:class="{ active: mode === 'audio' }"
				@click="setMode('audio')"
			>
				<CommonIcon>volume_up</CommonIcon>
			</a>
			<a
				v-if="currentClue.hint"
				class="clueView__button"
				:class="{ active: mode === 'hint' }"
				@click="setMode('hint')"
			>
				<CommonIcon>help_outline</CommonIcon>
			</a>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	name: "ClueView",
	computed: {
		...mapState({
			currentClue({ clues: { currentClue } }) {
				return currentClue;
			}
		})
	}
};
</script>
<style lang="scss">
.clueView {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	&__image {
		height: 100%;
		width: 100%;
		background-size: contain;
		background-position: center center;
		background-repeat: no-repeat;
	}

	&__text,
	&__hint {
		background-color: fade-out($bg-accent-dark, 0.1);
		position: absolute;

		display: flex;
		width: 100%;
		height: 100%;
		z-index: 1;

		padding: 0 $gap;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	&__buttons {
		position: absolute;
		left: 0;
		bottom: 0;

		display: flex;
		z-index: 2;

		.clueView__button {
			margin: 0 math.div($gap, 4);
			padding: math.div($gap, 4) math.div($gap, 2);
			color: white;

			&.active {
				color: $primary;
			}
		}
	}
}
</style>
