import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartIcon from './assets/cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <div className="cart-widget-container">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            {cartQuantity > 0 && <span className="item-count">{cartQuantity}</span>}
        </div>
    );
}

export default CartWidget;
