import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { cartAmount } = useContext(CartContext)
    return (
        <div className="cartWidget">
            <ShoppingCartIcon sx={{ fontSize: 20 }}></ShoppingCartIcon>
            <p className="cartWidget__amount"> { cartAmount() } </p>
        </div>
    )
}