import React from 'react';
import Product from './Product';

function Products(props) {
  // console.log(props.products[0].image.url);

  // return <div></div>;

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
          />
        );
      })}
    </div>
  );
}

export default Products;
