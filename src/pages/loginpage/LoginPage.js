import React from 'react'
import taking_notes from './assets/taking_notes.png'
import LoginForm from '../../components/loginform/LoginForm'

const LoginPage = () => {
    return (
        <div>
            <img src={taking_notes} alt="test" style={{
                width: "500px",
                position: 'absolute',
                marginRight: "10%",
                right: '0',
            }} />
            <LoginForm />
        </div>
    )
}

export default LoginPage
