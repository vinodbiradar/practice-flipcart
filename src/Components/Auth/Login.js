import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/auth.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/core";
import Spinner from "../Spinner";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSignIn] = useState("");

  toast.configure();

  function loginUser() {
    props.signIn(email, password);
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    setSignIn(props.signInSuccess);
  }, [props.signInSuccess]);

  sessionStorage.setItem("signInSuccess", props.signInSuccess);
  let signInSuccess = sessionStorage.getItem("signInSuccess");

  if (props.signInSuccess === true) {
    toast("Login Succefull!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

    props.history.push("/admin");
  }

  if (signInSuccess === "true") {
    props.history.push("/admin");
  }

  return (
    <>
      <span className="text-center">
        {props.signInLoading ? <Spinner /> : ""}
      </span>
      <div className="row">
        <div
          className="col-md-6 offset-md-3"
          style={{
            border: "1px solid",
            padding: "20px",
            marginTop: "30px",
            borderRadius: "20px",
          }}
        >
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
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  signInError: state.authReducer.signInError,
  signInMessage: state.authReducer.signInMessage,
  signInLoading: state.authReducer.signInLoading,
  signInSuccess: state.authReducer.signInSuccess,
});

export default connect(mapStateToProps, { signIn })(SignIn);
