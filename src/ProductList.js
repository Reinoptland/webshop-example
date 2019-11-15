import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();

    console.log(products); // these products need to be put in the redux state

    // dispatching actions
    const action = {
      type: "GET_PRODUCTS_SUCCESS",
      payload: products
    };

    // if your component is connected,
    // you have access to the dispatch() method
    this.props.dispatch(action);
  }

  addToCart = product => {
    console.log("BUY BUY BUy $$$", product);
    const action = {
      type: "ADD_TO_CART",
      payload: product
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        PRODUCT LIST
        <ul>
          {this.props.products.map(product => {
            return (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <img src={product.imageUrl} />
                <div onClick={() => this.addToCart(product)}>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

// we get the state of the store
const mapTheStateOfTheReduxStoreToThePropsOfThisComponent = state => {
  // return an object: it gets added to your props
  return {
    products: state.products
  };
};

export default connect(mapTheStateOfTheReduxStoreToThePropsOfThisComponent)(
  ProductList
);
