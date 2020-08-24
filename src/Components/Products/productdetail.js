import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cartProducts } from "../../store/Actions/auth.action";
import { connect } from "react-redux";
import "./ProductList.css";

export class ProductDetail extends Component {
  addToCart() {
    var storageItems = sessionStorage.getItem("CartProducts");
    if (storageItems === null || storageItems === undefined) {
      let finalProducts = [];
      finalProducts.push(this.props.location.state.item);
      sessionStorage.setItem("CartProducts", JSON.stringify(finalProducts));
      cartProducts(JSON.parse(storageItems));
    } else {
      let finalProducts = JSON.parse(storageItems);
      finalProducts.push(this.props.location.state.item);
      sessionStorage.setItem("CartProducts", JSON.stringify(finalProducts));
      cartProducts(JSON.parse(storageItems));
    }
  }

  render() {
    var { item } = this.props.location.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <strong className="text-center mt-3 mb-3">{item.name}</strong>
            <img
              src={item.file}
              className="img-responsive product__details_image"
            />
            <div className="m-3 d-flex product-btn">
              <button
                type="button"
                class="btn btn-warning btn-lg mr-4"
                onClick={() => this.addToCart()}
              >
                <Link
                  to={{
                    pathname: `/cart`,
                    state: { item },
                  }}
                >
                  ADD TO CART
                </Link>
              </button>
              <button type="button" class="btn btn-warning btn-lg but-btn">
                <Link
                  to={{
                    pathname: `/buyproduct`,
                    state: { item },
                  }}
                >
                  BUY NOW
                </Link>
              </button>
            </div>
          </div>
          <div className="col-md-6 offset-1 product-desc">
            <div>
              <br />
              <strong>Product Details :</strong> {item.description}
            </div>
            <div>
              <br />
              <strong>Price :</strong> {item.price} $
            </div>
            <div>
              <br />
              <strong>Ratings :</strong>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  cartProducts: (test) => dispatch(cartProducts(test)),
});

export default connect(null, mapDispatchToProps)(ProductDetail);
