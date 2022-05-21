import http from "http";
import { Server } from "socket.io";
import { get, each } from "lodash";
import debugFunc from "debug";
import * as socketEvents from "./events";

const debug = debugFunc("app:socket");

export const eventTypes = Object.keys(socketEvents).reduce((acc, key) => {
	const methods = Object.keys(socketEvents[key]).reduce((acc2, key2) => ({
		...acc2,
		[key2]: `${key}/${key2}`
	}), {});

	return {
		...acc,
		[key]: methods
	};
}, {});

const bindEvents = (io, socket) => {
	each(eventTypes, (group) => {
		each(group, (action) => {
			const method = get(socketEvents, action.replace("/", "."), null);

			socket.on(action, (data, callback) => {
				debug(`Action triggered: ${action}`);

				return method({ socket, data, callback, io });
			});
			debug(`Bound socket.io event: ${action}`);
		});
	});

	socket.on("disconnecting", () => {
		const sheetRooms = [...socket.rooms].filter(roomName => /^sheet_/.test(roomName));
		sheetRooms.forEach((room) => {
			const roomSplit = room.split("_");
			socketEvents.rooms.leave({ socket, io, data: { id: roomSplit[1] } });
		});
	});
};

export default function (options) {
	this.nuxt.hook("render:before", () => {
		const server = http.createServer(this.nuxt.renderer.app);

		const io = new Server(server, { path: options.socketPath });
		const { host = "localhost", port = 3000 } = this.nuxt.options.server;

		this.nuxt.server.listen = () => new Promise(resolve =>
			server.listen(port, host, resolve)
		);

		this.nuxt.hook("close", () => new Promise((resolve) => {
			server.close(resolve);
		}));

		io.on("connection", (socket) => {
			debug("Socket connection");

			// const {
			// 	query: { platform = "", userAgent = "" }
			// } = socket.handshake;

			socket.join("global");

			bindEvents(io, socket);

			socket.emit("connectResponse", {
				events: eventTypes
			});
		});
	});
}
