import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="search-div">
                <input className="search-input" placeholder="Search" />
            </div>
            <h3 className="header-right">Hello user</h3>
        </div>
    )
}

export default Header
