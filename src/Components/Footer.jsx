import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer__newsletter">
        <div className="footer__newsText">
          <p>STAY UP TO DATE</p>
          <h2>
            Subscribe For The Latest Styles & Sales, Plus Get 15% Off Your First
            Order.
          </h2>
        </div>
        <div className="footer__newsBtn">
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__social">
          <h2>social media.</h2>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>

        <div className="footer__products footer__nav">
          <h2>products.</h2>
          <p>Prices Drop</p>
          <p>New Products</p>
          <p>Best Sales</p>
          <p>Contact Us</p>
          <p>Sitemap</p>
        </div>

        <div className="footer__company footer__nav">
          <h2>our company.</h2>
          <p>Legal Notice</p>
          <p>About Us</p>
          <p>Secure Payment</p>
          <p>Delivery</p>
          <p>Sitemap</p>
        </div>

        <div className="footer__customer footer__nav">
          <h2>customer service.</h2>
          <p>Delivery</p>
          <p>Legal Notice</p>
          <p>About Us</p>
          <p>Secure Payment</p>
          <p>Stores</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
