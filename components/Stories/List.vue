<template>
	<div class="storiesList">
		<div v-for="story in stories" :key="story._id" class="storiesList__item">
			<div class="storiesList__cover">
				<img :src="story.cover" />
			</div>
			<div class="storiesList__name">{{ story.name }}</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	name: "StoriesList",
	computed: {
		...mapState({
			stories({ stories: { stories = [] } }) {
				return stories;
			}
		})
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

	&__item {
		display: flex;
		width: 100%;
		max-width: 100%;

		background: darken($bg-accent, 5%);
		border-radius: $global-border-radius;
		padding: $gap;
		align-items: center;

		box-shadow: 4px 4px 0px 0px darken($bg-accent-dark, 2%);
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
