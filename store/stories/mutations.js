import Vue from "vue";

export const loadAllType = "@stories/loadAll";
export const loadAllCompleteType = "@stories/loadAllComplete";

export default {
	[loadAllType](state) {
		Vue.set(state.loading, "all", true);
	},
	[loadAllCompleteType](state, { stories = [] }) {
		Vue.set(state, "stories", stories);
	}
};
