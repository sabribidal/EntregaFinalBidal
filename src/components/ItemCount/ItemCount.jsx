import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const { cart } = useContext(CartContext); 

    useEffect(() => {
        const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
        setQuantity(totalItemsInCart);
    }, [cart]);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}> - </button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}> + </button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
