import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            console.log('El producto ya fue agregado')
        }else{
            setCart(prev => [...prev, {...item, quantity}])
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}