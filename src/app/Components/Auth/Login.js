import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { signIn } from "../../Actions/auth";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSignIn] = useState("");

  function loginUser() {
    props.signIn(email, password);
  }

  useEffect(() => {
    setSignIn(props.signInSuccess);
  }, [props.signInSuccess]);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <span className="text-center">
          {props.signInLoading && <div>Loading ...</div>}
        </span>
        <div className="form-group mt-4">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            loginUser();
          }}
        >
          Login
        </button>
        <span className="text-center">
          {props.signInMessage && <div>{props.signInMessage}</div>}
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  signInError: state.authReducer.signInError,
  signInMessage: state.authReducer.signInMessage,
  signInLoading: state.authReducer.signInLoading,
  signInSuccess: state.authReducer.signInSuccess,
});

// const mapDispatchToProps = (dispatch) => ({
//   signIn: (email, password) => dispatch(signIn(email, password)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignIn;
