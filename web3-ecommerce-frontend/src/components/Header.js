import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Web3 Shop
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <button className="wallet-btn">Connect Wallet</button>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
