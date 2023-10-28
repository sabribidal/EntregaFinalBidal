import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";


const Cart = () => {
    const { cart, clearCart, CartQuantity, total } = useContext(CartContext);

    const createOrder = async () => {
        const order = {
            buyer: {
                name: "Sabrina",
                phone: "123456",
                email: "sabribidal@gmail.com"
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        };

        const db = getFirestore();
        try {
            const ordersCollection = collection(db, "orders");
            const orderRef = await addDoc(ordersCollection, order);
            console.log("Orden creada con ID: ", orderRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden: ", error);
        }
    };

    if (CartQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={createOrder} className="Button">Crear orden</button>
            <button onClick={clearCart} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    );
};

export default Cart;
