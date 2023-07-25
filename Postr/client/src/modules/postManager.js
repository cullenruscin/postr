const URL = "/api/Post";

export const getAllPosts = () => {
    return fetch(URL)
        .then((res) => res.json())
};