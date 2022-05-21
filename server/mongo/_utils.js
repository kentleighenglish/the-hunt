import { MongoClient } from "mongodb";
import debugFunc from "debug";
import { map } from "lodash";

const debug = debugFunc("db:utils");
const debugError = debugFunc("db:error");

const { MONGO_URI } = process.env;

const collections = {
	characters: {}
};

export const DB_NAME = "stTool";

export const run = async (query) => {
	try {
		const client = await MongoClient.connect(MONGO_URI, {
			sslValidate: false,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			tlsAllowInvalidHostnames: true
		});

		const db = client.db(DB_NAME);

		const response = await query(db);

		await client.close();

		return response;
	} catch (e) {
		debugError(e);
		return false;
	}
};

export const assertCollection = async (collection, db = DB_NAME) => {
	const collectionList = await run(db => db.collections());

	if (!map(collectionList, "namespace").includes(`${DB_NAME}.${collection}`)) {
		await run(db => db.createCollection(collection));
		debug(`Collection Created: ${collection}`);
	}
	const { secondaryIndices = [] } = collections[collection] || {};
	await Promise.all(
		secondaryIndices.map(async (index) => {
			try {
				if (typeof index === "string") {
					await run(db =>
						db.collection(collection).createIndex({ [index]: 1 })
					);
				}
			} catch (e) {
				debugError(`Failed creating index on ${collection} with field ${index}. `, e);
			}
		})
	);
};

export const assertAllCollections = async (db = DB_NAME) => {
	await Promise.all(
		Object.keys(collections).map(async key => await assertCollection(key, db))
	);
};
