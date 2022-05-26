import Vue from "vue";

export const fetchAllType = "@stories/fetchAll";
export const fetchAllCompleteType = "@stories/fetchAllComplete";

export default {
	[fetchAllType](state) {
		Vue.set(state.loading, "all", true);
	},
	[fetchAllCompleteType](state, { stories = [] }) {
		Vue.set(state.loading, "all", false);
		Vue.set(state, "stories", stories);
	}
};
