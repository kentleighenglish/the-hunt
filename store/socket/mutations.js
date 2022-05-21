import Vue from "vue";

export const addSocketType = "@socket/addSocket";
export const addEventsType = "@socket/addEvents";
export const updateSocketStatusType = "@socket/updateSocketStatus";
export const joinRoomType = "@socket/joinRoom";
export const joinRoomCompleteType = "@socket/joinRoomComplete";
export const leaveRoomType = "@socket/leaveRoom";
export const leaveRoomCompleteType = "@socket/leaveRoomComplete";
export const updateTriggeredType = "@sockets/updateTriggered";

export default {
	[addSocketType] (state, { socket }) {
		Vue.set(state, "socket", socket);
	},
	[addEventsType] (state, { events }) {
		Vue.set(state, "events", events);
	},
	[updateSocketStatusType] (state, { connected, error = null }) {
		Vue.set(state, "connected", connected);
		Vue.set(state, "error", error);
	},
	[joinRoomType] (state, { id }) {
		Vue.set(state, "currentSheetMeta", {});
	},
	[joinRoomCompleteType] (state, { connections = [] }) {
		Vue.set(state.currentSheetMeta, "connections", connections);
	},
	[leaveRoomType] (state, { id }) {
		Vue.set(state, "currentSheetMeta", {});
	},
	[leaveRoomCompleteType] (state, { connections = [] }) {
		Vue.set(state, "currentSheetMeta", {});
	},
	[updateTriggeredType] (state, { sockets = [], updateAvailable = false }) {
		Vue.set(state.roomData, "sockets", sockets);
		Vue.set(state.roomData, "updateAvailable", updateAvailable);
	}
}
