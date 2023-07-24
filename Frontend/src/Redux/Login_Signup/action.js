import axios from "axios"
import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, LOGOUT_SUCCESS } from "./actionType"


export const login = (userData) => (dispatch) => {
  dispatch({ type: GET_AUTH_REQUEST })

  return axios.post("https://studybuddy-backend-t2yy.onrender.com/users/login", userData).then((res) => {
    dispatch({ type: GET_AUTH_SUCCESS, payload: res.data.token })
    alert(res.data.msg)
  }).catch((err) => {
    console.log(err)
    dispatch({ type: GET_AUTH_FAILURE, payload: err.message })
  })
}

export const LogoutSuccess = () => (dispatch) => {
  return axios.get("https://studybuddy-backend-t2yy.onrender.com/users/logout").then((res) => {
    dispatch({ type: LOGOUT_SUCCESS })
  })

}