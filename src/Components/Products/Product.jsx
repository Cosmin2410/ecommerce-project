import React from 'react';

function Product(props) {
  return (
    <div className="product">
      <img src={props.img} />
      <h2>{props.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.desc }} />
      <p> {props.price} </p>
      <button onClick={() => props.onAddToCart(props.id, 1)}>Cart</button>
    </div>
  );
}

export default Product;

// npm install @chec/commerce.js
// npm install @stripe/react-stripe-js @stripe/stripe-js react-router-dom
// react-hook-form
