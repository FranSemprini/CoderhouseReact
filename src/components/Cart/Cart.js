import { useContext } from "react"
import { useCartContext } from "../../context/CartContext"
import '../Cart/Cart.scss'
import { CartContext } from "../../context/CartContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Cart = () => {

    const { cart, emptyCart, removeItem } = useCartContext()

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
                {cart.map((item) => (
                    <div className="item__container" key={item.id}>
                        <div className="dataL__container">
                            <h1>{item.name}</h1>
                            <img className="item__img" src={item.img}></img>
                        </div>
                        <div className="dataR__container">
                            <p>Precio: {item.precio}</p>
                            <p>Cantidad: {item.counter}</p>
                            <p>Total: ${item.precio * item.counter}</p>
                            <div>
                                <DeleteOutlineIcon className="remove__icon" onClick={() => {removeItem(item.id)}} />
                            </div>
                        </div>
                    </div>
                )
                )}

            </div>
            <h1 onClick={emptyCart}>Empty Cart</h1>
        </div>

    )
}