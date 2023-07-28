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

export const getPostDetails = (id) => {

    return getToken().then(token => {
        return fetch(`${URL}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
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
}

export const AddPost = (post) => {
    return getToken().then((token) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post made successfully!")
                return resp.json();
            } else {
                throw new Error(
                    "An error occurred while trying to add a post.",
                );
            }
        });
    });
}