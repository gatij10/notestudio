import React, { useContext, useState } from 'react'
import './LoginForm.css'
import UserContext from '../../context/usercontext/UserContext'
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    const [signUp, setSignUp] = useState(false);
    const [error, setError] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const history = useHistory();
    const { handleSingup, handleLogin } = useContext(UserContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    async function onSignUp(e) {
        e.preventDefault();
        try {
            await handleSingup(user.email, user.password);
            history.push('/home');
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    async function onLogin(e) {
        e.preventDefault();
        try {
            await handleLogin(user.email, user.password);
            history.push('/home');
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    function onClickSignUp(e) {
        e.preventDefault()
        setError("");
        setSignUp(false)
    }

    function onClickLogin(e) {
        e.preventDefault()
        setError("");
        setSignUp(true)
    }

    return (
        <div>
            {
                signUp === true ? (
                    <div className="login-form">
                        <h3 className="login-form-title">SignUp Form</h3>
                        <input placeholder="Username" className="login-form-input" value={user.username} onchange={handleChange} required />
                        <input placeholder="Email Id" type="email" name="email" value={user.email} onChange={handleChange} className="login-form-input" required />
                        <input placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} className="login-form-input" required />
                        <p className="error">{error}</p>
                        <button onClick={onSignUp} className="login-form-button">SignUp</button>
                        <p className="login-form-text">or</p>
                        <p className="login-form-text">Already have an account? <button className="signup-button" onClick={onClickSignUp}>Login</button></p>
                    </div>


                ) : (
                    <div className="login-form">
                        <h3 className="login-form-title">Login Form</h3>
                        <input placeholder="Email Id" type="email" name="email" value={user.email} onChange={handleChange} className="login-form-input" required />
                        <input placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} className="login-form-input" required />
                        <p className="error">{error}</p>
                        <button onClick={onLogin} className="login-form-button">Login</button>
                        <p className="login-form-text">or</p>
                        <p className="login-form-text">Don't have an account? <button className="signup-button" onClick={onClickLogin}>SignUp</button></p>
                    </div>
                )
            }
        </div>
    )


}

export default LoginForm
