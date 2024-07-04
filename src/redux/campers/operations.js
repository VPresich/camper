import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getCampersPerPage = createAsyncThunk(
  "campers/getPage",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`campers`, {
        params: { page, limit },
      });
      return {
        items: response.data,
        totalItems: response.data.lenght,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamper",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.get(`campers/${id}`);
      console.log("getCamper", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
