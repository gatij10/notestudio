import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginForm.css'
import UserContext from '../../context/usercontext/UserContext'

const LoginForm = () => {
    const [localUserData, setLocalUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [signUp, setSignUp] = useState(false)

    const { setUser } = useContext(UserContext);
    const history = useHistory();

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target.value)
        setLocalUserData({
            ...localUserData,
            [name]: value
        })
    }

    function onLogin(e) {
        e.preventDefault();
        history.push(`/home`);
        setUser(localUserData);
    }

    function onSignUp(e) {
        e.preventDefault();
        history.push(`/home`);
        setUser(localUserData);
        console.log(localUserData);
    }

    function onClickSignUp(e) {
        e.preventDefault()
        setSignUp(false)
        console.log('signup')
    }

    function onClickLogin(e) {
        e.preventDefault()
        setSignUp(true)
        console.log('login')
    }

    return (
        <div>
            {
                signUp === true ? (
                    <div className="login-form">
                        <h3 className="login-form-title">SignUp Form</h3>
                        <input placeholder="Username" className="login-form-input" />
                        <input placeholder="Email Id" type="email" name="email" value={localUserData.email} onChange={handleChange} className="login-form-input" required />
                        <input placeholder="Password" type="password" name="password" value={localUserData.password} onChange={handleChange} className="login-form-input" required />
                        <p></p>
                        <button onClick={onSignUp} className="login-form-button">SignUp</button>
                        <p className="login-form-text">or</p>
                        <p className="login-form-text">Already have an account? <button className="signup-button" onClick={onClickSignUp}>Login</button></p>
                    </div>


                ) : (
                    <div className="login-form">
                        <h3 className="login-form-title">Login Form</h3>
                        <input placeholder="Email Id" type="email" name="email" value={localUserData.email} onChange={handleChange} className="login-form-input" required />
                        <input placeholder="Password" type="password" name="password" value={localUserData.password} onChange={handleChange} className="login-form-input" required />
                        <p></p>
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
