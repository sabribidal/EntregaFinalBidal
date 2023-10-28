import React from 'react';
import Cart from './assets/cart.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext);

    console.log(totalQuantity())

    return (
        <Link to='/cart' className={`cart-widget`}>
            <img src={Cart} alt="cart-widget" />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget;