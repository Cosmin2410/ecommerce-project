import React from 'react';

function Header() {
  return (
    <header className="header">
      <div>
        <h1>WebStore</h1>
      </div>

      <div className="links">
        <a href="#">Home</a>
        <a href="#">Category</a>
        <a href="#">Login</a>
      </div>

      <div>
        <p>Cart</p>
      </div>
    </header>
  );
}

export default Header;
