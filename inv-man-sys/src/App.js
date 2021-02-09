import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductPage from './Views/ProductPage';
import ShoppingCart from './Views/ShoppingCart';
import ProductDetail from './Views/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ProductPage />
          </Route>
          <Route exact path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
