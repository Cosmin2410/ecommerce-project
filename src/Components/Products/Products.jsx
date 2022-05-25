import React from 'react';
import Product from './Product';

function Products(props) {
  return (
    <div className="products">
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            desc={product.description}
            price={product.price.formatted_with_symbol}
            img={product.image.url}
            onAddToCart={props.onAddToCart}
            id={product.id}
          />
        );
      })}
    </div>
  );
}

export default Products;
