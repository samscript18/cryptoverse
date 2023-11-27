import { configureStore } from "@reduxjs/toolkit";
import cryptoApiReducer from "./features/cryptoApiSlice";
import cryptoNewsApiReducer from "./features/cryptoNewsApiSlice";

export const store = configureStore({
  reducer: {
    cryptoData: cryptoApiReducer,
    cryptoNewsData: cryptoNewsApiReducer,
  },
});
