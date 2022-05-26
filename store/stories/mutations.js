import Vue from "vue";

export const fetchAllType = "@stories/fetchAll";
export const fetchAllCompleteType = "@stories/fetchAllComplete";
export const fetchType = "@stories/fetch";
export const fetchCompleteType = "@stories/fetchComplete";
export const setCurrentStoryType = "@stories/setCurrentStory";

export default {
	[fetchAllType](state) {
		Vue.set(state.loading, "all", true);
	},
	[fetchAllCompleteType](state, { stories = [] }) {
		Vue.set(state.loading, "all", false);
		Vue.set(state, "stories", stories);
	},
	[fetchType](state) {
		Vue.set(state.loading, "all", true);
	},
	[fetchCompleteType](state, { id, story = {} }) {
		const newStories = state.stories || [];
		const matchingIndex = state.stories.findIndex((s) => s.id === id);

		newStories.splice(
			matchingIndex === -1 ? 0 : matchingIndex,
			matchingIndex === -1 ? 0 : 1,
			story
		);

		Vue.set(state.loading, "all", false);
		Vue.set(state, "stories", newStories);
	},
	[setCurrentStoryType](state, { id }) {
		Vue.set(state, "currentStory", id);
	}
};
