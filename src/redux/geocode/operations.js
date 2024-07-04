import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGeoInst, API_KEY } from "../../api/axiosInst";

export const geocodeLocation = createAsyncThunk(
  "geocode/geocodeLocation",
  async ({ city, country }, thunkAPI) => {
    try {
      console.log("CITY", city);
      const response = await axiosGeoInst.get("json", {
        params: {
          q: `${city}, ${country}`,
          key: API_KEY,
        },
      });

      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry;
        return { lat, lng };
      }
      throw new Error("Location not found");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
