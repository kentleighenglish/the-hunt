import {
	addSocketType,
	addEventsType,
	updateSocketStatusType
} from "./mutations";

export const addSocket = ({ commit, dispatch }, { socket }) => {
	commit(addSocketType, { socket });

	const socketIo = socket();

	return socketIo;
};

export const addEvents = ({ commit }, { events }) => {
	commit(addEventsType, { events });
};

export const updateSocketStatus = ({ commit }, { connected, error }) => {
	commit(updateSocketStatusType, { connected, error });
};
