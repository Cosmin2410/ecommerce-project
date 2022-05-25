import React from 'react';

function CartFull({ cart, handleUpdateCartQty, handleRemoveFromCart }) {
  return (
    <>
      <div className="item">
        <h1>Your Shopping Cart</h1>
        {cart.line_items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>

            <img src={item.image.url} />

            <p> {item.line_total.formatted_with_symbol} </p>

            <div className="add-remove">
              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
              >
                +
              </button>
              <p>{item.quantity}</p>

              <button
                onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                REMOVE
              </button>
            </div>

            <br />
            <br />
            <br />
          </div>
        ))}

        <p>{cart.subtotal.formatted_with_symbol}</p>
      </div>
    </>
  );
}

export default CartFull;
