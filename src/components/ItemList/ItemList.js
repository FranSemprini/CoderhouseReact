import { Item } from "../Item/Item";
import './ItemList.scss'

export const ItemList = ({ productos = [] }) => {

    return (
        <div className="items__container">
            <div className="items__title">
                <h3>Nuestros productos de Gatitos!</h3>
            </div>
            <div className="items__list">
                {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )


} 