import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/Actions/auth.action";
import { uploadFile } from "../../store/Actions/auth.action";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  uploadFiles = () => {
    this.props.uploadFile();
  };

  render() {
    return (
      <form>
        <div class="form-group">
          <label for="exampleFormControlFile1">Upload iamges to Firebase</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
          <button {...this.uploadFiles()}>Upload File</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  productError: state.productReducer.productError,
  fetchingProduct: state.productReducer.fetchingProduct,
  productFetchRequest: state.productReducer.productFetchRequest,
  productSuccess: state.productReducer.signUpSuccess,

  fileUpload: state.uploadReducer.uploadFile,
  fileUploadSuccess: state.uploadReducer.uploadFileSuccess,
  fileUploadFailure: state.uploadReducer.uploadFileError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  uploadFile: () => dispatch(uploadFile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
