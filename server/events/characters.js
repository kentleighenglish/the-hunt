import * as m from "../mongo";
import { updateRoom } from "./rooms";

export const create = async ({ socket, callback, data: { sheet, xp } = { sheet: {}, xp: {} } }) => {
	try {
		const response = await m.characters.create({ sheet, xp });

		if (response) {
			callback(null, { id: response });
		} else {
			callback(new Error("Could not create character sheet").message, {});
		}
	} catch (e) {
		callback(e);
	}
}

export const update = async ({ data: { id, sheet, xp }, socket, io, callback }) => {
	try {
		const response = await m.characters.update({ id, sheet, xp });

		if (response) {
			callback(null, { id: response });

			updateRoom({ socket, io, data: { id, updateAvailable: true } });
		} else {
			callback(new Error("Could not update character sheet").message, {});
		}
	} catch (e) {
		callback(e);
	}
}

export const fetch = async ({ data, callback }) => {
	const character = await m.characters.fetch({ id: data.id });

	if (character) {
		callback(null, { character });
	} else {
		callback(new Error("Could not find character").message, { character: null });
	}
}

export const fetchAll = async ({ data, callback }) => {
	const characters = await m.characters.fetchAll();

	if (characters) {
		callback(null, { characters });
	} else {
		callback(null, { characters: [] });
	}
}

export const rewardXp = async ({ socket, io, data = {}, callback }) => {
	const { id, amount } = data;

	if (id && amount) {
		await m.characters.rewardXp({ id, amount });

		updateRoom({ socket, io, data: { id, xpUpdateAvailable: true } });

		await fetch({ data: { id }, callback });
	}
}

export const removeXp = async ({ socket, io, data = {}, callback }) => {
	const { id, amount } = data;

	if (id && amount) {
		await m.characters.removeXp({ id, amount });

		updateRoom({ socket, io, data: { id, xpUpdateAvailable: true } });

		await fetch({ data: { id }, callback });
	}
}
