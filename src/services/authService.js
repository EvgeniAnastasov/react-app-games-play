import * as requiest from "./requester";

const baseUrl = 'http://localhost:3030/users';


export const login = (email, password) =>
    requiest.post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}