import React, { Component } from "react";
import "./Product.css";
import p1 from "./../../assets/p1.png";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/Actions/auth.action";
import { connect } from "react-redux";

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log("Props", this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 product"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
