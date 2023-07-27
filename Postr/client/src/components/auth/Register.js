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

    const registerClick = (e) => {
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
        <form>
            <fieldset>
                <label className="label">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    className="input"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    className="input"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Display Name</label>
                <input
                    id="displayName"
                    type="text"
                    className="input"
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Email</label>
                <input
                    id="email"
                    type="email"
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Password</label>
                <input
                    id="password"
                    type="password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    className="input"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </fieldset>
            <button
                onClick={(clickEvent) => registerClick(clickEvent)}
                className="button"
            >Register</button>
        </form>
    );
};

export default Register;