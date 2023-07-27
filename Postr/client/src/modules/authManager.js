import firebase from "firebase/app";
import "firebase/auth";

const URL = "/api/UserProfile";

export const getUserDetails = (firebaseUUID) => {
    return getToken().then(token => {
        return fetch(`${URL}/${firebaseUUID}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
    })
}

const _doesUserExist = (firebaseUserId) => {
    return getToken().then((token) =>
        fetch(`${URL}/DoesUserExist/${firebaseUserId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json()));
};

const _saveUser = (userProfile) => {
    return getToken().then((token) =>
        fetch(URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userProfile)
        }).then(resp => resp.json()));
};

export const getToken = () => firebase.auth().currentUser.getIdToken();

export const login = (email, pw) => {
    return firebase.auth().signInWithEmailAndPassword(email, pw)
        .then((signInResponse) => _doesUserExist(signInResponse.user.uid))
        .then((doesUserExist) => {
            if (!doesUserExist) {
                logout();
                throw new Error("Something's wrong. The user exists in firebase, but not in the application database. (User may be deactivated)");
            }
        }).catch(err => {
            console.error(err);
            throw err;
        });
};

export const logout = () => {
    firebase.auth().signOut()
};

export const register = (userProfile, password) => {
    return firebase.auth().createUserWithEmailAndPassword(userProfile.email, password)
        .then((createResponse) => _saveUser({
            ...userProfile,
            firebaseUserId: createResponse.user.uid
        }));
};

export const onLoginStatusChange = (onLoginStatusChangeHandler) => {
    firebase.auth().onAuthStateChanged((user) => {
        onLoginStatusChangeHandler(!!user);
    });
};