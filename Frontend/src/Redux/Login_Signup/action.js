import axios from "axios";
import {
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionType";

export const login = (userData, toast) => (dispatch) => {
  dispatch({ type: GET_AUTH_REQUEST });
  return axios
    .post("https://studybuddy-backend-t2yy.onrender.com/users/login", userData)
    .then((res) => {
      console.log("succe");
      dispatch({ type: GET_AUTH_SUCCESS, payload: res.data.token });
      toast({
        title: "User login.",
        description: res.data.msg,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    })
    .catch((err) => {
      console.log("error");
      dispatch({ type: GET_AUTH_FAILURE, payload: err.response.data.msg });
      toast({
        title: "Login Failed.",
        description: err.response.data.msg,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    });
};

export const LogoutSuccess = () => (dispatch) => {
  return axios
    .get("https://studybuddy-backend-t2yy.onrender.com/users/logout")
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
      // console.log()
    });
};
