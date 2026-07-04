import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";


function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div className="item-info">
        <h3>{item.title}</h3>

        <p>${item.price} each</p>
      </div>

      <div className="qty-controls">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>

      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
