import debugFunc from "debug";

export default (group, error = false) =>
	(...args) =>
		debugFunc(`app:${group}${error ? ":error" : ""}`)(...args);
