import { fetchAllType, fetchAllCompleteType } from "./mutations";

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
