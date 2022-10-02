import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: `test@test.com`,
        password: `asd`
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(
        {
            user: '',
            logged: false
        }
    )

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email && user.password === values.password)

        match && setUser({
            user: match.email,
            logged: true
        })
    }

    const logout = () => {
        console.log(`asd`)
        setUser({
            user: '',
            logged: false
        })
    }
 
    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}