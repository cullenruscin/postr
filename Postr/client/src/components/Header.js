import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar is-light">
            <div className="container">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">POSTR</Link>
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/posts/new">ADD POST</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
