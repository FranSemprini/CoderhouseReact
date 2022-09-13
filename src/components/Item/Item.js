import './Item.scss'
import placeholder from '../../assets/placeholder.png'
import { Link } from 'react-router-dom'
import sinStock from '../../assets/sinStock.png'

export const Item = ({ producto }) => {


    return (
        <Link className='item__link' to={`/item/${producto.id}`}>
            <div className='product'>
                <img src={producto.img ? producto.img : placeholder} alt={producto.descripcion} />
                <h4>{producto.nombre}</h4>
                <h5>${producto.precio}</h5>
                <p>{producto.descripcion}</p>
                {producto.stock < 1 && <img className='product__colors' src={sinStock} alt={`Sin Stock`}/>}
            </div>
        </Link>
    )
}