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

        authErrorMessage: ""
    };

    // Method to update state
    setUser = (user) => {
        this.setState({ user });
    };

    setErrorMessage = (msg) => {
        this.setState({ authErrorMessage: msg })
    }

    handleSingup = () => {
        const { username, email, password } = this.state.user
        this.setErrorMessage("");
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                console.log('Signup success')
            }).catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        this.setErrorMessage(err.message);
                        break;
                    case "auth/weak-password":
                        this.setErrorMessage(err.message);
                        break;
                    default:
                        console.log(err.code);
                }
            })
    }

    handleLogin = () => {
        const { email, password } = this.state.user
        this.setErrorMessage("");
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(fire.auth().currentUser.uid);
                console.log('login success')
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        this.setErrorMessage(err.message);
                        break;
                    case "auth/wrong-password":
                        this.setErrorMessage(err.message);
                        break;
                    default:
                        console.log(err.code);
                }
            })
    }

    logout = () => {
        this.setState({});
    };

    render() {
        const { children } = this.props;
        const { user, authErrorMessage } = this.state;
        const { setUser, handleSingup, handleLogin, logout } = this;

        return (
            <UserContext.Provider
                value={{
                    user,
                    authErrorMessage,
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