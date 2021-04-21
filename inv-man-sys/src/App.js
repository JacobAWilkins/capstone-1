import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import HomePage from './Views/HomePage';
import ProductPage from './Views/ProductPage';
import ShoppingCart from './Views/ShoppingCart';
import ProductDetail from './Views/ProductDetail';
import Shipping from './Views/Shipping';
import Billing from './Views/Billing';

import AddProduct from './Views/AddProduct';
import UpdateProduct from './Views/UpdateProduct';
import OrderConfirmation from './Views/OrderConfirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [cartTotal, setCartTotal] = useState();
  const [salesTax, setSalesTax] = useState();

  const PRODUCT_URL = 'http://localhost:8080/product/';

  useEffect(() => {
    updateProducts();
  }, []);

  const updateProducts = () => {
    fetch(PRODUCT_URL)
      .then(raw => raw.json())
      .then((res) => {
        setProducts(res);
        setDefaultProducts(res);
      });
  }

  const handleDelete = () => {
    updateProducts();
  }

  const handleAdd = (name) => {
    updateProducts();
    console.log('Added ' + name + ' to products');
  }

  const handleUpdate = (name) => {
    updateProducts();
    console.log('Updated ' + name);
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
    setSalesTax(cartTotal * 0.0625)
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
            <HomePage
              defaultProducts={defaultProducts}
              setProducts={setProducts}
            />
          </Route>
          <Route exact path="/products">
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
              salesTax={salesTax}
              cartTotal={cartTotal}
            />
          </Route>
          <Route exact path="/add-product">
            <AddProduct
              onAdd={handleAdd}
            />
          </Route>
          <Route exact path="/update-product/:productId">
            <UpdateProduct
              products={products}
              onUpdate={handleUpdate}
            />
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
