import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";
export const signup = (formData) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
};

export const getAllBooks = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://studybuddy-backend-t2yy.onrender.com/books`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      // console.log(data.data);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
export const getOneBook = (id) => (dispatch) => {
  console.log(id)
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://studybuddy-backend-t2yy.onrender.com/books/getOneData/${id}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      console.log(data.data)
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
