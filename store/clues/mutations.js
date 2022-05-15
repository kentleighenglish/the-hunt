import Vue from "vue";

export const setClueType = "@setClue";
export const setModeType = "@setMode";

export default {
	[setClueType](state, { _id }) {
		const clue = state.clues.find((clue) => clue._id === _id);

		if (clue) {
			Vue.set(state, "currentClue", clue);
		}
	}
};
