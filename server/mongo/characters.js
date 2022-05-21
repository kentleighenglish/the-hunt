import { v4 as uuidv4 } from "uuid";
import { merge } from "lodash";
import debug from "../debug";
import { run } from "./_utils";

const COLLECTION = "characters";

const groupRevisions = (items = []) => Object.values(items.reduce((acc, item) => ({
	...acc,
	[item.id]: {
		id: item.id,
		revisionNumber: item.revisionNumber,
		sheet: merge(acc[item.id]?.sheet || {}, item.sheet),
		xp: merge(acc[item.id]?.xp || {}, item.xp)
	}
}), {}));

export const create = async ({ sheet, xp }) => {
	try {
		const id = uuidv4();

		const response = await run(
			db =>
				new Promise((resolve, reject) =>
					db.collection(COLLECTION).insertOne(
						{ id, sheet, xp, revisionNumber: 1 },
						(err, result) => (err ? reject(err) : resolve(result.insertedId))
					)
				)
		);

		if (response) {
			return id;
		}

		return null;
	} catch (e) {
		debug("db:characters", true)("ERROR", e);
		return null;
	}
};

export const update = async ({ id, sheet, xp }) => {
	try {
		const { revisionNumber } = await fetch({ id });

		const response = await run(
			db =>
				new Promise((resolve, reject) =>
					db.collection(COLLECTION).insertOne(
						{ id, sheet, xp, revisionNumber: revisionNumber + 1 },
						(err, result) => (err ? reject(err) : resolve(result.insertedId))
					)
				)
		);

		if (response) {
			return await fetch({ id });
		}

		return null;
	} catch (e) {
		return null;
	}
};

export const fetch = async ({ id }) => {
	try {
		const response = await run(db =>
			db.collection(COLLECTION).find({ id }).toArray()
		);

		if (response.length) {
			const grouped = groupRevisions(response);

			return grouped[0];
		}

		return null;
	} catch (e) {
		debug("db:characters", true)("ERROR", e);
		return null;
	}
}

export const fetchAll = async () => {
	try {
		const response = await run(db => db.collection(COLLECTION).find({}).toArray());

		const groupedResponse = groupRevisions(response);

		if (groupedResponse) {
			return groupedResponse;
		}

		return [];
	} catch (e) {
		return [];
	}
};

export const rewardXp = async ({ id, amount }) => {
	try {
		const current = await fetch({ id });

		const availablePoints = current?.xp?.availablePoints || 0;

		const response = await update({ id, xp: { availablePoints: availablePoints + 1 } });

		if (response) {
			return response;
		}

		return null;
	} catch (e) {
		return null;
	}
};

export const removeXp = async ({ id, amount }) => {
	try {
		const current = await fetch({ id });

		const availablePoints = current?.xp?.availablePoints || 0;

		const response = await update({ id, xp: { availablePoints: Math.max(availablePoints - 0, 0) } });

		if (response) {
			return response;
		}

		return null;
	} catch (e) {
		return null;
	}
};
