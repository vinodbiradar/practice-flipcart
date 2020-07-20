import React, { Component } from "react";
import "./Product.css";

export class Product extends Component {
  render() {
    return (
      <div>
        <div class="scrollmenu">
          <a href="#home">Electronics</a>
          <a href="#news">Mobiles</a>
          <a href="#contact">Footwears</a>
          <a href="#about">Men</a>
          <a href="#support">Women</a>
          <a href="#blog">Kids</a>
          <a href="#tools">Home & Furniture</a>
          <a href="#base">Tv & Applinces</a>
          <a href="#custom">Sports</a>
          <a href="#more">Books</a>
          <a href="#logo">Auto Accessories</a>
          <a href="#friends">Paintings</a>
          <a href="#partners">Kitchen tools</a>
          <a href="#people">Headphones & Headsets</a>
          <a href="#work">Ethnic Wear</a>
        </div>
      </div>
    );
  }
}

export default Product;
