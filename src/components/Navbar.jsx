import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Navbar.css';

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          🌿 Paradise Nursery
        </Link>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/plants" className="nav-link">Plants</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
