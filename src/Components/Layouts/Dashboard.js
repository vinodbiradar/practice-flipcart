import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts, signIn } from "../../store/Actions/auth.action";
import { uploadFile, uploadProductData } from "../../store/Actions/auth.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  function sendData() {
    props.uploadFile(file);
    props.uploadProductData(name, price, description);
  }

  toast.configure();

  console.log(props.signInSuccess, "signInSuccess");

  if (props.signInSuccess === true) {
    toast("Login Succefull!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="form-group mt-4">
          <label for="name">Product Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-4">
          <label for="price">Product Price</label>
          <input
            type="price"
            className="form-control"
            id="price"
            aria-describedby="emailHelp"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="desc">Product Description</label>
          <input
            type="description"
            className="form-control"
            id="desc"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="file">Select Images</label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            sendData();
          }}
        >
          Upload Data
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productError: state.productReducer.productError,
  fetchingProduct: state.productReducer.fetchingProduct,
  productFetchRequest: state.productReducer.productFetchRequest,
  productSuccess: state.productReducer.signUpSuccess,
  fileUpload: state.uploadReducer.uploadFile,
  fileUploadSuccess: state.uploadReducer.uploadFileSuccess,
  fileUploadFailure: state.uploadReducer.uploadFileError,
  signInSuccess: state.authReducer.signInSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  uploadFile: (file) => dispatch(uploadFile(file)),
  uploadProductData: (name, price, description) =>
    dispatch(uploadProductData(name, price, description)),
  signIn: (email, password) => dispatch(signIn(email, password)),
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
