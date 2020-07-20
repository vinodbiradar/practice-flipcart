import React, { Component } from "react";
import "./Product.css";
import p1 from "./../../Assets/p1.png";
import p2 from "./../../Assets/p2.png";
import p3 from "./../../Assets/p3.png";
import p4 from "./../../Assets/p4.png";
import p5 from "./../../Assets/p5.png";

export class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 product scrollmenu">
            <img className="product-list" src={p1} />
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
