<template>
	<div class="nav">
		<div class="nav__buttons">
			<a class="nav__button" @click="prev()" :class="{ disabled: prevDisabled }">
				<CommonIcon>chevron_left</CommonIcon>
			</a>
			<a class="nav__button" @click="next()" :class="{ disabled: nextDisabled }">
				<CommonIcon>chevron_right</CommonIcon>
			</a>
		</div>
		<a class="nav__button" @click="setMode('view')" :class="{ active: data.mode === 'view', disabled: !data.currentClueId }">
			<CommonIcon>search</CommonIcon>
		</a>
		<a class="nav__button" @click="setMode('camera')" :class="{ active: data.mode === 'camera' }">
			<CommonIcon>photo_camera</CommonIcon>
		</a>
		<a class="nav__button" @click="setMode('grid')" :class="{ active: data.mode === 'grid' }">
			<CommonIcon>apps</CommonIcon>
		</a>
	</div>
</template>
<script>
export default {
	name: "GlobalNav",
	props: {
		data: {
			type: Object,
			default: () => ({})
		}
	},
	methods: {
		next() {
			if (!this.nextDisabled) {
				this.data.mode = 'view';
				this.$emit('nav-click', this.data.currentClueIndex+1)
			}
		},
		prev() {
			if (!this.prevDisabled) {
				this.data.mode = 'view';
				this.$emit('nav-click', this.data.currentClueIndex-1)
			}
		},
		setMode(mode) {
			if(mode !== 'view' || (this.data.currentClueId)) {
				this.data.mode = mode;
			}
		}
	},
	computed: {
		prevDisabled() {
			if (!this.data.loading &&
				this.data.clues &&
				this.data.clues.length
			) {
				if(
					this.data.currentClueIndex !== null &&
					this.data.currentClueIndex !== 0 &&
					(this.data.clues[this.data.currentClueIndex-1] && !!this.data.clues[this.data.currentClueIndex-1].unlocked)
				) {
					return false;
				}
			}

			return true;
		},
		nextDisabled() {
			if (!this.data.loading &&
				this.data.clues &&
				this.data.clues.length
			) {
				if(
					this.data.currentClueIndex !== null &&
					this.data.currentClueIndex+1 !== this.data.clues.length &&
					!!this.data.clues[this.data.currentClueIndex+1].unlocked
				) {
					return false;
				}
			}

			return true;
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

		padding: 0 $gap;

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
