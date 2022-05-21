import { assetIdToUrl } from "../_utils";

export const transform = async (item, t) => {
	const { id, name, cover, init_event: initEvent } = item;

	const coverUrl = cover?.id ? await assetIdToUrl(cover.id) : null;
	const parsedInitEvent = initEvent?.id
		? await t({ collection: "events", item: initEvent })
		: null;

	return {
		id,
		name,
		cover: coverUrl,
		initEvent: parsedInitEvent
	};
};
