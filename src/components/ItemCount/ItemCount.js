import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material"
import './ItemCount.scss'
import { useCartContext } from '../../context/CartContext';
import { useEffect } from 'react';

export const ItemCount = ({stock, counter , onAdd, handleAddCart, price, id}) => {

    const {isInCart} = useCartContext()

    const handleSubstract = () => {
        counter > 1 && onAdd(counter - 1)
    }

    const handleAdd = () => {
        counter < stock && onAdd(counter + 1)
    }

    useEffect()

    return (
        <div className='main__container'>
            <div className='container__buttons'>
                    <IconButton onClick={handleSubstract} disabled={counter === 1 || counter === `Sin Stock`}>
                        <IndeterminateCheckBoxIcon className='product__button' />
                    </IconButton>
                    <span className='product__counter'>{counter} </span>
                    <IconButton onClick={handleAdd} disabled={stock === counter || counter === `Sin Stock`}>
                        <AddBoxIcon className='product__button' />
                    </IconButton>
            </div>
            <div className='container__add'>
                <Button onClick={handleAddCart} className='button__add' variant="contained" sx={{ backgroundColor: `#834bff`, '&:hover': { backgroundColor: '#551fc8' } }} disabled={counter === `Sin Stock` || isInCart(id)}>Add to cart {!isNaN(counter) && counter * price}</Button>
            </div>
        </div>



    )
}
