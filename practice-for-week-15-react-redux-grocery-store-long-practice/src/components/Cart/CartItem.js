import { useState, useEffect } from 'react';
import { removeProduceFromCart, updateCountInCart } from '../../store/cart'
import { useDispatch } from 'react-redux'

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(updateCountInCart(item.id, 1))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            if (count <= 1) {
              dispatch(removeProduceFromCart(item.id));
            } else {
            dispatch(updateCountInCart(item.id, -1));
            }
          }}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeProduceFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;