import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/Actions/auth.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner";
import "./Index.css";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  toast.configure();
  function registerUser() {
    props.signUp(name, email, password);
  }

  if (props.signUpSuccess) {
    toast("Register Succefull!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    props.history.push("./");
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 register-flex">
        <span className="text-center">
          {props.signUpLoading ? <Spinner /> : ""}
        </span>
        <div className="form-group mt-4">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            registerUser();
          }}
        >
          Register
        </button>
      </div>
      <span className="text-center">
        {props.signUpMessage && <div>{props.signUpMessage}</div>}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  signUpError: state.auth.signUpError,
  signUpMessage: state.auth.signUpMessage,
  signUpLoading: state.auth.signUpLoading,
  signUpSuccess: state.auth.signUpSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (name, email, password) => dispatch(signUp(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
