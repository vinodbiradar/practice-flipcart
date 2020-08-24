import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/Actions/auth.action";
import { connect } from "react-redux";
import "./ProductList.css";

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let finalArray = [];
    let items = this.props.state.products.products;
    for (var item in items) {
      finalArray.push(items[item]);
    }

    let search = this.props.state.filterProduct.searchItems
      .trim()
      .toLowerCase();

    if (search.length > 0) {
      finalArray = finalArray.filter(function (user) {
        return user.name.toLowerCase().match(search);
      });
    }

    return (
      <div className="container">
        <div className="row product__list">
          {finalArray.map((item, index) => {
            item["id"] = index;
            item["count"] = 1;
            return (
              <div className="col-sm-12 col-md-4">
                <Link
                  key={index}
                  to={{
                    pathname: `/productdetail`,
                    state: { item },
                  }}
                >
                  <img
                    src={item.file}
                    className="img-responsive products"
                    width="200"
                    height="180"
                  />
                  <strong className="text-center product__name">
                    {item.name}
                  </strong>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  uploadFileLoading: state.auth.uploadFileLoading,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
