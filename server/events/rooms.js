
const roomId = id => `sheet_${id}`;

const getRoomSockets = (io, socket = {}) => async (room) => {
	const sockets = await io.in(room).fetchSockets();

	return sockets.reduce((acc, s) => ([
		...acc,
		s.id
	]), []);
}

export const join = async ({ socket, io, data, callback }) => {
	if (data.id) {
		const room = roomId(data.id);
		socket.join(room);

		const sockets = await getRoomSockets(io, socket)(room);

		callback(null, { sockets });
		updateRoom({ socket, io, data });
	}
}

export const leave = ({ socket, io, data, callback }) => {
	if (data.id) {
		const room = roomId(data.id);
		socket.leave(room);

		updateRoom({ socket, io, data });
	}
}

export const updateRoom = async ({ socket, io, data = {} }) => {
	if (data.id) {
		const room = roomId(data.id);

		const sockets = await getRoomSockets(io)(room);
		const updateAvailable = data.updateAvailable || false;
		const xpUpdateAvailable = data.xpUpdateAvailable || false;

		socket.to(room).emit("updateTriggered", { sockets, updateAvailable, xpUpdateAvailable });
	}
}
