import { configureStore } from "@reduxjs/toolkit";
import cryptoApiReducer from "./features/cryptoApi";
import cryptoNewsApiReducer from "./features/cryptoNewsApi";

export const store = configureStore({
  reducer: {
    cryptoData: cryptoApiReducer,
    cryptoNewsData: cryptoNewsApiReducer,
  },
});
