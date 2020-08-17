import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countItem: 0,
    };
  }

  addItems(id) {
    let cartItems = JSON.parse(sessionStorage.getItem("CartProducts"));
    for (const item in cartItems) {
      if (cartItems[item].id === id) {
        cartItems[item].count = cartItems[item].count + 1;
      }
    }
    sessionStorage.setItem("CartProducts", JSON.stringify(cartItems));
    this.setState({
      countItem: 2,
    });
  }

  removeItems(id) {
    let cartItems = JSON.parse(sessionStorage.getItem("CartProducts"));
    for (const item in cartItems) {
      if (cartItems[item].id === id) {
        cartItems[item].count = cartItems[item].count - 1;
      }
    }
    sessionStorage.setItem("CartProducts", JSON.stringify(cartItems));
    this.setState({
      countItem: 2,
    });
  }

  removeFromCart(id) {
    let cartItems = JSON.parse(sessionStorage.getItem("CartProducts"));
    for (const item in cartItems) {
      if (cartItems[item].id === id) {
        cartItems.splice(item.id, 1);
      }
    }
    sessionStorage.setItem("CartProducts", JSON.stringify(cartItems));
    this.setState({
      countItem: 2,
    });
  }

  render() {
    let cartItems = JSON.parse(sessionStorage.getItem("CartProducts"));
    return (
      <div class="card-header text-center">
        My Cart {cartItems ? cartItems.length : ""}
        <div className="container m-4">
          {cartItems
            ? cartItems.map((item, index) => {
                return (
                  <div className="row">
                    <div className="col-md-6 offset-1">
                      <div class="card text-center">
                        <div class="row card-body">
                          <div className="col-md-3">
                            <Link to="/productdetail">
                              <img
                                src={item.file}
                                alt="no image"
                                height="85px"
                                width="85px"
                              />
                            </Link>
                          </div>
                          <div className="col-md-3">
                            Name <br /> {item.name}
                          </div>
                          <div className="col-md-3">
                            Deliery by <br />
                          </div>
                          <div className="col-md-3">
                            Price <br /> {item.price * item.count}
                          </div>
                        </div>
                        <div className="add-remove-btn">
                          <div
                            style={{ textAlign: "left", display: "flex" }}
                            className="remove-btn"
                          >
                            <div
                              className="add-btn"
                              onClick={() => this.removeItems(item.id)}
                            >
                              <button
                                style={{ borderRadius: 100 }}
                                disabled={item.count <= 0 ? true : false}
                              >
                                -
                              </button>
                            </div>
                            <div className="itemTo-add-remove">
                              {item.count}
                            </div>
                            <div
                              className="remove-btn"
                              onClick={() => this.addItems(item.id)}
                            >
                              <button style={{ borderRadius: 100 }}>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="place-order-btn">
                          <button
                            className="btn ml-4 mb-2 btn-warning"
                            style={{
                              color: "white",
                              textAlign: "right",
                            }}
                            onClick={() => this.removeFromCart(item.id)}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 offset-1">
                      <div class="card">
                        <div class="card-header">PRICE DETAILS </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Price {item.price * item.count}{" "}
                          </li>
                          <li class="list-group-item">Deliery Fee</li>
                          <li class="list-group-item">
                            Total Amount {item.price * item.count}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}

          {cartItems.length ? (
            <button
              className="btn mt-2 btn-lg"
              style={{
                color: "white",
                background: "#fb641b",
                textAlign: "right",
              }}
            >
              <Link to="/buyproduct">PLACE ORDER</Link>
            </button>
          ) : (
            "Your cart is empty, Add items to it now. "
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
