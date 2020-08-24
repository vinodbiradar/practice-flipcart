import { combineReducers } from "redux";
import auth from "./auth.reducer";
import products from "./product.reducer";
import addData from "./upload.reducer";
import filterProduct from "./search.reducer";

export default combineReducers({
  auth,
  products,
  addData,
  filterProduct,
});
