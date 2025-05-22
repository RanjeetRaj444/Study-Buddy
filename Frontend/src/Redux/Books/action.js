import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

export const getAllBooks = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://studybuddy-backend-t2yy.onrender.com/books`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.log(err);
    });
};
export const getOneBook = (id) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://studybuddy-backend-t2yy.onrender.com/books/getOneData/${id}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      // console.log(data.data)
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.log(err);
    });
};

export const newGetAllBooks = (subject) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`http://localhost:3001/books/${subject}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      // console.log(data.data);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.log(err);
    });
};
export const newGetOneBooks = (subject, id) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`http://localhost:3001/books/${subject}/${id}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      // console.log(data.data);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.log(err);
    });
};
