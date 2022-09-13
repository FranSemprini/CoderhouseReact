import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material"
import './ItemCount.scss'
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, counter, onAdd, handleAddCart, price, id }) => {

    const { isInCart } = useCartContext()

    const handleSubstract = () => {
        counter > 1 && onAdd(counter - 1)
    }

    const handleAdd = () => {
        counter < stock && onAdd(counter + 1)
    }
    // ($ {counter * price}

    return (
        <div className='main__container'>
            <div className='container__buttons'>
                <IconButton onClick={handleSubstract} disabled={counter === 1 || counter === `Sin Stock` || isInCart(id)}>
                    <IndeterminateCheckBoxIcon className='product__button' />
                </IconButton>
                <span className='product__counter'>{counter} </span>
                <IconButton onClick={handleAdd} disabled={stock === counter || counter === `Sin Stock` || isInCart(id)}>
                    <AddBoxIcon className='product__button' />
                </IconButton>
            </div>
            <div className='container__add'>
                <div className="button__add">
                    {!isInCart(id) ? <Button onClick={handleAddCart} className='button__add' variant="contained" sx={{ backgroundColor: `#834bff`, '&:hover': { backgroundColor: '#551fc8' } }} disabled={counter === `Sin Stock` || isInCart(id)}> Add to cart {isNaN(counter) ? "" : `($ ${counter * price})`} </Button> : <Link to="/cart/" className="button__add--cart"><Button className='button__add' variant="contained" sx={{ backgroundColor: `orange`, '&:hover': { backgroundColor: '#D2691E' } }}> Go to cart </Button></Link>}
                </div>
            </div>
        </div>



    )
}
