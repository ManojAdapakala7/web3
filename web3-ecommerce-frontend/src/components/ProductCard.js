import React from 'react';
import './styles/ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img
        src={`assets/images/${image}`}
        alt={`${name}`}
        className="product-image"
      />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
