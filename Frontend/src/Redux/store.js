import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as singleData } from "./Books/reducer";
import { reducer as authReducer } from "./Login_Signup/reducer";

const rootReducer = combineReducers({
  singleData,
  authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
