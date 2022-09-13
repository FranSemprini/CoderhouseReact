import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    
    const { cartAmount } = useContext(CartContext)

    return (
        <div className="cartWidget">
            <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: 20 }}></ShoppingCartIcon>
            </Link>
            <p> { cartAmount() } </p>
        </div>
    )
}