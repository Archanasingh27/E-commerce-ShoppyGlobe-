import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cart/cartSlice";
import "./Cart.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} width="120" />

      <div>
        <h3>{item.title}</h3>

        <p>${item.price}</p>

        <div>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>

          <span
            style={{
              margin: "0 15px",
            }}
          >
            {item.quantity}
          </span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          style={{
            marginTop: "10px",
            background: "red",
            color: "white",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
