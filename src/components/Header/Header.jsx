import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useSelector } from "react-redux";
import SearchBar from '../SearchBar';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🛍️ ShoppyGlobe</Link>
      </div>

      <div className="header-search">
        <SearchBar />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header