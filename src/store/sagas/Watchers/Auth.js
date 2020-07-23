import { put, takeLatest, all, take } from "redux-saga/effects";
import {
  SIGNIN,
  SIGNUP,
  FETCH_PRODUCTS_REQUEST,
  UPLOAD_REQUEST,
} from "../../Actions/constantType";
import {
  signInSuccess,
  signInError,
  signInLoading,
  signUpSuccess,
  signUpError,
  signUpLoading,
} from "../../Actions/auth.action";
import firebase from "firebase";
import Firebase from "../../../firebase/Firebase";

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
  console.log(data.val());
}

function errorData(error) {
  console.log("Error", error);
}

//Upload Sagas
function* uploadFiles() {
  // console.log("upload files works");
}

export default function* watchSignInSaga() {
  yield all([
    takeLatest(SIGNIN, signIn),
    // takeLatest(SIGNUP, signUp),
    // takeLatest(FETCH_PRODUCTS_REQUEST, fetchingProducts),
    // takeLatest(UPLOAD_REQUEST, uploadFiles),
  ]);
}
