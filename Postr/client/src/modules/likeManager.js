import { getToken } from "./authManager";

const URL = "/api/Like";

export const GetLikesByPostId = (postId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/post/${postId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post liked successfully!")
                return resp.json();
            } else {
                throw new Error(
                    "An error occurred while trying to get likes by a post id.",
                );
            }
        });
    });
}

export const GetLikeCountByPostId = (postId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/count/${postId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post likes counted successfully!")
                return resp.json();
            } else {
                throw new Error(
                    "An error occurred while trying to count the likes of a post.",
                );
            }
        });
    });
}

export const createLike = (like) => {
    return getToken().then((token) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(like)
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post liked successfully!")
                return resp.json();
            } else {
                throw new Error(
                    "An error occurred while trying to like a post.",
                );
            }
        });
    });
}

export const deleteLike = (postId, userProfileId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/${postId}/${userProfileId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post unliked successfully!")
                return resp.json();
            } else {
                throw new Error(
                    "An error occurred while trying to unlike a post.",
                );
            }
        });
    });
}