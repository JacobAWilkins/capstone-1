import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductPage from './Views/ProductPage';
import ShoppingCart from './Views/ShoppingCart';
import ProductDetail from './Views/ProductDetail';
import initialProducts from './initialProducts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const defaultProducts = initialProducts;
  const [products, setProducts] = useState(initialProducts);

  function addToCart(id) {
    const update = products.map(product => {
      return product.id === id ? {...product, inCart: !product.inCart} : product;
    })
    console.log(update);
    setProducts([...update]);
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
          <Route exact path="/:productId">
            <ProductDetail
              products={products}
            />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
