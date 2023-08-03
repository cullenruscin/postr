import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/authManager";

const Register = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [displayName, setDisplayName] = useState();
    const [displayPicture, setDisplayPicture] = useState();
    const [bio, setBio] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerButtonOnClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = {
                firstName,
                lastName,
                displayName,
                displayPicture,
                bio,
                email,
            };
            register(userProfile, password).then(() => navigate("/"));
        }
    };

    return (
        <div className="container is-max-desktop">
            <form className="no-shadow box mt-5">
                <h2 className="title is-4 has-text-weight-bold has-text-black">Register a Postr account</h2>
                <fieldset className="field">
                    <label className="label">First Name</label>
                    <input
                        required autoFocus
                        id="register-first-name"
                        type="text"
                        className="input"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Last Name</label>
                    <input
                        id="register-last-name"
                        type="text"
                        className="input"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Display Name</label>
                    <input
                        id="register-display-name"
                        type="text"
                        className="input"
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Display Picture URL</label>
                    <input
                        id="register-display-picture"
                        type="text"
                        className="input"
                        onChange={(e) => setDisplayPicture(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">About</label>
                    <input
                        id="register-bio"
                        type="text"
                        className="input"
                        onChange={(e) => setBio(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Email</label>
                    <input
                        id="register-email"
                        type="email"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Password</label>
                    <input
                        id="register-password"
                        type="password"
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Confirm Password</label>
                    <input
                        id="register-confirm-password"
                        type="password"
                        className="input"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </fieldset>
                <button
                    onClick={(clickEvent) => registerButtonOnClick(clickEvent)}
                    className="btn button is-black is-rounded level-item"
                >Create Account</button>
            </form>
        </div>
    );
};

export default Register;