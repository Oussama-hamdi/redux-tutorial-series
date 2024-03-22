import { createStore, combineReducers, applyMiddleware } from "redux";
import bankReducer from "./reducers/bankReducer";
import productsReducer from "./reducers/productsReducer";
import { thunk } from "redux-thunk";

const appReducer = combineReducers({
  bank: bankReducer,
  product: productsReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
