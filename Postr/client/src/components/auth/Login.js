import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../modules/authManager";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginButtonOnClick = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => navigate("/home"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <div className="container is-max-desktop">
            <form className="no-shadow box mt-5">
                <h2 className="title is-4 has-text-weight-bold has-text-black">Log in to Postr</h2>
                <fieldset className="field">
                    <label className="label">Email</label>
                    <input
                        required autoFocus
                        id="login-email"
                        type="text"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <label className="label">Password</label>
                    <input
                        id="login-password"
                        type="password"
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <button
                    onClick={(clickEvent) => loginButtonOnClick(clickEvent)}
                    className="btn button is-black is-rounded level-item"
                >Login</button>
            </form>
        </div>
    )
}
