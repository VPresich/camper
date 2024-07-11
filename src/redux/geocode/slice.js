import { createSlice } from "@reduxjs/toolkit";
import { geocodeLocation, geocodeCity } from "./operations";

const geocodeSlice = createSlice({
  name: "geocode",
  initialState: {
    coordinates: null,
    city: "",
    isLoading: false,
    error: null,
  },

  reducers: {
    clearCoordinates(state) {
      state.coordinates = {
        lat: 0,
        lng: 0,
      };
    },
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
      })

      .addCase(geocodeCity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(geocodeCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.city = action.payload;
      })
      .addCase(geocodeCity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCoordinates } = geocodeSlice.actions;
export default geocodeSlice.reducer;
