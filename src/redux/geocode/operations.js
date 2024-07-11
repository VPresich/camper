import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGoogleGeoInst } from "../../api/axiosInst";

const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const geocodeLocation = createAsyncThunk(
  "geocode/geocodeLocation",
  async ({ city, country }, thunkAPI) => {
    try {
      const response = await axiosGoogleGeoInst.get("json", {
        params: {
          address: `${city}, ${country}`,
          key: googleApiKey,
        },
      });

      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        return { lat, lng };
      }
      throw new Error("Location not found");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const geocodeCity = createAsyncThunk(
  "geocode/geocodeCity",
  async ({ lat, lng }, thunkAPI) => {
    try {
      const response = await axiosGoogleGeoInst.get("json", {
        params: {
          latlng: `${lat},${lng}`,
          key: googleApiKey,
        },
      });

      const { results } = response.data;
      if (results.length > 0) {
        const addressComponents = results[0].address_components;
        for (let component of addressComponents) {
          if (component.types.includes("locality")) {
            return component.long_name;
          }
        }
      }
      throw new Error("City not found");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
