import React from 'react';
import './styles/Profile.css';

const Profile = () => {
  // Placeholder user and order data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    wallet: '0x1234...abcd',
  };

  const orderHistory = [
    { id: 1, product: 'Product 1', date: '2024-12-15', total: '$50' },
    { id: 2, product: 'Product 2', date: '2024-12-16', total: '$75' },
  ];

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Wallet:</strong> {user.wallet}</p>
      </div>
      <h2>Order History</h2>
      <ul className="order-history">
        {orderHistory.map((order) => (
          <li key={order.id}>
            {order.date} - {order.product} - {order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
