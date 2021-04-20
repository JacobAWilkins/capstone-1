import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductPage from './Views/ProductPage';
import ShoppingCart from './Views/ShoppingCart';
import ProductDetail from './Views/ProductDetail';
import Shipping from './Views/Shipping';
import Billing from './Views/Billing';
import AddProduct from './Views/AddProduct';
import OrderConfirmation from './Views/OrderConfirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [cartTotal, setCartTotal] = useState();



  const PRODUCT_URL = 'http://localhost:8080/product/';

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(raw => raw.json())
      .then(res => setProducts(res));
  }, [])

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(raw => raw.json())
      .then(res => setDefaultProducts(res));
  }, [])

  const handleDelete = () => {

    fetch(PRODUCT_URL)
      .then(raw => raw.json())
      .then(res => setProducts(res));

    fetch(PRODUCT_URL)
      .then(raw => raw.json())
      .then(res => setDefaultProducts(res));

  }


  // Controls whether a product is in the cart or not. Controlled by the in cart button
  function addToCart(id, newCartQuantity) {
    const update = products.map(product => {
      if (newCartQuantity > product.quantity) {
        return product;
      } else {
        return product.id === id ? { ...product, inCart: !product.inCart, cartQuantity: newCartQuantity } : product;
      }
    })
    setProducts([...update]);

    const defaultUpdate = defaultProducts.map(product => {
      if (newCartQuantity > product.quantity) {
        return product;
      } else {
        return product.id === id ? { ...product, inCart: !product.inCart, cartQuantity: newCartQuantity } : product;
      }
    })
    setDefaultProducts([...defaultUpdate]);
  }

  // Keeps track of the current order to display on the order confirmation page
  function updateOrder(order, cartTotal) {
    setOrder(order);
    setCartTotal(cartTotal);
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
              updateOrder={updateOrder}
            />
          </Route>
          <Route exact path="/shipping">
            <Shipping />
          </Route>
          <Route exact path="/billing">
            <Billing />
          </Route>
          <Route exact path="/order-confirmation">
            <OrderConfirmation
              order={order}
              cartTotal={cartTotal}
            />
          </Route>
          <Route exact path="/add-product">
            <AddProduct />
          </Route>
          <Route exact path="/:productId">
            <ProductDetail
              products={products}
              onDelete={handleDelete}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
