import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginContext = createContext()
const notify = (text) => toast(text, { autoClose: 3000 });

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
                notify(error.message)

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