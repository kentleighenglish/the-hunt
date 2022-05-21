import debugFunc from "../../utils/debug";
import * as collections from "./_collections";

const debug = debugFunc("app:parser");

const transform = async (input) => {
	let singleton = false;

	if (!Array.isArray(input)) {
		input = [input];
		singleton = true;
	}

	const output = await input.reduce(
		async (pr, { item = {}, collection = null }) => {
			const arr = await pr;
			if (!arr.push) {
				debug("Issue with reducing array", arr)(true);
				return arr;
			}

			if (collections[collection]) {
				const transformedItem = await collections[collection].transform(
					item,
					transform
				);
				return [...arr, { ...transformedItem, collection }];
			} else {
				debug(`No collection parser/transformed found for ${collection}`)(true);
			}

			return arr;
		},
		Promise.resolve([])
	);

	return singleton ? output[0] : output;
};

export const parse = async (content) => {
	if (!content) {
		return {};
	}

	return await transform(content);
};
