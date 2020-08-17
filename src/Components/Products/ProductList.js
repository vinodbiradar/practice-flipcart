import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  uploadFileLoading,
} from "../../store/Actions/auth.action";
import { connect } from "react-redux";

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log("printing props", this.props);
    console.log(this.props.uploadFileLoading);
    let finalArray = [];
    let items = this.props.state.productReducer.products;
    for (var item in items) {
      finalArray.push(items[item]);
    }
    return (
      <div className="container test d-flex">
        <div className="row offset-1">
          {finalArray.map((item, index) => {
            item["id"] = index;
            item["count"] = 1;
            return (
              <Link
                to={{
                  pathname: `/productdetail`,
                  state: { item },
                }}
              >
                <div className="col-md-4">
                  <div key={index}>
                    <img
                      src={item.file}
                      className="img-responsive products"
                      width="150"
                      height="150"
                    />
                    <p className="text-center">{item.name}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  uploadFileLoading: state.authReducer.uploadFileLoading,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
