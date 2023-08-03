import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../modules/authManager";

const NavBar = ({ isLoggedIn, currentUser }) => {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive((prev) => !prev);
    };

    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
            <div className="nav-container container is-max-desktop">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/home" aria-label="Home">
                        <span className="icon">
                            <i className="material-icons-outlined" alt="icon">
                                markunread_mailbox
                            </i>
                        </span>
                        <span className="ml-1">Postr</span>
                    </Link>
                    <div
                        className={`navbar-burger burger ${isMobileMenuActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded={isMobileMenuActive ? "true" : "false"}
                        onClick={toggleMobileMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div className={`navbar-menu ${isMobileMenuActive ? "is-active" : ""} no-shadow`}>
                    <div className="navbar-end">
                        {isLoggedIn ? (
                            <>
                                <Link className="navbar-item" to={`/user/${currentUser}`} aria-label="Profile">
                                    <span className="icon">
                                        <i className="material-icons-outlined" alt="icon">
                                            account_circle
                                        </i>
                                    </span>
                                    <span className="ml-1">Profile</span>
                                </Link>
                                <Link className="navbar-item" to="/login" onClick={logout} aria-label="Logout">
                                    <span className="icon">
                                        <i className="material-icons-outlined" alt="icon">
                                            logout
                                        </i>
                                    </span>
                                    <span className="ml-1">Logout</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link className="navbar-item" to="/login" aria-label="Login">
                                    <span className="icon">
                                        <i className="material-icons-outlined" alt="icon">
                                            login
                                        </i>
                                    </span>
                                    <span className="ml-1">Login</span>
                                </Link>
                                <Link className="navbar-item" to="/register" aria-label="Register">
                                    <span className="icon">
                                        <i className="material-icons-outlined" alt="icon">
                                            person_add
                                        </i>
                                    </span>
                                    <span className="ml-1">Register</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
