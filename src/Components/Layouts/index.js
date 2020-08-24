import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/auth.action";
import { cartProducts } from "../../store/Actions/auth.action";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header signInSuccess={this.props.signInSuccess} />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = {
  cartProducts,
};

const mapStateToProps = (state) => {
  return {
    signInSuccess: state.auth.signInSuccess,
    cartProducts: state.auth.cartProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
