import React from 'react';
import { Link } from 'react-router-dom';
import { IconName } from 'react-icons/fa';

function CartEmpty() {
  return (
    <div className="emptyCart">
      <h1>Your Cart Is Empty 😢</h1>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default CartEmpty;
