import { AUTH_REQUEST } from "./actionTypes";

export const signup = (formData) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
};

export const login = (logindata) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
};
