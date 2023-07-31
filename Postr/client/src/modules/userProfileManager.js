import { getToken } from "./authManager";

const URL = "/api/UserProfile";

export const getAllUserProfiles = () => {
    return getToken().then(token => {
        return fetch(URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
    })
};

export const getUserDetailsById = (userId) => {
    return getToken().then(token => {
        return fetch(`${URL}/details/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
    })
}