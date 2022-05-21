import "isomorphic-fetch";
import {
	ApolloClient,
	InMemoryCache,
	IntrospectionFragmentMatcher,
	gql
} from "apollo-boost";
import debug from "../debug";
import * as fragments from "./_fragments";

const debugErr = debug("directus");

const { DIRECTUS_HOST, DIRECTUS_USERNAME, DIRECTUS_PASSWORD } = process.env;

export const assetIdToUrl = async (id) => {
	const token = await createToken();

	return `${DIRECTUS_HOST}/assets/${id}?access_token=${token}`;
};

export const createToken = async () => {
	try {
		const response = await fetch(`${DIRECTUS_HOST}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				mode: "json",
				email: DIRECTUS_USERNAME,
				password: DIRECTUS_PASSWORD
			})
		});

		const { data = {}, errors } = await response.json();

		if (errors) {
			throw errors;
		}

		return data.access_token;
	} catch (e) {
		debugErr(e);
		return false;
	}
};

export const fetchFromDirectus = async (query, variables = {}) => {
	const token = await createToken();
	if (token) {
		try {
			const fragmentMatcher = new IntrospectionFragmentMatcher({
				introspectionQueryResultData: {
					__schema: {
						types: []
					}
				}
			});

			const client = new ApolloClient({
				uri: `${DIRECTUS_HOST}/graphql`,
				cache: new InMemoryCache({ fragmentMatcher }),
				headers: {
					authorization: `Bearer ${token}`
				}
			});

			const findChildFragments = (fragment, acc = []) => {
				const queryBody = fragment.loc.source.body;
				const filtered = Object.keys(fragments).filter((name) =>
					queryBody.includes(`...${name}`)
				);

				let output = [...filtered];
				if (filtered.length) {
					filtered.forEach((key) => {
						if (!acc.includes(key)) {
							const child = findChildFragments(fragments[key], output);
							output = output.concat(child);
						}
					});
				}

				return output;
			};
			const filteredFragments = findChildFragments(query);

			const queryFragments = filteredFragments.reduce(
				(acc, key) => gql`
					${acc}
					${fragments[key]}
				`,
				""
			);

			const response = await client.query({
				query: gql`
					${queryFragments}
					${query}
				`,
				variables
			});

			return response.data;
		} catch (e) {
			debugErr(e, JSON.stringify(e, null, 2));
			return {};
		}
	} else {
		return [];
	}
};
