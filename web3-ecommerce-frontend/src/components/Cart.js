import React from 'react';
import './styles/Cart.css';

const Cart = () => {
  // Placeholder cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$50', quantity: 2, image: 'placeholder1.png' },
    { id: 2, name: 'Product 2', price: '$75', quantity: 1, image: 'placeholder2.png' },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={`assets/images/${item.image}`} alt={item.name} className="cart-image" />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button className="remove-btn">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
