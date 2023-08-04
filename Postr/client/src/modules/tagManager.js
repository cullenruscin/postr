import { getToken } from "./authManager";

const URL = "/api/Tag";

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get tags.",
                );
            }
        });
    });
};