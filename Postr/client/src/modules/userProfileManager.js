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

export const updateUserProfile = (userObj) => {
    return getToken().then(token => {
        return fetch(`${URL}/${userObj.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: userObj.id,
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                displayName: userObj.displayName,
                displayPicture: userObj.displayPicture,
                email: userObj.email,
                bio: userObj.bio
            })
        })
            .then(res => res.json())
    })
}