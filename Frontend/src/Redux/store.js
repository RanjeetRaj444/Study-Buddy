import { combineReducers } from "redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";

import { reducer as singleData } from "./Books/reducer";
import { reducer as authReducer } from "./Login_Signup/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: singleData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
