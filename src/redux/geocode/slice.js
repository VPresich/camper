import { createSlice } from "@reduxjs/toolkit";
import { geocodeLocation } from "./operations";

const geocodeSlice = createSlice({
  name: "geocode",
  initialState: {
    coordinates: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(geocodeLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(geocodeLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coordinates = action.payload;
      })
      .addCase(geocodeLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default geocodeSlice.reducer;
