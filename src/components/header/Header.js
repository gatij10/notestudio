import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="header">
            <h3> Logo </h3>
            <input className="search-input" placeholder="Search" />
            <h3>Hello User</h3>
        </nav>
    );
};

export default Header;
