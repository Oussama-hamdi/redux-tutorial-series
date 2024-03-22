import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bankSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    bank: bankReducer,
    products: productsReducer,
  },
});

export default store;
