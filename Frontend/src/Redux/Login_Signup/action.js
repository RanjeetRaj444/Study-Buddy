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
			dispatch({ type: GET_AUTH_SUCCESS, payload: res.data.token });
      console.log(res.data);
			toast({
				title: "User login.",
				description: res.data.msg,
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		})
		.catch((err) => {
			dispatch({ type: GET_AUTH_FAILURE, payload: err.message });
			toast({
				title: "Login Failed.",
				description: err.message,
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
		});
};
