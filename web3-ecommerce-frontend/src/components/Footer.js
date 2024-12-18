import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Learn more about our mission and values.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: support@web3shop.com</p>
      </div>
      <div className="footer-section">
        <h4>Terms and Conditions</h4>
        <p>Read our policies and guidelines.</p>
      </div>
      <div className="footer-social">
        <span>Follow us: </span>
        <a href="#">Twitter</a> | <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
