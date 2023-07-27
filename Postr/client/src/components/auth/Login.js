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
            <form className="box mt-5">
                <h2 className="title is-4">Log in to Postr</h2>
                <fieldset className="field">
                    <input
                        required autoFocus
                        id="login-email"
                        type="text"
                        className="input"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="field">
                    <input
                        id="login-password"
                        type="password"
                        className="input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <button
                    onClick={(clickEvent) => loginButtonOnClick(clickEvent)}
                    className="button is-link"
                >Login</button>
                <br />
                <em>
                    Don't have an account? <Link to="/register">Sign up</Link>
                </em>

            </form>
        </div>
    )
}
