import * as m from "../mongo";

export const fetchAll = async ({ data, callback }) => {
	const stories = await m.stories.fetchAll();

	if (stories) {
		callback(null, { stories });
	} else {
		callback(null, { stories: [] });
	}
};
