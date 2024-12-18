import React from 'react';
import './styles/ProductDetail.css';

const ProductDetail = () => {
  // Placeholder product details
  const product = {
    id: 1,
    name: 'Product 1',
    price: '$50',
    description: 'This is a great product with amazing features.',
    image: 'placeholder1.png',
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img
          src={`assets/images/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        <div className="actions">
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
      <div className="product-reviews">
        <h2>Reviews</h2>
        <p>No reviews yet. Be the first to review this product!</p>
      </div>
    </div>
  );
};

export default ProductDetail;
