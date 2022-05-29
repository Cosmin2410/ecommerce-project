import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div className="confirmation">
      <h1>Your Order Was Confirmed</h1>
      <p>Thank you for your order, you will get your product soon!</p>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default Confirmation;
