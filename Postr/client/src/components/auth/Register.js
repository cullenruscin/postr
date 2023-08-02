import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/authManager";

const Register = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [displayName, setDisplayName] = useState();
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
                email,
            };
            register(userProfile, password).then(() => navigate("/"));
        }
    };

    return (
        <div className="container is-max-desktop">
            <form className="no-shadow box mt-5">
                <h2 className="title is-4">Register a Postr account</h2>
                <fieldset className="field">
                    <input
                        required autoFocus
                        id="register-first-name"
                        type="text"
                        className="input"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="register-last-name"
                        type="text"
                        className="input"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="register-display-name"
                        type="text"
                        className="input"
                        placeholder="Display Name"
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="register-email"
                        type="email"
                        className="input"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="register-password"
                        type="password"
                        className="input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="register-confirm-password"
                        type="password"
                        className="input"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </fieldset>
                <button
                    onClick={(clickEvent) => registerButtonOnClick(clickEvent)}
                    className="button is-link"
                >Create Account</button>
            </form>
        </div>
    );
};

export default Register;