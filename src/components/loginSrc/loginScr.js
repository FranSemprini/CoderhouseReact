import { Button } from "@mui/material"
import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { useForm } from "../../hooks/useForm"
import './loginSrc.scss'

export const LoginScr = () => {

    const {login} = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email: ``,
        password: ``,
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        let email = values.email
        let password = values.password
        login({email, password})
    }

    return (
        <div className="login__container">
            <div className="login__form">
                <h1>Pantalla de logueo</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        type={`text`}
                        placeholder="Email"
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
                <h3>Using firebase auth, user: test@test.com pass: asdasd </h3>
            </div>
        </div>
    )
}