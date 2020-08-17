import {
  SIGNIN,
  SIGNINSUCCESS,
  SIGNINERROR,
  SIGNINLOADING,
  CLEARSIGNINSTATE,
  SIGNUP,
  SIGNUPLOADING,
  SIGNUPSUCCESS,
  SIGNUPERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_PROGRESS,
  UPLOAD_FAILURE,
  UPLOAD_PRODUCT_DATA,
  CART_PRODUCTS,
  REMOVE_CART_PRODUCTS,
} from "./constantType";

// Sign-in actions
const signIn = (email, password) => {
  return { type: SIGNIN, payload: { email, password } };
};

const signInSuccess = (user) => {
  return { type: SIGNINSUCCESS, payload: user };
};

const signInError = (message) => {
  return { type: SIGNINERROR, message };
};

const signInLoading = () => {
  return { type: SIGNINLOADING };
};

const clearSignInState = () => {
  return { type: CLEARSIGNINSTATE };
};

// Sign-up actions
const signUp = (name, email, password) => {
  return { type: SIGNUP, payload: { name, email, password } };
};

const signUpSuccess = () => {
  return { type: SIGNUPSUCCESS };
};

const signUpError = (message) => {
  return { type: SIGNUPERROR, message };
};

const signUpLoading = () => {
  return { type: SIGNUPLOADING };
};

// Product actions
const fetchProducts = () => {
  return { type: FETCH_PRODUCTS_REQUEST };
};

const productSuccess = (data) => {
  return { type: FETCH_PRODUCTS_SUCCESS, data };
};

const productError = (message) => {
  return { type: FETCH_PRODUCTS_FAILURE, message };
};

// Uplaod actions

const uploadFile = (file) => {
  return { type: UPLOAD_REQUEST, file };
};

const uploadFileSuccess = () => {
  return { type: UPLOAD_SUCCESS };
};

const uploadFileProgress = () => {
  return { type: UPLOAD_PROGRESS };
};

const uploadFileError = (message) => {
  return { type: UPLOAD_FAILURE, message };
};

const uploadProductData = (name, price, description) => {
  return { type: UPLOAD_PRODUCT_DATA, name, price, description };
};

const cartProducts = (item) => {
  return { type: CART_PRODUCTS, item };
};

const removeCartProducts = (item) => {
  return { type: REMOVE_CART_PRODUCTS, item };
};

export {
  signIn,
  signInSuccess,
  signInError,
  signInLoading,
  signUp,
  signUpSuccess,
  signUpError,
  clearSignInState,
  signUpLoading,
  fetchProducts,
  productSuccess,
  productError,
  uploadFile,
  uploadFileSuccess,
  uploadFileProgress,
  uploadFileError,
  uploadProductData,
  cartProducts,
  removeCartProducts,
};
