import * as requiest from "./requester";

const baseUrl = 'http://localhost:3030';


export const login = (email, password) => 
    requiest.post(`${baseUrl}/users/login`, {email, password});
