import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: JSON.parse(localStorage.getItem("modalIsOpen")) || false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      localStorage.setItem("modalIsOpen", JSON.stringify(true));
    },
    closeModal: (state) => {
      state.isOpen = false;
      localStorage.setItem("modalIsOpen", JSON.stringify(false));
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
