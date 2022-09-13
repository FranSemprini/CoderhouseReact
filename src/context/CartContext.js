import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

const initCart = JSON.parse(localStorage.getItem(`cart`)) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart)

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (item) => {
        setCart(cart.filter((product) => product.id !== item))
    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.some((product) => product.id === item)
    }

    const cartAmount = () => {
        return cart.reduce((acc, item) => acc + item.counter, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.counter * item.precio, 0)
    }



    useEffect(() => {
        localStorage.setItem(`cart`, JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            cartAmount,
            removeItem,
            emptyCart,
            isInCart,
            cartTotal,
        }}>
           {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}