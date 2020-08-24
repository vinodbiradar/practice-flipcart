import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CART_PRODUCTS,
} from "../Actions/constantType";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

//defining the reducers function
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
      };

    case CART_PRODUCTS:
      return {
        ...state,
        item: [],
      };

    default:
      return state;
  }
};

export default productReducer;
