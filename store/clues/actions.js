import {
	setClueType
} from "./mutations";

export const setClue = ({ commit }, { _id }) => {
	commit(setClueType, { _id });
}
