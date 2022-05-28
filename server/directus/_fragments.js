import { gql } from "apollo-boost";

// STORIES
export const HuntStories = gql`
	fragment HuntStories on hunt_stories {
		__typename
		id
		name
		cover {
			__typename
			id
			type
		}
		init_event {
			...HuntEvents
		}
	}
`;

// HUNT EVENTS
export const HuntEvents = gql`
	fragment HuntEvents on hunt_events {
		id
		reference
	}
`;
