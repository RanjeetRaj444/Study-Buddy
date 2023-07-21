import {
  AUTH_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  token: "",
  tokenID: "",
  isError: false,
  errorMessage: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tokenID: payload,
        isError: false,
        isAuth: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errorMessage: payload,
      };
    }

    default: {
      return state;
    }
  }
};
