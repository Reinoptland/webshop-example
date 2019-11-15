import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return <div>THIS IS HOME</div>;
  }
}

class ProductList extends Component {
  render() {
    return <div>PRODUCT LIST</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
      </header>
    </div>
  );
}

export default App;
