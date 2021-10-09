import React, { useState, useEffect } from 'react';
import fire from '../../utils/fire'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((auth_user) => {
            if (auth_user) {
                setUser(auth_user);
            }
            else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);


    const handleSingup = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { user } = await fire
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                setUser(user);
                resolve(user);
            } catch (e) {
                reject(e);
            }
        });
    }

    const handleLogin = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { user } = await fire
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                setUser(user);
                resolve(user);
            } catch (e) {
                reject(e);
            }
        });
    }

    const handleLogout = () => {
        fire.auth().signOut();
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                handleSingup,
                handleLogin,
                handleLogout
            }}
        >{children}</UserContext.Provider>
    )

}

export default UserContext;
export { UserProvider };