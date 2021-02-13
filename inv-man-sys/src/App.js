import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductPage from './Views/ProductPage';
import ShoppingCart from './Views/ShoppingCart';
import ProductDetail from './Views/ProductDetail';
import Shipping from './Views/Shipping';
import Billing from './Views/Billing';
import OrderConfirmation from './Views/OrderConfirmation';
import initialProducts from './initialProducts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [defaultProducts, setDefaultProducts] = useState(initialProducts);
  const [products, setProducts] = useState(initialProducts);

  function addToCart(id, newCartQuantity) {
    const update = products.map(product => {
      if (newCartQuantity > product.quantity) {
        return product;
      } else {
        return product.id === id ? { ...product, inCart: !product.inCart, cartQuantity: newCartQuantity, quantity: product.quantity - newCartQuantity } : product;
      }
    })
    setProducts([...update]);

    const defaultUpdate = defaultProducts.map(product => {
      if (newCartQuantity > product.quantity) {
        return product;
      } else {
        return product.id === id ? { ...product, inCart: !product.inCart, cartQuantity: newCartQuantity, quantity: product.quantity - newCartQuantity } : product;
      }
    })
    setDefaultProducts([...defaultUpdate]);
  }

  return (
    <div className="App">
      <Router>
        <NavBar
          defaultProducts={defaultProducts}
          setProducts={setProducts}
        />
        <Switch>
          <Route exact path="/">
            <ProductPage
              products={products}
              addToCart={addToCart}
            />
          </Route>
          <Route exact path="/shopping-cart">
            <ShoppingCart
              products={products}
              addToCart={addToCart}
            />
          </Route>
          <Route exact path="/shipping">
            <Shipping />
          </Route>
          <Route exact path="/billing">
            <Billing />
          </Route>
          <Route exact path="/order-confirmation">
            <OrderConfirmation />
          </Route>
          <Route exact path="/:productId">
            <ProductDetail
              products={products}
              addToCart={addToCart}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
