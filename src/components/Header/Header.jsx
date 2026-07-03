import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🛍️ ShoppyGlobe</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">0</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header