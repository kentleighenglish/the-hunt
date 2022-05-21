import {
	addSocketType,
	addEventsType,
	updateSocketStatusType,
	joinRoomType,
	leaveRoomType,
	updateTriggeredType
} from "./mutations";
import {
	globalPushMessage
} from "@/store/toast/actions";

export const addSocket = ({ commit, dispatch }, { socket }) => {
	commit(addSocketType, { socket });

	const socketIo = socket();

	return socketIo;
};

export const addEvents = ({ commit }, { events }) => {
	commit(addEventsType, { events });
}

export const updateSocketStatus = ({ commit }, { connected, error }) => {
	commit(updateSocketStatusType, { connected, error });
}

export const triggerUpdate = ({ commit }, { sockets = [], updateAvailable = false, xpUpdateAvailable = false }) => {
	commit(updateTriggeredType, { sockets, updateAvailable, xpUpdateAvailable });
}

export const joinRoom = async ({ dispatch, commit, rootState }, { id }) => {
	const { socket, events } = rootState.socket;
	commit(joinRoomType, {});

	await new Promise((resolve) => {
		socket().emit(events.rooms.join, { id }, (error, { sockets }) => {
			if (error) {
				globalPushMessage(dispatch)({
					type: "error",
					body: error
				});
			}
			commit(updateTriggeredType, { sockets });

			resolve();
		});
	});
}

export const leaveRoom = async ({ commit, rootState }, { id }) => {
	const { socket, events } = rootState.socket;
	commit(leaveRoomType, {});

	await new Promise((resolve) => {
		socket().emit(events.rooms.leave, { id });
	});
}
