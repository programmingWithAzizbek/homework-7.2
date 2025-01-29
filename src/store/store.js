import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import cartReducer from "./cartSlice.js";
import modalReducer from "./modalSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
