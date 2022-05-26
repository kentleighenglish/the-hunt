import {
	fetchAllType,
	fetchAllCompleteType,
	fetchType,
	fetchCompleteType,
	setCurrentStoryType
} from "./mutations";

export const fetchAll = async (
	{ commit, dispatch, rootState },
	{ filter = {} } = {}
) => {
	const { socket, events } = rootState.socket;
	commit(fetchAllType, {});

	await new Promise((resolve) => {
		socket().emit(events.stories.fetchAll, { filter }, (error, { stories }) => {
			if (error) {
				return null;
			} else if (stories) {
				commit(fetchAllCompleteType, { stories });

				resolve();
			}
		});
	});
};

export const fetch = async ({ commit, dispatch, rootState }, { id }) => {
	const { socket, events } = rootState.socket;
	commit(fetchType, {});

	await new Promise((resolve) => {
		socket().emit(events.stories.fetch, { id }, (error, { story }) => {
			if (error) {
				return null;
			} else if (story) {
				commit(fetchCompleteType, { id, story });

				resolve();
			}
		});
	});
};

export const setCurrentStory = async (
	{ commit, dispatch, state },
	{ id, router }
) => {
	localStorage.setItem("currentStory", id);

	if (!state.stories.find((story) => story.id === id)) {
		await dispatch("fetch", { id });
	}

	router.replace("view").catch(() => {});
	commit(setCurrentStoryType, { id });
};
