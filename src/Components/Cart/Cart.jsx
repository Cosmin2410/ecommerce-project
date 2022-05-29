import React from 'react';
import CartEmpty from './CartEmpty';
import CartFilled from './CartFilled';

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
          handleEmptyCart={handleEmptyCart}
        />
      )}
    </div>
  );
}

export default Cart;
