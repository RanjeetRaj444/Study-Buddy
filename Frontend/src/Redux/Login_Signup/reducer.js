import {
	GET_AUTH_FAILURE,
	GET_AUTH_REQUEST,
	GET_AUTH_SUCCESS,
	LOGOUT_SUCCESS,
} from "./actionType";

const initialState = {
	isLoading: false,
	isAuth: false,
	token: localStorage.getItem("token") || undefined,
	isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_AUTH_REQUEST:
			return {
				...state,
				isLoading: true,
				isAuth: false,
				isError: false,
			};
		case GET_AUTH_SUCCESS:
			localStorage.setItem("token", payload);
			return {
				...state,
				isLoading: false,
				token: localStorage.getItem("token"),
				isAuth: true,
				isError: false,
			};

		case GET_AUTH_FAILURE:
			localStorage.removeItem("token");
			return {
				...state,
				isLoading: false,
				token: "",
				isAuth: false,
				isError: true,
			};

		case LOGOUT_SUCCESS:
			localStorage.removeItem("token");
			return {
				token: undefined,
				isAuth: false,
				isError: false,
			};

		default:
			return state;
	}
};
