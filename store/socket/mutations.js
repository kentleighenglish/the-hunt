import Vue from "vue";

export const addSocketType = "@socket/addSocket";
export const addEventsType = "@socket/addEvents";
export const updateSocketStatusType = "@socket/updateSocketStatus";

export default {
	[addSocketType](state, { socket }) {
		Vue.set(state, "socket", socket);
	},
	[addEventsType](state, { events }) {
		Vue.set(state, "events", events);
	},
	[updateSocketStatusType](state, { connected, error = null }) {
		Vue.set(state, "connected", connected);
		Vue.set(state, "error", error);
	}
};
