import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'

export const CartWidget = ( {item = 0} ) => {
    
    return (
        <div className="cartWidget">
            <ShoppingCartIcon sx={{ fontSize: 20 }}></ShoppingCartIcon>
            <p> {item} </p>
        </div>
    )
}