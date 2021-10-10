import React, { useContext } from "react";
import "./Header.css";
import UserContext from "../../context/usercontext/UserContext";
import { useHistory } from "react-router-dom"

const Header = () => {
    const { handleLogout, user } = useContext(UserContext);
    const history = useHistory();

    const onLogout = () => {
        handleLogout();
        history.push('/');
    }

    return (
        <nav className="header-container">
            <h2> notestudio </h2>
            {
                user !== null ? (
                    <button onClick={onLogout} className="button">Logout</button>
                ) : (
                    null
                )
            }

        </nav>
    );
};

export default Header;
