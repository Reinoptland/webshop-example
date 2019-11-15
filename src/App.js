import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="Nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Checkout</Link>
            </li>
            <li>Amount of Products: {props.itemCount}</li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/cart" component={ShoppingCart} />
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    itemCount: state.cart.length
  };
};

export default connect(mapStateToProps)(App);
