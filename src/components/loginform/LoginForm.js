import React, { useContext, useState } from 'react'
import './LoginForm.css'
import UserContext from '../../context/usercontext/UserContext'

const LoginForm = () => {
    const [localUserData, setLocalUserData] = useState({
        email: "",
        password: ""
    })
    const { setUser } = useContext(UserContext);

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target.value)
        setLocalUserData({
            ...localUserData,
            [name]: value
        })
    }

    function onClickLogin(e) {
        e.preventDefault();
        setUser(localUserData)
        console.log(localUserData)
    }

    return (
        <div className="login-form">
            <h3 className="login-form-title">Login Form</h3>
            <input placeholder="Email Id" type="email" name="email" value={localUserData.email} onChange={handleChange} className="login-form-input" />
            <input placeholder="Password" type="password" name="password" value={localUserData.password} onChange={handleChange} className="login-form-input" />
            <p></p>
            <button onClick={onClickLogin} className="login-form-button">Login</button>
            <p className="login-form-text">or</p>
            <p className="login-form-text">Don't have an account? Sign Up</p>
        </div>

    )
}

export default LoginForm
