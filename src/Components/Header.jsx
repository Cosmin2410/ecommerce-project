import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './Auth0/Login';
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';

function Header(props) {
  const location = useLocation();

  return (
    <header>
      <div className="header__util">
        <div className="header__logo">
          <h1>WebStore</h1>
        </div>

        <div className="header__loginCart">
          <div className="header__login">
            <Login />
          </div>

          {location.pathname === '/' && (
            <Link to="/cart">
              <div className="header__loginContainer">
                <FaShoppingCart size="1.8rem" color="white" />
                {props.cartNum.total_items > 0 && (
                  <p className="header__count"> {props.cartNum.total_items} </p>
                )}
                <p className="header__desc">My Cart</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      <nav className="header__nav">
        <div className="header__links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/">
            <p className="link">Shop</p>
          </Link>
          <Link to="/">
            <p className="link">About Us</p>
          </Link>

          <Link to="/">
            <p className="link">Delivery</p>
          </Link>
        </div>
      </nav>

      <div className="header__subscribe">
        <p>
          Get 15% Off Your First Full-Price Purchase When You Subscribe To Our
          Emails / Subscribe Now <FaArrowRight />
        </p>
      </div>
    </header>
  );
}

export default Header;
