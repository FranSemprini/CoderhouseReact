import { Item } from "../Item/Item";
import './ItemList.scss'

export const ItemList = ({ productos = [] }) => {

    return (
        <div className="items__container">
            <div>
                <h3 className="items__title">The best stuff for your pet</h3>
            </div>
            <div className="items__list">
                {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )


} 