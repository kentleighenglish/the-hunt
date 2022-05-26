import * as d from "../directus";

export const fetchAll = async ({ data, callback }) => {
	const stories = await d.fetchStories();

	if (stories) {
		callback(null, { stories });
	} else {
		callback(null, { stories: [] });
	}
};

export const fetch = async ({ data, callback }) => {
	const story = await d.fetchStory({ id: data.id });

	if (story) {
		callback(null, { story });
	} else {
		callback(null, { story: null });
	}
};
