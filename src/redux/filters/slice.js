import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    params: { form: "van" },
  },
  reducers: {
    saveQueryParams: {
      reducer: (state, action) => {
        state.params = action.payload;
      },
    },
  },
});

export const { saveQueryParams } = filtersSlice.actions;
export default filtersSlice.reducer;
