import './Item.scss'
import placeholder from '../../assets/placeholder.png'

export const Item = ({ producto }) => {


    return (
        <div className='product'>
            <img src={producto.img ? producto.img : placeholder} alt={producto.descripcion}/>
            <h4>{producto.nombre}</h4>
            <h5>${producto.precio}</h5>
            <p>{producto.descripcion}</p>
            <p className='stock'>Stock: {producto.stock}</p>
        </div>
    )
}