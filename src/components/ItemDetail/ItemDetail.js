import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {

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
                <div className="ItemDetail__cant"><ItemCount initial={item.stock > 1 ? 1 : 0} stock={item.stock}/></div>
            </div>
        </div>
    )
}