import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './Auth0/Login';
import Logout from './Auth0/Logout';
import { useAuth0 } from '@auth0/auth0-react';

function Header(props) {
  const location = useLocation();

  const { isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <div>
        <h1>WebStore</h1>
      </div>
      <div className="header__links">
        <Link to="/">Home</Link>
        <a href="#">Category</a>
      </div>

      {isAuthenticated ? <Logout /> : <Login />}

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
