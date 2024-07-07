import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const fetchFavorites = createAsyncThunk(
  "campers/fetchFavorites",
  async (ids, thunkAPI) => {
    try {
      const promises = ids.map((id) => axiosInst.get(`campers/${id}`));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);  
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
