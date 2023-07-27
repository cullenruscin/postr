import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../modules/authManager";

export const Header = ({ isLoggedIn, role }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <b>Postr</b>
                    </Link>
                    <div className="navbar-burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        {isLoggedIn &&
                            <>
                                <Link className="navbar-item" to="/">Home</Link>
                                <Link className="navbar-item" to="/">Profile</Link>
                                <Link className="navbar-item" to="/" onClick={logout}>Logout</Link>
                            </>
                        }
                        {!isLoggedIn &&
                            <>
                                <Link className="navbar-item" to="/login">Login</Link>
                                <Link className="navbar-item" to="/register">Register</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
