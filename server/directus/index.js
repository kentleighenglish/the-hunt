import { gql } from "apollo-boost";
import { fetchFromDirectus } from "./_utils";
import { parse } from "./parser";

export const fetchStories = async ({ slug }) => {
	const { hunt_stories: stories = [] } = await fetchFromDirectus(
		gql`
			query hunt_stories() {
				hunt_stories() {
					...HuntStories
				}
			}
		`,
		{}
	);

	const parsedStories = (stories || []).map((item) => ({
		item,
		collection: "hunt_stories"
	}));

	return await parse(parsedStories);
};

// export const fetchTechnologies = async () => {
// 	const { technologies = [] } = await fetchFromDirectus(
// 		gql`
// 			query technologies($technologiesFilter: technologies_filter) {
// 				technologies(filter: $technologiesFilter) {
// 					...Technology
// 				}
// 			}
// 		`,
// 		{ technologiesFilter: { parent: { id: { _null: true } } } }
// 	);
//
// 	const parsedTechnologies = (technologies || []).map((item) => ({
// 		item,
// 		collection: "technologies"
// 	}));
//
// 	return await parse(parsedTechnologies);
// };
//
// export const fetchMenu = async ({ ref }) => {
// 	const { menus = [] } = await fetchFromDirectus(
// 		gql`
// 			query menu($menusFilter: menus_filter) {
// 				menus(filter: $menusFilter) {
// 					...Menu
// 				}
// 			}
// 		`,
// 		{ menusFilter: { ref: { _eq: ref } } }
// 	);
//
// 	const menu = await parse({
// 		item: menus[0] || { items: [] },
// 		collection: "menus"
// 	});
//
// 	return menu.items || [];
// };
