import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {    
    params: { form: "van" },
  },
  reducers: {    
    saveQueryParams: {
      reducer: (state, action) => {
        console.log("Reduser", action.payload);
        state.params = action.payload;
      },
    },
  },
});

export const { saveQueryParams } = filtersSlice.actions;
export default filtersSlice.reducer;
