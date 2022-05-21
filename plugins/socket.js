import socktIo from "socket.io-client";

const plugin = ({ app }, inject) => {
	const { socketPath } = app.$config;

	const { platform, userAgent } = window.navigator;

	const socket = socktIo(window.location.host, {
		autoConnect: false,
		path: socketPath,
		query: {
			platform,
			userAgent
		}
	});

	inject("socket", () => socket);
};

export default plugin;
