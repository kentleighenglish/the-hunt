import * as d from "../directus";

export const fetchAll = async ({ data, callback }) => {
	const stories = await d.fetchStories();

	if (stories) {
		callback(null, { stories });
	} else {
		callback(null, { stories: [] });
	}
};
