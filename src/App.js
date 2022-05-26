import { useState, useEffect } from 'react';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Checkout from './Components/CheckoutForm/Checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Fetch products from commerce.js

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  // Fetch cart from commerce.js

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // Add items to cart

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  // Add on Cart

  const handleUpdateCartQty = async (productId, quantity) => {
    const updateItem = await commerce.cart.update(productId, { quantity });

    setCart(updateItem.cart);
  };

  // Remove from cart

  const handleRemoveFromCart = async (productId) => {
    const removeItem = await commerce.cart.remove(productId);

    setCart(removeItem.cart);
  };

  // Remove all items from cart

  const handleEmptyCart = async () => {
    const emptyCar = await commerce.cart.empty();

    setCart(emptyCar);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Header cartNum={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
