const URL = "/api/User";

export const getAllUsers = () => {
    return fetch(URL)
        .then((res) => res.json())
};