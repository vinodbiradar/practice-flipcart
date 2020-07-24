import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/auth.action";

const Layout = (props) => {
  console.log("sign in loading...", props.signInSuccess);
  return (
    <div>
      <Header signInSuccess={props.signInSuccess} />
      {props.children}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  signInSuccess: state.authReducer.signInSuccess,
});

export default connect(mapStateToProps, { signIn })(Layout);
