import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt="prduct img" />
      <h2>{props.name}</h2>
      <p className="desc" dangerouslySetInnerHTML={{ __html: props.desc }} />
      <h3 className="price">{props.price}</h3>
      <p className="cart" onClick={() => props.onAddToCart(props.id, 1)}>
        Add To Cart
        <FaCartPlus />
      </p>
    </div>
  );
}

export default Product;
