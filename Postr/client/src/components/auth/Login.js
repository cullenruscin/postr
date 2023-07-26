import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../modules/authManager";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => navigate("/"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <form>
            <fieldset>
                <label className="label">Email</label>
                <input
                    required autoFocus
                    type="text"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            <button
                onClick={(clickEvent) => loginSubmit(clickEvent)}
                className="button is-light"
            >Login</button>
        </form>
    )
}
