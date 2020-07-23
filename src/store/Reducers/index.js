import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import uploadReducer from "./upload.reducer";

export default combineReducers({ authReducer, productReducer, uploadReducer });
