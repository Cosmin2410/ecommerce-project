import React from 'react';
import CartEmpty from './CartEmpty';
import CartFilled from './CartFilled';
import { Link } from 'react-router-dom';

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const isEmpty = !cart.total_items;

  return (
    <div>
      {isEmpty ? (
        <CartEmpty />
      ) : (
        <CartFilled
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}

      <button onClick={handleEmptyCart}>Remove All</button>
      <Link to="/checkout">
        <button>CheckOut</button>
      </Link>
    </div>
  );
}

export default Cart;
