import React, { Component } from "react";
import "./Product.css";
import p1 from "./../../assets/p1.png";
import p2 from "./../../assets/p2.png";
import p3 from "./../../assets/p3.png";
import p4 from "./../../assets/p4.png";
import p5 from "./../../assets/p5.png";
import { Link } from "react-router-dom";

export class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 product">
            <Link to="headPhone">
              <img className="product-list" src={p1} />
            </Link>
          </div>
          <div className="col-md-2 product">
            <img className="product-list" src={p2} />
          </div>
          <div className="col-md-2 product">
            <img className="product-list" src={p3} />
          </div>
          <div className="col-md-2 product">
            <img className="product-list" src={p4} />
          </div>
          <div className="col-md-2 product">
            <img className="product-list" src={p5} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
