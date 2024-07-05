import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    equipmentfilters: [],
  },
  reducers: {
    saveFilters: {
      reducer: (state, action) => {
        state.equipmentfilters = action.payload;
      },
    },
  },
});

export const { saveFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
