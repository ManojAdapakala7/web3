import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Toast from './Toast';
import './styles/Home.css';

const Home = ({ addToCart }) => {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  const products = [
    { id: 1, name: 'Product 1', price: '$50', image: 'placeholder1.png' },
    { id: 2, name: 'Product 2', price: '$75', image: 'placeholder2.png' },
    { id: 3, name: 'Product 3', price: '$30', image: 'placeholder3.png' },
    { id: 4, name: 'Product 4', price: '$120', image: 'placeholder4.png' },
  ];

  return (
    <div className="home">
      <Toast message={toastMessage} show={showToast} />
      <div className="carousel">
        <img src="assets/images/banner-placeholder.jpg" alt="Promotional Banner" />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
