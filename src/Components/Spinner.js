import React, { Component } from "react";
import Loader from "react-loader-spinner";

export class Spinner extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="red"
        height={100}
        width={100}
        // timeout={3000}
      />
    );
  }
}

export default Spinner;
