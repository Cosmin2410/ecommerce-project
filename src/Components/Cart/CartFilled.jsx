import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function CartFull({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="item">
        <h1>
          Your Shopping Cart <FaShoppingCart />
        </h1>
        <div>
          {cart.line_items.map((item) => (
            <div key={item.id} className="cart__items">
              <img src={item.image.url} />

              <div className="cart__img">
                <h3>{item.name}</h3>
                <p> {item.line_total.formatted_with_symbol} </p>
              </div>

              <p className="quantity">{item.quantity}</p>

              <div className="add-remove">
                <button
                  className="add"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>

                <button
                  className="remove"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
              </div>
              <button
                className="removeAll"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                REMOVE
              </button>
            </div>
          ))}
        </div>

        <div className="price__btns">
          <p className="total">Total: {cart.subtotal.formatted_with_symbol}</p>

          <div className="remove__checkout">
            <button onClick={handleEmptyCart} className="removeAll__btn btn">
              Remove All Items
            </button>

            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="login__btn btn"
              >
                Log In To Continue
              </button>
            ) : (
              <Link to="/checkout">
                <button className="checkout__btn btn">Check Out</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartFull;
