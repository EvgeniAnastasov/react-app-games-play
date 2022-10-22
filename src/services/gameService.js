import * as requiest from "./requester";

const baseUrl = 'http://localhost:3030';

export const getAll = () => requiest.get(`${baseUrl}/data/games`);
