import { Cart } from "../Cart/Cart"
import { useContext } from "react"
import { useCartContext } from "../../context/CartContext"
import { CartContext } from "../../context/CartContext";
import './CartContainer.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CartContainer = () => {


    const { cart, emptyCart } = useCartContext()
    const { cartAmount } = useContext(CartContext)
    const { cartTotal } = useContext(CartContext)

    if (cartAmount() === 0 ) {
        return (
            <div className="emptyCart">
                <h2>Tu carrito esta vacio,</h2> <Link className="emptyCart__link" to='/'> <Button className="emptyCart__button" variant="contained">Regresa a la tienda</Button></Link>
            </div>
        )
    }

    return (
        <div className="cart__container">
                <h1 className="cart__title">Elementos en el carrito</h1>
                <div className="cart__data">
                    <p>Total de items: {cartAmount()}</p>
                    <p>Importe total: ${cartTotal()}</p>
                    <DeleteOutlineIcon className="data__icon" onClick={emptyCart} />
                </div>
                <Link className="checkout__link" to="/checkout"><Button className="checkout__button" variant="contained"> Check out now! </Button></Link> 
                <div className="cart__items">
                    {cart.map((item) => <Cart prod={item} key={item.id} />)}
                </div>
            </div>
    )
}