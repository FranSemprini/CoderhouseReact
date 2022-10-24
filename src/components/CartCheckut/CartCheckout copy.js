import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { Link } from "react-router-dom"
import './CartCheckout.scss'
import { useLoginContext } from "../context/LoginContext"
import { useForm } from "../hooks/useForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartCheckout = () => {

    const [isDisabled, handleDisabled] = useState(false);

    const { user } = useLoginContext()

    const { cart, cartTotal, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        name: '',
        email: user.user,
        phone: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleDisabled(true)
        const missingItems = []
        const comprados = []
        if (values.name.length < 5 || values.phone.length < 5 || values.email.length < 5) {
            toast.error(`Por favor completa los campos de forma correcta`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        const ordenesRef = collection(db, 'ordenes')
        order.items.forEach(element => {
            const docRef = doc(db, 'productos', element.id)
            const toCheck = () => {
                const response = getDoc(docRef)
                    .then((doc) => {
                        return doc.data()
                    })
                return response
            }

            toCheck()
                .then((response) => {
                    if (response.stock < element.counter) {
                        missingItems.push(response)
                        toast.error(`El producto ${response.nombre} no pudo ser comprado por falta de stock`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return
                    } else {
                        updateDoc(docRef, { stock: response.stock - element.counter })
                        toast.success(`El producto ${response.nombre} se ha comprado con exito, redireccionando.`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        comprados.push(response.nombre)
                        setTimeout(function () {
                            addDoc(ordenesRef, order)
                                .then((doc) => {
                                    setOrderId(doc.id)
                                    emptyCart([])
                                })
                        }, 5000);
                    }
                })
        })
    }

    const order = {
        client: values,
        items: cart,
        total: cartTotal()
    }

    if (orderId) {
        return (
            <div className="checkFinished">
                <h2>Tu compra ha sido realizada con exito!</h2>
                <h3>Tu numero de orden es: {orderId}</h3>
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
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    style={{ width: "50%" }}
                    type="text"
                    label="Name"
                    variant="outlined"
                    className="imput__form"
                />
                <TextField
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    style={{ width: "50%" }}
                    type="text"
                    label="Email"
                    variant="outlined"
                    className="imput__form"
                />
                <TextField
                    name="phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    style={{ width: "50%" }}
                    type="text"
                    label="Phone"
                    variant="outlined"
                    className="imput__form"
                />
                <br />
                <Button className="checkOut__button" type="submit" variant="contained" color="primary" disabled={isDisabled}>
                    save
                </Button>
            </form>
        </div>
    )
}