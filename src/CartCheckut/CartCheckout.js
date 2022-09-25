import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import { Link } from "react-router-dom"
import './CartCheckout.scss'

export const CartCheckout = () => {

    const { cart, cartTotal, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // if (values.name.length < 5) {
        // sarasa
        // return
        // }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart([])
            })
    }

    const order = {
        client: values,
        items: cart,
        total: cartTotal()
    }

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    if (orderId) {
        return (
            <div>
                <h2>{orderId}</h2>
                <Link className="emptyCart__link" to='/'><Button className="emptyCart__button" variant="contained">Regresa a la tienda</Button></Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="checkOut__conatainer">
            <h1>
                Your cart is ready for the check out!
            </h1>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={values.name}
                    onChange={handleImputChange}
                    style={{ width: "50%"}}
                    type="text"
                    label="Name"
                    variant="outlined"
                    className="imput__form"
                />
                <TextField
                    name="email"
                    value={values.email}
                    onChange={handleImputChange}
                    style={{ width: "50%"}}
                    type="text"
                    label="Email"
                    variant="outlined"
                    className="imput__form"
                />
                <TextField
                    name="phone"
                    value={values.phone}
                    onChange={handleImputChange}
                    style={{ width: "50%"}}
                    type="text"
                    label="Phone"
                    variant="outlined"
                    className="imput__form"
                />
                <br />
                <Button className="checkOut__button" type="submit" variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>
    )
}