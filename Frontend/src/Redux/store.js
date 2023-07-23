import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as singleData } from "./Books/reducer";

const rootReducer = combineReducers({
  singleData,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
