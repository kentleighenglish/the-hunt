export default () => ({
	socket: null,
	connected: false,
	error: null,
	events: {},
	roomData: {
		sockets: [],
		updateAvailable: false
	}
});
