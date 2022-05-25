import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  return (
    <div>
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
