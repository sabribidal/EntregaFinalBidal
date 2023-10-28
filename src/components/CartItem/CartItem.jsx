import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  if (!item) {
    return (
      <div>
        <p>El artículo no está disponible</p>
      </div>
    );
  }

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      <p>Sub total: ${item.quantity * item.price}</p>
      <button onClick={() => removeItem(item.id)}>X</button>
    </div>
  );
}
