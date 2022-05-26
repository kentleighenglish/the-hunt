<template>
	<div class="nav">
		<div class="nav__buttons">
			<a
				class="nav__button"
				:class="{ disabled: prevDisabled }"
				@click="prev()"
			>
				<CommonIcon>chevron_left</CommonIcon>
			</a>
			<a
				class="nav__button"
				:class="{ disabled: nextDisabled }"
				@click="next()"
			>
				<CommonIcon>chevron_right</CommonIcon>
			</a>
		</div>
		<a
			v-for="item in navItems"
			:key="item.action"
			class="nav__button"
			:class="{ active: mode === item.action }"
			@click="triggerAction(item.action)"
		>
			<CommonIcon>{{ item.icon }}</CommonIcon>
		</a>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	name: "GlobalNav",
	data() {
		return {
			navItems: [
				{ action: "camera", icon: "photo_camera" },
				{ action: "compass", icon: "explore" },
				{ action: "grid", icon: "apps" }
			]
		};
	},
	computed: {
		...mapState({
			clues({ clues: { loading, clues = [] } }) {
				return clues;
			},
			currentClue({ clues: { currentClue } }) {
				return currentClue;
			},
			prevClue({ clues: { currentClue, clues } }) {
				const currentIndex = clues.findIndex(
					(clue) => currentClue?._id === clue._id
				);

				return clues[currentIndex - 1] || null;
			},
			nextClue({ clues: { currentClue, clues } }) {
				const currentIndex = clues.findIndex(
					(clue) => currentClue?._id === clue._id
				);

				return clues[currentIndex + 1] || null;
			},
			mode({ clues: { mode } }) {
				return mode;
			}
		}),
		prevDisabled() {
			if (!this.loading && this.clues && this.clues.length) {
				if (this.prevClue && this.prevClue.unlocked) {
					return false;
				}
			}

			return true;
		},
		nextDisabled() {
			if (!this.loading && this.clues && this.clues.length) {
				if (this.nextClue && this.nextClue.unlocked) {
					return false;
				}
			}

			return true;
		}
	},
	methods: {
		next() {
			if (!this.nextDisabled) {
				this.mode = "view";
				this.$emit("nav-click", this.currentClueIndex + 1);
			}
		},
		prev() {
			if (!this.prevDisabled) {
				this.mode = "view";
				this.$emit("nav-click", this.currentClueIndex - 1);
			}
		},
		setMode(mode) {
			if (mode !== "view" || this.currentClue._id) {
				this.mode = mode;
			}
		}
	}
};
</script>
<style lang="scss">
.nav {
	background-color: $bg;
	height: 80px;
	border-top: 1px solid $bg-accent;
	z-index: 3;

	display: flex;
	flex-direction: row;

	&__buttons {
		display: flex;
		width: 100%;
	}

	&__button {
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		max-width: 70px;

		.icon {
			font-size: $font-xl;
		}

		&.active {
			color: $primary;
		}

		&.disabled {
			color: $grey;
		}
	}
}
</style>
