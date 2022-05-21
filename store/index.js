import { createLogger } from "vuex";

const middleware = [];

if (process.env.NODE_ENV === "development") {
	middleware.push(createLogger());
}

export const plugins = middleware;

export const strict = true;
