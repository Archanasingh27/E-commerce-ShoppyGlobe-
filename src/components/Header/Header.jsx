

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Count total items in the cart for display in the header.
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><span>S</span> ShoppyGlobe</Link>
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
};

export default Header;