import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Profile from './components/Profile';
import './styles/App.css';

const App = () => {
  // Global state for the cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Header cartCount={cartItems.length} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
