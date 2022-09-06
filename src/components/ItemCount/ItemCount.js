import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material"
import './ItemCount.scss'
import { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const handleSubstract = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleAdd = () => {
        counter < stock && setCounter(counter + 1)
    }

    return (
        <div className='main__container'>
            <div className='container__buttons'>
                    <IconButton onClick={handleSubstract} disabled={counter === 1}>
                        <IndeterminateCheckBoxIcon className='product__button' />
                    </IconButton>
                    <span className='product__counter'>{counter} </span>
                    <IconButton onClick={handleAdd} disabled={stock === counter}>
                        <AddBoxIcon className='product__button' />
                    </IconButton>
            </div>
            <div className='container__add'>
                <Button className='button__add' variant="contained" sx={{ backgroundColor: `#834bff`, '&:hover': { backgroundColor: '#551fc8' } }}>Add to cart</Button>
            </div>
        </div>



    )
}
