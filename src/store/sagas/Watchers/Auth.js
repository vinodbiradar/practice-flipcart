import { put, takeLatest, all, take, on } from "redux-saga/effects";
import {
  SIGNIN,
  SIGNUP,
  FETCH_PRODUCTS_REQUEST,
  UPLOAD_REQUEST,
  UPLOAD_PRODUCT_DATA,
  UPLOAD_SUCCESS,
} from "../../Actions/constantType";
import {
  signInSuccess,
  signInError,
  signInLoading,
  signUpSuccess,
  signUpError,
  signUpLoading,
  uploadFileSuccess,
} from "../../Actions/auth.action";
import firebase from "firebase";
import Firebase from "../../../firebase/Firebase";
import { act } from "react-dom/test-utils";

//Sign-in Sagas
function* signIn(actions) {
  try {
    // Show fetching data message
    yield put(signUpLoading());

    // When I click sign in buttonn send request to firebase
    const firebase = new Firebase();
    const user = yield firebase.doSignInWithEmailAndPassword(
      actions.payload.email,
      actions.payload.password
    );

    // Show success message
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInError(error.message));
  }
}

//Sign-up Sagas
function* signUp(actions) {
  try {
    const firebase = new Firebase();
    yield put(signUpLoading());
    const user = yield firebase.doCreateUserWithEmailAndPassword(
      actions.payload.email,
      actions.payload.password
    );
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpError(error.message));
  }
}

//Product Sagas
function* fetchingProducts() {
  const database = firebase.database();
  const ref = database.ref("products");
  ref.on("value", gotData, errorData);
}

function gotData(data) {
  // console.log(data.val());
}

function errorData(error) {
  console.log("Error", error);
}

var imageUrl = [];
//Upload Sagas
function* uploadFile(action) {
  console.log("Action in Sagas", action, action.file);
  var storageRef = firebase.storage().ref();
  var metadata = {
    contentType: "image/jpeg",
  };
  var uploadTask = storageRef
    .child(`${action.file.name}`)
    .put(action.file.file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // progrss function ....
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // this.setState({ progress });
    },
    (error) => {
      // error function ....
      console.log(error);
    },
    () => {
      // complete function ....
      storageRef
        .child(action.file.name)
        .getDownloadURL()
        .then((url) => {
          console.log("image url am getting", url);

          //function* uploadProductData(action, url) {
          console.log("Product data am getting", action);
          let databaseRef = firebase.database();
          databaseRef
            .ref("ProductDescription/")
            // .child("action")
            .push({
              name: action.file.name,
              price: action.file.price,
              description: action.file.description,
              file: url,
            })
            .then((data) => {
              //success callback
              console.log("data ", data);
              // this.uploadFileSuccess();
            })
            .catch((error) => {
              //error callback
              console.log("error ", error);
            });
          // }
        });
    }
  );
}

export default function* watchSignInSaga() {
  yield all([
    takeLatest(SIGNIN, signIn),
    takeLatest(SIGNUP, signUp),
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchingProducts),
    takeLatest(UPLOAD_REQUEST, uploadFile),
    takeLatest(UPLOAD_SUCCESS, uploadFileSuccess),
  ]);
}
