import * as requiest from "./requester";

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => requiest.get(baseUrl);

export const create = (gameData) => requiest.post(baseUrl, gameData);

export const getOne = (gameId) => requiest.get(`${baseUrl}/${gameId}`);

export const edit = (gameId, gameData) => requiest.put(`${baseUrl}/${gameId}`, gameData);
