import React, { Component } from 'react';

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

    logout = () => {
        this.setState({});
    };


    render() {
        const { children } = this.props;
        const { user } = this.state;
        const { setUser, logout } = this;

        return (
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                    logout,
                }}
            >
                {children}
            </UserContext.Provider>
        );
    }
}
export default UserContext;
export { UserProvider };