import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../modules/authManager";

export const NavBar = ({ isLoggedIn, currentUser }) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/home">
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
                                <Link className="navbar-item" to="/home">Home</Link>
                                <Link className="navbar-item" to={`/user/${currentUser}`}>Profile</Link>
                                <Link className="navbar-item" to="/login" onClick={logout}>Logout</Link>
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

export default NavBar;
