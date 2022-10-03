import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser({
            user: user.email,
            logged: true
        })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
        });
    }

    const [user, setUser] = useState(
        {
            user: '',
            logged: false
        }
    )

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}