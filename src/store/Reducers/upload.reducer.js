import {
  UPLOAD_REQUEST,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
  UPLOAD_PRODUCT_DATA,
} from "../Actions/constantType";

const initialState = {
  loading: false,
  files: [],
  error: null,
  productData: [],
};

//defining the reducers function
const uploadReducer = (state = initialState, action) => {
  console.log("uploadReducer action", action);
  switch (action.type) {
    case UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        files: action.payload,
      };
    case UPLOAD_PRODUCT_DATA:
      return {
        ...state,
        loading: false,
        productData: action.payload,
      };

    case UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        files: [],
      };

    default:
      return state;
  }
};

export default uploadReducer;
