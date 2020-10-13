import React, { useState, useContext, useEffect } from 'react'

const Context = React.createContext()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(JSON.parse((localStorage.getItem("user"))))

    useEffect(() => {

    }, [user])

    const logIn = (user) => {
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logOut = () => {
        setUser()
        localStorage.removeItem("user")
    }

    return (<Context.Provider
        value={{
            user,
            logIn,
            logOut
        }}>
        {children}
    </Context.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(Context)

    if (!context) {
        throw new Error("Cannot use useAuthContext")
    }
    return context
}

export default AuthContext
