import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../modules/userProfileManager";

const UserUpdateForm = ({ user }) => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [displayPicture, setDisplayPicture] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        setFirstName(user?.firstName || "");
        setLastName(user?.lastName || "");
        setDisplayName(user?.displayName || "");
        setDisplayPicture(user?.displayPicture || "");
        setBio(user?.bio || "");
    }, [user]);

    const updatedUser = {
        id: user.id,
        firstName,
        lastName,
        displayName,
        displayPicture,
        email: user.email,
        bio
    };

    const submitOnClick = (e) => {
        e.preventDefault();
        updateUserProfile(updatedUser).then(() => {
            navigate(`/user/${user.id}`);
        });
    };

    return (
        <div className="container is-max-desktop">
            <form className="no-shadow box mt-5" onSubmit={submitOnClick}>
                <h2 className="title is-4 has-text-weight-bold has-text-black">Update Your Profile</h2>
                <fieldset className="field">
                    <label className="label">First Name</label>
                    <input
                        required
                        autoFocus
                        id="update-first-name"
                        type="text"
                        className="input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Last Name</label>
                    <input
                        id="update-last-name"
                        type="text"
                        className="input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Display Name</label>
                    <input
                        id="update-display-name"
                        type="text"
                        className="input"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Display Picture URL</label>
                    <input
                        id="update-display-picture"
                        type="text"
                        className="input"
                        value={displayPicture}
                        onChange={(e) => setDisplayPicture(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">About</label>
                    <input
                        id="update-bio"
                        className="input"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </fieldset>
                <button type="submit" className="btn button is-black is-rounded level-item">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UserUpdateForm;