import React, { useContext, useState } from 'react'
import UserContext from '../../context/usercontext/UserContext'

const LoginForm = () => {
    const [localUserData, setLocalUserData] = useState({
        email: "",
        password: ""
    })
    const { setUser } = useContext(UserContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setLocalUserData({
            ...localUserData,
            [name]: value
        })
    }

    function onClickLogin(e) {
        e.preventDefault();
        setUser(localUserData)
    }

    return (
        <div>
            <form>
                <input placeholder="Email Id" type="email" name="email" value={localUserData.email} onChange={handleChange} />
                <input placeholder="Password" type="password" name="password" value={localUserData.password} onChange={handleChange} />
                <button onClick={onClickLogin}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
