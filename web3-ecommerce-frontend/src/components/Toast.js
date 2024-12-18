import React from 'react';
import './styles/Toast.css';

const Toast = ({ message, show }) => {
  return (
    show && (
      <div className="toast">
        <p>{message}</p>
      </div>
    )
  );
};

export default Toast;
