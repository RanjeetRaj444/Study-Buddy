import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, LOGOUT_SUCCESS } from "./actionType"

const initialState = {
  isLoading: false,
  isAuth: localStorage.getItem('isAuth')||"",
  token: localStorage.getItem('token')||"",
  isError: false,
};

export const reducer = (state=initialState,{type,payload})=>{
  switch(type){
      case GET_AUTH_REQUEST : {
          return {
              ...state,
              isLoading:true,
              isAuth: false,
              isError : false
          }
      }
      case GET_AUTH_SUCCESS : {
          localStorage.setItem("token", payload);
          localStorage.setItem("isAuth", true);
          return {
              ...state,
              isLoading:false,
              token:localStorage.getItem('token'),
              isAuth: localStorage.getItem('isAuth'),
              isError : false
          }
      }
      case GET_AUTH_FAILURE : {
          localStorage.removeItem("token");
          localStorage.removeItem("isAuth");
          return {
              ...state,
              isLoading:false,
              token:"",
              isAuth: false,
              isError : true
          }
      }
      case LOGOUT_SUCCESS :{
          localStorage.removeItem("token");
          localStorage.removeItem("isAuth");
          return {
              token:"",
              isAuth: false,
              isError : false
          }
      }

      default : return {state}
  }
}