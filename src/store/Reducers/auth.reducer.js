import {
  SIGNINLOADING,
  SIGNINERROR,
  SIGNINSUCCESS,
  CLEARSIGNINSTATE,
  SIGNUPLOADING,
  SIGNUPSUCCESS,
  SIGNUPERROR,
} from "../Actions/constantType";

// initialState for sign-in
const initialState = {
  user: [],
  signInMessage: "",
  signInError: false,
  signInLoading: false,
  signInSuccess: false,
  signUpMessage: "",
  signUpSuccess: "",
  signUpLoading: false,
  signUpError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNINLOADING:
      return {
        ...state,
        signInLoading: true,
      };

    case SIGNINERROR:
      return {
        ...state,
        signInError: true,
        signInSuccess: false,
        signInLoading: false,
        signInMessage: action.message,
      };

    case SIGNINSUCCESS:
      return {
        ...state,
        user: action.payload,
        signInSuccess: true,
        signInLoading: false,
        signInMessage: "Sign In Success",
      };

    case CLEARSIGNINSTATE:
      return initialState;

    case SIGNUPLOADING:
      return {
        ...state,
        signUpLoading: true,
      };

    case SIGNUPSUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        signUpLoading: false,
        signUpMessage: "Sign Up Success",
      };

    case SIGNUPERROR:
      return {
        ...state,
        signUpError: true,
        signUpLoading: false,
        signUpMessage: action.message,
      };

    default:
      return state;
  }
};

export default authReducer;
