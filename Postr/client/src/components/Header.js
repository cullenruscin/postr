import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../modules/authManager";

export const Header = ({ isLoggedIn, role }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    Postr
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    {isLoggedIn &&
                        <>
                            <Link className="navbar-item" to="/">Home</Link>
                            <Link className="navbar-item" to="/">Profile</Link>
                            <Link className="navbar-item" to="/posts/new">New Post</Link>
                            <Link className="navbar-item" to="/" onClick={logout}>Logout</Link>
                        </>
                    }
                    {!isLoggedIn &&
                        <Link className="navbar-item" to="/login">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;
