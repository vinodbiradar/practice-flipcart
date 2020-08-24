import { FILTER_ITEMS } from "../Actions/constantType";

const initialState = {
  searchItems: "",
};

//defining the reducers function
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      return {
        ...state,
        searchItems: action.key,
      };

    default:
      return state;
  }
};

export default searchReducer;
