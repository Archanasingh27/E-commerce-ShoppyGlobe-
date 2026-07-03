import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "80%",
        margin: "30px auto",
      }}
    >
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <hr />

      <h2>Total : ${total.toFixed(2)}</h2>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
