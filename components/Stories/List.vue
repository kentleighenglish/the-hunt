<template>
	<div class="storiesList">
		<div
			v-for="story in stories"
			:key="story._id"
			class="storiesList__item"
			@click="onLoadStory(story)"
		>
			<div class="storiesList__cover">
				<img :src="story.cover" />
			</div>
			<div class="storiesList__name">{{ story.name }}</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
	name: "StoriesList",
	computed: {
		...mapState({
			stories({ stories: { stories = [] } }) {
				return stories;
			}
		})
	},
	methods: {
		...mapActions({
			setCurrentStory: "stories/setCurrentStory"
		}),
		async onLoadStory(story) {
			await this.setCurrentStory({ id: story.id, router: this.$router });
		}
	}
};
</script>
<style lang="scss">
.storiesList {
	display: flex;
	width: 100%;
	padding: 0 $gap;
	margin: $gap 0;
	flex-direction: column;
	overflow: auto;

	&__item {
		display: flex;
		width: 100%;
		max-width: 100%;
		margin-bottom: math.div($gap, 2);

		background: darken($bg-accent, 5%);
		border-radius: $global-border-radius;
		padding: $gap;
		align-items: center;
		cursor: pointer;

		box-shadow: 4px 4px 0px 0px darken($bg-accent-dark, 2%);

		&:hover,
		&:focus {
			background: $bg-accent;
		}
	}

	&__cover {
		width: 80px;
		aspect-ratio: 1/1;
		border-radius: $global-border-radius;
		overflow: hidden;

		img {
			width: 100%;
		}
	}

	&__name {
		margin-left: $gap;
	}
}
</style>
