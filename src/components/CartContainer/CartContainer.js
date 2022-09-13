import { Cart } from "../Cart/Cart"
import { useContext } from "react"
import { useCartContext } from "../../context/CartContext"
import { CartContext } from "../../context/CartContext";
import './CartContainer.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const CartContainer = () => {


    const { cart, emptyCart } = useCartContext()
    const { cartAmount } = useContext(CartContext)
    const { cartTotal } = useContext(CartContext)



    return (
        <div className="cart__container">
                <h1 className="cart__title">Elementos en el carrito</h1>
                <div className="cart__data">
                    <p>Total de items: {cartAmount()}</p>
                    <p>Importe total: ${cartTotal()}</p>
                    <DeleteOutlineIcon className="data__icon" onClick={emptyCart} />
                </div>

                <div className="cart__items">
                    {cart.map((item) => <Cart prod={item} key={item.id} />)}
                </div>
            </div>
    )
}