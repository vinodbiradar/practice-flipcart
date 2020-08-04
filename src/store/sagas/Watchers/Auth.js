import { put, call, takeLatest, all, take, on } from "redux-saga/effects";
import {
  SIGNIN,
  SIGNUP,
  FETCH_PRODUCTS_REQUEST,
  UPLOAD_REQUEST,
  UPLOAD_PRODUCT_DATA,
  UPLOAD_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
} from "../../Actions/constantType";

import {
  signInSuccess,
  signInError,
  signInLoading,
  signUpSuccess,
  signUpError,
  signUpLoading,
  uploadFileSuccess,
  productSuccess,
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

//Upload Sagas
function* uploadFile(action) {
  var storageRef = firebase.storage().ref();
  let databaseRef = firebase.database();

  var uploadTask = storageRef
    .child(`${action.file.name}`)
    .put(action.file.file);
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    const imageUrl = downloadURL;
    console.log("URL:" + imageUrl);
    // console.log(uploadTask.snapshot.ref.downloadURL());
    databaseRef.ref("ProductDescription/").push({
      name: action.file.name,
      price: action.file.price,
      description: action.file.description,
      file: downloadURL,
    });
  });
  yield put(uploadFileSuccess());
}

function* insertProduct(action, url) {
  console.log("insert product", action);
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
    .then(
      (uploadFileSuccess = (data) => {
        //success callback
        console.log("data ", data);
        // this.uploadFileSuccess();
      })
    )
    .catch((error) => {
      //error callback
      console.log("error ", error);
    });
  yield put(uploadFileSuccess());
}

function* fetchProducts() {
  var databaseRef = firebase.database().ref("ProductDescription/");
  const snap = databaseRef.once("value");
  // snap.then(productSuccess);
  const products = yield call(databaseRef.once("value"));
  snap.then(products);

  // yield put(uploadFileSuccess());
  // let products = databaseRef
  //   .once("value")
  //   .then(function (snap) {
  //     console.log(snap.val());
  //   })
  //   .catch((error) => {
  //     //error callback
  //     console.log("error ", error);
  //   });
  // console.log(products);
  // yield put(productSuccess(products));
  // databaseRef
  //   .on("ProductDescription/")
  //   .then(
  //     (uploadFileSuccess = (data) => {
  //       //success callback
  //       console.log("data ", data);
  //       // this.uploadFileSuccess();
  //     })
  //   )
  //   .catch((error) => {
  //     //error callback
  //     console.log("error ", error);
  //   });

  // productRef.on(
  //   "value",
  //   function (snapshot) {
  //     product = snapshot.val();
  //     console.log(snapshot.val());
  //   },
  //   function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   }
  // );

  // yield put(productSuccess(product));
  // const snapshot = yield call(database.read, "ProductDescription");
  // const snapshot = yield call(database.ref.read("ProductDescription"));
  // console.log(snapshot);
  // const ref = database.ref("ProductDescription");

  // ref.on("value", function (data) {

  //   dispatch({ type: "FETCH_PRODUCTS_SUCCESS", data });
  // });
}

// function* productSuccess(data) {
//   // yield put(productSuccess())
//   console.log("success Data", data);
// }

function errorHandle(error) {
  console.log("Error", error);
}

export default function* watchSignInSaga() {
  yield all([
    takeLatest(SIGNIN, signIn),
    takeLatest(SIGNUP, signUp),
    takeLatest(UPLOAD_REQUEST, uploadFile),
    takeLatest(UPLOAD_SUCCESS, uploadFileSuccess),
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts),
    takeLatest(FETCH_PRODUCTS_SUCCESS, productSuccess),
  ]);
}
