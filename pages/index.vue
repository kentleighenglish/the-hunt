<template>
	<div class="indexPage">
		<CommonLoader v-if="loading" />
		<StoriesList v-else />
	</div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
	name: "IndexPage",
	computed: {
		...mapState({
			loading({ stories: { loading } }) {
				return loading.all;
			},
			error({ stories: { error } }) {
				return error;
			}
		})
	},
	mounted() {
		this.fetchAllStories();
	},
	methods: {
		...mapActions({
			fetchAllStories: "stories/fetchAll"
		})
	}
};
</script>
<style lang="scss">
.indexPage {
	display: flex;
	height: 100%;
	width: 100%;
}
</style>
