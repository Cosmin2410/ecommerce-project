import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CustomerService = () => {
  return (
    <div className="customer__container">
      <div className="customer__row">
        <img src="images/c1.png" />
        <h2>Lets's chat</h2>
        <p>Have Questions? Our Alysum Experts Are Here To Help.</p>
        <FaArrowRight />
      </div>

      <div className="customer__row">
        <img src="images/c2.png" />
        <h2>Need Help Setting Up?</h2>
        <p>Expert Advice And Inspiration, Whenever You Need It.</p>
        <FaArrowRight />
      </div>

      <div className="customer__row">
        <img src="images/c3.png" />
        <h2>Free Credit Available</h2>
        <p>Spread The Cost Over Up To 18 Months, With Interest Free Credit</p>
        <FaArrowRight />
      </div>

      <div className="customer__row">
        <img src="images/c4.png" />
        <h2>Our Recycling Initiatives</h2>
        <p>Have Questions? Our Alysum Experts Are Here To Help.</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default CustomerService;
