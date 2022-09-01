import { Item } from "../Item/Item";
import './ItemList.scss'

export const ItemList = ({ productos = [] }) => {

    return (
        <div className="items__container">
            <div>
                <h3 className="items__title">Los mejores productos para tu mascota!!!</h3>
            </div>
            <div className="items__list">
                {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )


} 