// import debug from "../debug";
import { run } from "./_utils";

const COLLECTION = "stories";

export const fetchAll = async () => {
	try {
		const response = await run((db) =>
			db.collection(COLLECTION).find({}).toArray()
		);

		if (response) {
			return response;
		}

		return [];
	} catch (e) {
		return [];
	}
};
