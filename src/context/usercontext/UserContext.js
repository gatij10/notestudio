import React, { Component } from 'react';
import fire from '../../utils/fire'

const UserContext = React.createContext();

class UserProvider extends Component {
    // Context state
    state = {
        user: {
            username: "",
            email: "",
            password: ""
        },
    };

    // Method to update state
    setUser = (user) => {
        this.setState({ user });
    };

    handleSingup = () => {
        
        console.log('signup')
    }

    handleLogin = () => {
        console.log('login')
    }

    logout = () => {
        this.setState({});
    };

    render() {
        const { children } = this.props;
        const { user } = this.state;
        const { setUser, handleSingup, handleLogin, logout } = this;

        return (
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                    handleSingup,
                    handleLogin,
                    logout
                }}
            >
                {children}
            </UserContext.Provider>
        );
    }
}
export default UserContext;
export { UserProvider };