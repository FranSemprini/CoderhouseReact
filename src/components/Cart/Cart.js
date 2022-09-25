import { useCartContext } from "../../context/CartContext"
import '../Cart/Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



export const Cart = ( {prod} ) => {

    const {removeItem} = useCartContext()

    return (
            <div className="item__container">
                        <div className="dataL__container">
                            <h1>{prod.name}</h1>
                            <img className="item__img" src={prod.img} alt={prod.desc}></img>
                        </div>
                        <div className="dataR__container">
                            <p>Precio: {prod.precio}</p>
                            <p>Cantidad: {prod.counter}</p>
                            <p>Total: ${prod.precio * prod.counter}</p>
                            <div>
                                <DeleteOutlineIcon className="remove__icon" onClick={() => {removeItem(prod.id)}} />
                            </div>
                        </div>
                    </div>
                )
}