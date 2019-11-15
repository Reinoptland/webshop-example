import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>THIS IS HOME</div>;
  }
}

export default connect()(Home);
