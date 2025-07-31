import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";
import { productApi } from "./AllSlice/Api/product.Api";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
