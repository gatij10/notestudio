import React, { useContext } from "react";
import "./Header.css";
import UserContext from "../../context/usercontext/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <nav className="header">
            <h2> Logo </h2>
            <h2>Hello User</h2>
        </nav>
    );
};

export default Header;
