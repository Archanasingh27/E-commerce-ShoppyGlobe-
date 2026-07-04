import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { clearCart } from "../redux/cartSlice";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <h2>Your cart is empty.</h2>
        </div>
      </>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Header />

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Checkout</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Place Order
            </button>

          </form>

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">

              <span>
                {item.title} × {item.quantity}
              </span>

              <span>
                $
                {(item.price * item.quantity).toFixed(2)}
              </span>

            </div>
          ))}

          <hr />

          <h3>Total : ${total.toFixed(2)}</h3>

        </div>

      </div>
    </>
  );
}

export default Checkout;