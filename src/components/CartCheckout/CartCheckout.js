import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import './CartCheckout.scss'
import { useLoginContext } from "../../context/LoginContext"
import { useForm } from "../../hooks/useForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartCheckout = () => {

    const { user } = useLoginContext()

    const { cart, cartTotal, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [itemsToShow, setItemsToShow] = useState(cart)

    const { values, handleInputChange } = useForm({
        name: '',
        email: user.user,
        phone: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const ordenesRef = collection(db, 'ordenes')
        const missingItems = []
        const purchasedItems = []

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

        const cosas = order.items.map(async (ele) => {
            const docRef = doc(db, 'productos', ele.id)
            const item = await getDoc(docRef)
            return { ...item.data(), id: ele.id }
        })

        let responses = await Promise.all(cosas)
        responses.forEach(element => {
            order.items.map((ele) => {
                if (ele.id === element.id) {
                    element.stock >= ele.counter ? purchasedItems.push({ ...element, toBuy: ele.counter }) : missingItems.push(element)
                }
            })
        });

        if (missingItems.length > 0) {
            setItemsToShow(missingItems)
            setOrderId(`failed`)
            emptyCart([])
        } else {
            purchasedItems.map((e) => {
                const docRef = doc(db, 'productos', e.id)
                updateDoc(docRef, { stock: e.stock - e.toBuy })
            })
            addDoc(ordenesRef, order)
                .then((doc) => {
                    const orderId = doc.id
                    setOrderId(orderId)
                    emptyCart([])
                    setItemsToShow(purchasedItems)
                })
        }
    }

    const order = {
        client: values,
        items: cart,
        total: cartTotal()
    }

    if (orderId !== "failed" && orderId !== null) {
        const toShow = itemsToShow.map((e) => { return e.nombre })
        const amountToShow = (Object.keys(toShow).length)
        return (
            <div className="checkFinished">
                <ToastContainer />
                <h2>Tu compra ha sido realizada con exito!</h2>
                <h3>Tu numero de orden es: {orderId}</h3>
                <h3>{amountToShow > 1 ? `Haz comprado con exito los items: ${toShow}` : `Haz comprado con exito el item ${toShow}`}.</h3>
                <Link className="emptyCart__link" to='/'><Button className="emptyCart__button" variant="contained">Regresa a la tienda</Button></Link>
            </div>
        )
    }

    if (orderId === "failed") {
        const toShow = itemsToShow.map((e) => { return e.nombre })
        const amountToShow = (Object.keys(toShow).length)

        return (
            <div className="checkFinished">
                <h3>{amountToShow > 1 ? `La compra no ha podido realizarse por faltantes de los siguientes items: ${toShow}` : `La compra no ha podido realizarse debido al faltante del siguiente item: ${toShow}`}.</h3>
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
                <Button className="checkOut__button" type="submit" variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>
    )
}