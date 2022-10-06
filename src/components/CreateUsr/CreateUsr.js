import { Button } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


export const CreateUsr = () => {

    const notify = (text) => toast(text, { autoClose: 3000 });
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const yourFunction = async () => {
        await delay(4000);
        window.location.replace("/");
    }

    const signIn = (user) => {
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                notify(`El usuario con el email "${user.email}" fue creado con exito! Redirigiendo.`);
                yourFunction()
            })
            .catch((error) => {
                notify(error.message)
            })
    }

    const { values, handleInputChange } = useForm({
        email: ``,
        password: ``,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let email = values.email
        let password = values.password
        signIn({ email, password })
    }

    return (
        <div className="login__container">
            <div className="login__form">
                <h1>Pantalla de creacion de usuario</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        type={`email`}
                        placeholder="email"
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                        type={`password`}
                        placeholder="Password"
                    />
                    <Button className="" type="submit">Ingresar</Button>
                </form>
            <Link to="/login"><h3>Already have an account? Log in here!</h3></Link>
            </div>
            <ToastContainer />
        </div>
    )
}