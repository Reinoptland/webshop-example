import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <h2>
          Total: ${" "}
          {/*  
            Reduce:
          
            accumulator: runningTotal
            currentValue: currentProduct
            initialAccumulator: 0

            this.props.cart.reduce((runningTotal, currentProduct) =>
              runningTotal + currentProduct.price, 
            0)
          */}
          {this.props.cart.reduce(
            (runningTotal, currentProduct) =>
              runningTotal + parseInt(currentProduct.price),
            0
          )}
        </h2>
        {this.props.cart.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.imageUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCart);
