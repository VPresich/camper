import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getCampersPerPage = createAsyncThunk(
  "campers/getPage",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`campers`, {
        params: {
          page,
          limit,
        },
      });
      return {
        items: response.data,
        totalItems: response.data.length,
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCampersWithParams = createAsyncThunk(
  "campers/withParams",
  async ({ page, limit, queryParams }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`campers`, {
        params: {
          page,
          limit,
          form: queryParams.form ? queryParams.form : "van",
          location: queryParams.location ? queryParams.location : "",
        },
      });
      return {
        items: response.data,
        totalItems: response.data.length,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
