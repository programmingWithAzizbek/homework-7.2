import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
      saveToLocalStorage(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveToLocalStorage(state.items);
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
      saveToLocalStorage(state.items);
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
      saveToLocalStorage(state.items);
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
