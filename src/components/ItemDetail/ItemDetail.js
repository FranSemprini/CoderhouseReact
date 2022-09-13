import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { useCartContext } from "../../context/CartContext"



export const ItemDetail = ({ item }) => {

    const {addItem } = useCartContext()
    const [counter, setCounter] = useState(item.stock > 1 ? 1 : `Sin Stock`)

    const handleAddCart = () => {
        const itemToCart = {
            id: item.id,
            name: item.nombre,
            precio: item.precio,
            img: item.img,
            counter,
        }
        addItem(itemToCart)
    }

    return (
        <div className="itemDetail__container">
            <div className="ItemDetail__left">
                <h1 className="ItemDetail__title">{item.nombre}</h1>
                <img className="ItemDetail__img" src={item.img} alt={item.descripcion}></img>
            </div>
            <div className="ItemDetail__right">
                <div className="ItemDetail__top">
                    <h2 className="ItemDetail__price">Price: ${item.precio}</h2>
                    <h4 className="ItemDetail__stock">Stock: {item.stock}</h4>
                    <p className="ItemDetail__desc">{item.descripcion2}</p>
                </div>
                <div className="ItemDetail__cant"><ItemCount stock={item.stock} counter={counter} onAdd={setCounter} handleAddCart={handleAddCart} price={item.precio} id={item.id}/></div>
            </div>
        </div>
    )
}
