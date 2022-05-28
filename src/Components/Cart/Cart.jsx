import React from 'react';
import CartEmpty from './CartEmpty';
import CartFilled from './CartFilled';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In To Continue </button>
      ) : (
        <Link to="/checkout">
          <button>Check Out</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
