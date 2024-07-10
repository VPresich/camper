import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stack: [],
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    addModal(state, action) {
      state.stack.push(action.payload);
    },
    removeModal(state) {
      state.stack.length > 0 && state.stack.pop();
    },
  },
});

export const { addModal, removeModal, isTopModal } = modalSlice.actions;
export default modalSlice.reducer;
