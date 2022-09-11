import { useCartContext } from "../../context/CartContext"
import '../Cart/Cart.scss'

export const Cart = () => {

    const { cart, emptyCart, removeItem } = useCartContext()


    return (

        <div className="cart__container">
            <h1>
                Carrito
            </h1>
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
                        </div>
                    </div>
                )
                )}

            </div>
            <h1 onClick={emptyCart}>Empty Cart</h1>
        </div>

    )
}