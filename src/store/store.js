import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import cartReducer from "./cartSlice.js";
import modalReducer from "./modalSlice.js";
import todoReducer from "./todoSlice.js";
import playersReducer from "./playersSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
    todo: todoReducer,
    players: playersReducer,
  },
});
