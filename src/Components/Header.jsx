import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div>
        <h1>WebStore</h1>
      </div>

      <div className="header__links">
        <Link to="/">Home</Link>
        <a href="#">Category</a>
        <a href="#">Login</a>
      </div>

      {location.pathname === '/' && (
        <div className="header__cart">
          <Link to="/cart">Cart</Link>
          <p className="header__count"> {props.cartNum.total_items} </p>
        </div>
      )}
    </header>
  );
}

export default Header;
