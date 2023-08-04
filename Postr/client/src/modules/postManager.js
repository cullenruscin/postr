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

export const getPostsByParentId = (parentId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/parent/${parentId}`, {
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

export const getUserPosts = (userProfileId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/user/${userProfileId}`, {
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

export const getPostDetails = (postId) => {

    return getToken().then(token => {
        return fetch(`${URL}/${postId}`, {
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

export const createPost = (post) => {
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

export const deletePost = (postId) => {
    return getToken().then((token) => {
        return fetch(`${URL}/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            if (resp.ok) {
                console.log("Post soft deleted successfully!")
            } else {
                throw new Error(
                    "An error occurred while trying to soft delete a post.",
                );
            }
        });
    });
}

export const addTagsToPost = (postId, tagIds) => {
    return getToken().then((token) => {
        return fetch(`${URL}/${postId}/tags`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tagIds),
        })
            .then((resp) => {
                if (resp.ok) {
                    console.log("Tags added to the post successfully!");
                } else {
                    throw new Error(
                        "An error occurred while trying to add tags to the post.",
                    );
                }
            });
    });
};