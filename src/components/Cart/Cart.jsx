import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">
          <HiOutlineShoppingBag />
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any items to your shopping bag yet. Explore our
          curated collections to get started!
        </p>

        <Link to="/">
          <button className="start-shopping-btn">← Start Shopping</button>
        </Link>
      </div>
    );
  }


  return (
    <div className="cart-page">
      <div className="cart-left">
        <h1>Shopping Cart</h1>

        <p className="cart-count">
          You have {cartItems.length} item(s) in your cart.
        </p>

        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-right">
        <div className="summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">Proceed To Checkout →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );

//   if (cartItems.length === 0) {
//     return (
//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "60px",
//         }}
//       >
//         <h2>Your Cart is Empty</h2>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         width: "80%",
//         margin: "30px auto",
//       }}
//     >
//       {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))}

//       <hr />

//       <h2>Total : ${total.toFixed(2)}</h2>

//       <Link to="/checkout">
//         <button>Proceed to Checkout</button>
//       </Link>
//     </div>
//   );
// }

// export default Cart;
