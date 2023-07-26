import { getToken } from "./authManager";

const URL = "/api/Post";

export const getAllPosts = () => {
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
                    "An unknown error occurred while trying to get posts.",
                );
            }
        });
    });
};
